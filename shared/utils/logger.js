/**
 * Simple Logger Utility
 * Can be extended with Winston or other logging libraries
 */

const LOG_LEVELS = {
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG'
};

class Logger {
  constructor(serviceName = 'SERVICE') {
    this.serviceName = serviceName;
  }

  _formatMessage(level, message, meta = {}) {
    const timestamp = new Date().toISOString();
    const metaStr = Object.keys(meta).length > 0 ? JSON.stringify(meta) : '';
    return `[${timestamp}] [${this.serviceName}] [${level}] ${message} ${metaStr}`;
  }

  error(message, meta = {}) {
    console.error(this._formatMessage(LOG_LEVELS.ERROR, message, meta));
  }

  warn(message, meta = {}) {
    console.warn(this._formatMessage(LOG_LEVELS.WARN, message, meta));
  }

  info(message, meta = {}) {
    console.info(this._formatMessage(LOG_LEVELS.INFO, message, meta));
  }

  debug(message, meta = {}) {
    if (process.env.NODE_ENV === 'development') {
      console.debug(this._formatMessage(LOG_LEVELS.DEBUG, message, meta));
    }
  }
}

export default Logger;
