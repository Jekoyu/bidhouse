/**
 * Standard API Response Formatter
 */

/**
 * Success response
 * @param {string} message - Success message
 * @param {any} data - Response data
 * @returns {object} Formatted success response
 */
export const successResponse = (message = "OK", data = null) => {
  return {
    success: true,
    message,
    data,
  };
};

/**
 * Error response
 * @param {string} message - Error message
 * @param {any} errors - Error details
 * @returns {object} Formatted error response
 */
export const errorResponse = (message = "Error", errors = null) => {
  return {
    success: false,
    message,
    errors,
  };
};

/**
 * Pagination response
 * @param {string} message - Success message
 * @param {any} data - Response data
 * @param {object} pagination - Pagination metadata
 * @returns {object} Formatted paginated response
 */
export const paginatedResponse = (
  message = "OK",
  data = [],
  pagination = {}
) => {
  return {
    success: true,
    message,
    data,
    pagination: {
      page: pagination.page || 1,
      limit: pagination.limit || 10,
      total: pagination.total || 0,
      totalPages: pagination.totalPages || 0,
    },
  };
};
