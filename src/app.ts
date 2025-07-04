import { debug } from 'console';
import { Request, Response } from 'express';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware
// This middleware is used to set various HTTP headers for security
// Helmet helps secure Express apps by setting various HTTP headers
// CORS is used to allow cross-origin requests
app.use(helmet());
app.use(cors());

// Body parser
// This middleware is used to parse JSON bodies in requests
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.status(200).json({
    message: 'API is running! 🚀',
    version: '1.0.0',
  });
});

// TODO: Importer et utiliser les routes du dossier routes/
// TODO: Importer et utiliser les middlewares du dossier middleware/

// Middleware global de gestion d'erreurs (reste dans app.ts car il doit être en dernier)
app.use((err: any, _req: Request, res: Response) => {
  debug('Error:', err);

  res.status(err.status || 500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
  });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const NODE_ENV = process.env.NODE_ENV || 'development';

  app.listen(PORT, () => {
    debug(`🚀 Server running in ${NODE_ENV} mode`);
    debug(`📡 Server listening on port ${PORT}`);
    debug(`🔗 API available at: http://localhost:${PORT}\n`);
  });

  // Handle SIGTERM for graceful shutdown
  // This is useful in production environments to ensure the server
  // can shut down gracefully, allowing ongoing requests to complete.
  process.on('SIGTERM', () => {
    debug('\n\nSIGTERM received, shutting down gracefully');
    process.exit(0);
  });

  // Handle SIGINT (Ctrl+C) for graceful shutdown
  // This is useful for development to ensure the server shuts down cleanly
  // and releases resources properly.
  process.on('SIGINT', () => {
    debug('\n\nSIGINT received, shutting down gracefully');
    process.exit(0);
  });
}
