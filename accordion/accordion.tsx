import React, { Component } from 'react';

import AccordionSection from './accordion-section';

interface Props {
  allowMultipleOpen: boolean;
  children: any;
}

class Accordion extends Component<Props> {
  static defaultProps = {
    allowMultipleOpen: false,
  };
  state = { openSections: {} };
  componentDidMount() {
    const openSections: object = {};
    this.props.children.forEach((child: any) => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });
    this.state = { openSections };
  }

  onClick = (label: string) => {
    const {
      props: { allowMultipleOpen },
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen,
        },
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen,
        },
      });
    }
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div style={{ border: '2px solid #008f68' }}>
        {children.map((child: any) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;
