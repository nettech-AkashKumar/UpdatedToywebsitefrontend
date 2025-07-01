import React from 'react';
import './ExchangeReturnModal.css';

const ExchangeReturnModal = ({ onClose }) => {
  return (
    <div className="exchange-modal-overlay">
      <div className="exchange-modal">
        <button className="exchange-close-btn" onClick={onClose}>×</button>
        <h2 className="exchange-title">Easy Exchange & Return</h2>
        <p className="exchange-subtitle">HOW IT WORKS?</p>

        <div className="exchange-section">
          <h3 className="exchange-heading">EASY EXCHANGES</h3>
          <ol className="exchange-steps">
            <li>
              <span className="exchange-step-number">1</span>
              <span>
                Go to <strong>Menu &gt; My Orders &gt; Exchange</strong> and select the time slot for exchange
              </span>
            </li>
            <li>
              <span className="exchange-step-number">2</span>
              <span>Delivery agent will deliver the new product and pick up the old one</span>
            </li>
            <li>
              <span className="exchange-step-number">3</span>
              <span>No additional payment needed</span>
            </li>
          </ol>
        </div>

        <div className="exchange-section">
          <h3 className="exchange-heading">EASY RETURNS</h3>
          <ol className="exchange-steps">
            <li>
              <span className="exchange-step-number">1</span>
              <span>
                Go to <strong>Menu &gt; My Orders &gt; Return</strong> and select the time slot and mode for return
              </span>
            </li>
            <li>
              <span className="exchange-step-number">2</span>
              <span>Delivery agent will pick up the product</span>
            </li>
            <li>
              <span className="exchange-step-number">3</span>
              <span>Refund will be processed in 7-14 days after the quality check</span>
            </li>
          </ol>
        </div>

        <p className="exchange-note">
          <strong>Note:</strong> The product should not be damaged and the price tags should be intact wherever applicable.
        </p>
      </div>
    </div>
  );
};

export default ExchangeReturnModal;
