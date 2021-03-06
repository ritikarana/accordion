import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface props {
  children: object;
  isOpen: boolean;
  label: string;
  onClick: (label: string) => void;
}

class AccordionSection extends Component<props> {
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div
        style={{
          background: isOpen ? '#fae042' : '#6db65b',
          border: '1px solid #008f68',
          padding: '5px 10px',
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: '#6db65b',
              border: '2px solid #008f68',
              marginTop: 10,
              padding: '10px 20px',
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
