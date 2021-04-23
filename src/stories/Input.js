import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Search, ArrowClockwise, ArrowLeftCircleFill, BarChartFill } from 'react-bootstrap-icons';
import './input.css';

/**
 * Primary Input component for user interaction
 */
export const Input = ({ primary, borderColor, size, label, iconColor, placeholder, iconType, ...props }) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  const labelMode = primary ? 'storybook-label--primary' : 'storybook-label--secondary';

  return (
    <div className="container">
      <label for="input" className={['storybook-label', `storybook-label--${size}`, labelMode].join(' ')}>
        {label}
      </label>
      <input
        type="text"
        className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}
        style={borderColor && { borderColor }}
        id="input"
        placeholder={placeholder}
        {...props}
      />
      <IconComponent iconType={iconType} className={`search-icon search-icon-${size}`} style={iconColor && { fill: iconColor }} />
    </div>
  );
};

Input.propTypes = {
  /**
   * Is this the primary input component?
   */
  primary: PropTypes.bool,
  /**
   * What border color to use
   */
  borderColor: PropTypes.string,
  /**
   * How large should the input and label be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * input lael
   */
  label: PropTypes.string.isRequired,
  /**
   * icon color
   */
  iconColor: PropTypes.string,
  /**
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * How large should the input and label be?
   */
  iconType: PropTypes.oneOf(['search', 'reload', 'back', 'analytics']),
};

Input.defaultProps = {
  borderColor: null,
  primary: false,
  size: 'medium',
  label: "Input",
  iconType: 'search'
};

const IconComponent = ({ iconType, ...rest }) => {
  switch (iconType) {
    case 'analytics':
      return <BarChartFill {...rest} />;
    case 'back':
      return <ArrowLeftCircleFill {...rest} />;
    case 'reload':
      return <ArrowClockwise {...rest} />;
    default:
      return <Search {...rest} />;
  }
}