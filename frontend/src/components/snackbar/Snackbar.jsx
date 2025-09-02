import { useState, useEffect } from "react";
import "./Snackbar.css";

export default function Snackbar({ 
  message, 
  type = "success", 
  duration = 4000, 
  isVisible, 
  onClose 
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(() => {
          onClose && onClose();
        }, 300); // Wait for animation to complete
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose && onClose();
    }, 300);
  };

  if (!isVisible && !show) return null;

  return (
    <div className={`snackbar ${type} ${show ? 'show' : 'hide'}`}>
      <div className="snackbar-content">
        <div className="snackbar-icon">
          {type === "success" && "✓"}
          {type === "error" && "✕"}
          {type === "warning" && "⚠"}
          {type === "info" && "ℹ"}
        </div>
        <div className="snackbar-message">{message}</div>
        <button className="snackbar-close" onClick={handleClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
