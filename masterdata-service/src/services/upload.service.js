import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import sharp from 'sharp';

const s3Client = new S3Client({
  endpoint: process.env.S3_ENDPOINT || 'https://s3.jekoyu.dev',
  region: process.env.S3_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY
  },
  forcePathStyle: true // Required for MinIO
});

const BUCKET_NAME = process.env.S3_BUCKET || 'bidhouse';
const CDN_URL = process.env.S3_CDN_URL || 'https://s3.jekoyu.dev';

/**
 * Upload a file to S3/MinIO with auto-conversion to WebP for images
 * @param {Buffer} fileBuffer - The file buffer
 * @param {string} originalName - Original filename
 * @param {string} mimeType - File MIME type
 * @param {string} folder - Folder path in bucket
 * @returns {Promise<{url: string, key: string}>}
 */
export const uploadFile = async (fileBuffer, originalName, mimeType, folder = 'items') => {
  let bufferToUpload = fileBuffer;
  let contentType = mimeType;
  let extension = path.extname(originalName);

  console.log(`[Upload] Starting upload: ${originalName}, type: ${mimeType}, folder: ${folder}`);

  // Auto-convert images to WebP
  if (mimeType.startsWith('image/')) {
    try {
      bufferToUpload = await sharp(fileBuffer)
        .webp({ quality: 80 })
        .toBuffer();
      
      contentType = 'image/webp';
      extension = '.webp';
      console.log(`[Upload] Image converted to WebP`);
    } catch (error) {
      console.error('[Upload] Image conversion failed, uploading original file:', error.message);
    }
  }

  const key = `${folder}/${uuidv4()}${extension}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: bufferToUpload,
    ContentType: contentType,
    ACL: 'public-read'
  });

  try {
    console.log(`[Upload] Sending to S3: ${BUCKET_NAME}/${key}`);
    await s3Client.send(command);
    console.log(`[Upload] Success: ${BUCKET_NAME}/${key}`);
  } catch (error) {
    console.error(`[Upload] S3 Error:`, error.message);
    console.error(`[Upload] S3 Error Code:`, error.Code || error.code);
    
    // Log raw response for debugging
    if (error.$response) {
      console.error(`[Upload] S3 Raw Response Status:`, error.$response.statusCode);
      if (error.$response.body) {
        try {
          const bodyText = await error.$response.body.transformToString();
          console.error(`[Upload] S3 Raw Response Body:`, bodyText.substring(0, 500));
        } catch (e) {
          console.error(`[Upload] Could not read response body`);
        }
      }
    }
    
    throw new Error(`Failed to upload file to S3: ${error.message}`);
  }

  return {
    url: `${CDN_URL}/${BUCKET_NAME}/${key}`,
    key
  };
};

/**
 * Upload multiple files
 * @param {Array<{buffer: Buffer, originalname: string, mimetype: string}>} files
 * @param {string} folder
 * @returns {Promise<Array<{url: string, key: string}>>}
 */
export const uploadMultipleFiles = async (files, folder = 'items') => {
  const uploadPromises = files.map(file => 
    uploadFile(file.buffer, file.originalname, file.mimetype, folder)
  );
  return Promise.all(uploadPromises);
};

/**
 * Delete a file from S3 using its full URL
 * @param {string} fileUrl - The full URL of the file
 */
export const deleteFileFromUrl = async (fileUrl) => {
  try {
    if (!fileUrl.includes(BUCKET_NAME)) return; // Not an S3 url

    // Extract key from URL
    const parts = fileUrl.split(`${BUCKET_NAME}/`);
    if (parts.length < 2) return;
    
    const key = parts[1];
    
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key
    });
    
    await s3Client.send(command);
  } catch (error) {
    console.error(`Failed to delete file from S3: ${fileUrl}`, error);
  }
};

export default { uploadFile, uploadMultipleFiles, deleteFileFromUrl };
