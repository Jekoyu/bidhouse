/**
 * Activity Logger Utility
 * Sends activity logs to the Log Service asynchronously
 */

const LOG_SERVICE_URL = process.env.LOG_SERVICE_URL || 'http://localhost:3004';

/**
 * Log an activity to the central log service
 * @param {Object} data - Log data
 * @param {string} data.service - Name of the service originating the log
 * @param {string} data.action - Action performed (e.g., 'LOGIN', 'REGISTER', 'BID_PLACED')
 * @param {string} [data.userId] - ID of the user who performed the action
 * @param {Object} [data.details] - Additional details about the action
 * @param {string} [data.status] - Status of the action ('SUCCESS', 'FAILED')
 */
export const logActivity = async (data) => {
  try {
    // Fire and forget to avoid blocking the main flow
    fetch(`${LOG_SERVICE_URL}/api/logs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date()
      })
    }).catch(err => {
      console.error('[ActivityLogger] Failed to send log:', err.message);
    });
  } catch (error) {
    console.error('[ActivityLogger] Error:', error.message);
  }
};

export default logActivity;
