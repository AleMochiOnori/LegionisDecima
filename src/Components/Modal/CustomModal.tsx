import React from "react";
import "./CustomModal.css";

interface CustomModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  rating?: number;
  children?: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ show, onClose, title, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title || "Titolo Modale"}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
