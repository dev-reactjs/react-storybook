import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

/**
 * Primary UI component for user interaction
 */
export const ButtonCom = ({ variant, style, color, size, label, ...props }) => {
  return (
    <div>
      <Button
        variant={variant}
        style={style}
        size={size}
        color={color}
        {...props}
      >
        {label}
      </Button>
    </div>


    /*   <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button> */
  );
};

ButtonCom.propTypes = {

  /** 
   * what is variant for button
   */

  variant: PropTypes.oneOf(['outlined', 'contained', 'default']),

  /** 
  * what is color for button
  */
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),

  /**
   * How large should the button be?
   */

  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

ButtonCom.defaultProps = {
  size: 'medium',
  label: 'Click Me',
  variant: 'default',
  color: 'primary'
};
