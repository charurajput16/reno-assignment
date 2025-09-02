import { useState, useCallback } from 'react';

export const useSnackbar = () => {
  const [snackbars, setSnackbars] = useState([]);

  const showSnackbar = useCallback((message, type = 'success', duration = 4000) => {
    const id = Date.now() + Math.random();
    const newSnackbar = {
      id,
      message,
      type,
      duration,
      isVisible: true
    };

    setSnackbars(prev => [...prev, newSnackbar]);

    // Auto remove after duration
    setTimeout(() => {
      hideSnackbar(id);
    }, duration);
  }, []);

  const hideSnackbar = useCallback((id) => {
    setSnackbars(prev => prev.filter(snackbar => snackbar.id !== id));
  }, []);

  const showSuccess = useCallback((message, duration = 4000) => {
    showSnackbar(message, 'success', duration);
  }, [showSnackbar]);

  const showError = useCallback((message, duration = 5000) => {
    showSnackbar(message, 'error', duration);
  }, [showSnackbar]);

  const showWarning = useCallback((message, duration = 4000) => {
    showSnackbar(message, 'warning', duration);
  }, [showSnackbar]);

  const showInfo = useCallback((message, duration = 4000) => {
    showSnackbar(message, 'info', duration);
  }, [showSnackbar]);

  return {
    snackbars,
    showSnackbar,
    hideSnackbar,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };
};
