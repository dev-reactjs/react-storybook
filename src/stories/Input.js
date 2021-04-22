import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'react-bootstrap-icons';
import './input.css';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  const labelMode = primary ? 'storybook-label--primary' : 'storybook-label--secondary';
  return (
    <div className="container">
      <label for="input" className={['storybook-label', `storybook-label--${size}`, labelMode].join(' ')}>
        Circle
      </label>
      <input
        type="text"
        className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        id="input"
        placeholder="Search"
        {...props}
      />
      <Search className={`search-icon search-icon-${size}`} />
    </div>
  );
};

Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Input.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
