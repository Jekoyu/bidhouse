import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

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
 * Upload a file to S3/MinIO
 * @param {Buffer} fileBuffer - The file buffer
 * @param {string} originalName - Original filename
 * @param {string} mimeType - File MIME type
 * @param {string} folder - Folder path in bucket (e.g., 'items', 'avatars')
 * @returns {Promise<{url: string, key: string}>}
 */
export const uploadFile = async (fileBuffer, originalName, mimeType, folder = 'items') => {
  const ext = path.extname(originalName);
  const key = `${folder}/${uuidv4()}${ext}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: fileBuffer,
    ContentType: mimeType,
    ACL: 'public-read'
  });

  await s3Client.send(command);

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

export default { uploadFile, uploadMultipleFiles };
