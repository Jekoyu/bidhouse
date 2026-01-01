import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router = express.Router();
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';

// Public routes - No JWT needed
router.post('/register', createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/api/auth': '/api/auth' }
}));

router.post('/login', createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/api/auth': '/api/auth' }
}));

// Proxy all other auth routes (like /me)
// Note: /me will be handled in the main index.js with jwtMiddleware if needed
// or we can put it here specifically.
export default router;
