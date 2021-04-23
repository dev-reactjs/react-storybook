import React from 'react';
import PropTypes from 'prop-types';
import { Search, ArrowClockwise, ArrowLeftCircleFill, BarChartFill } from 'react-bootstrap-icons';
import { TextField, makeStyles } from '@material-ui/core';
import './input.css';

/**
 * Primary Input component for user interaction
 */

export const InputComponent = ({ primary, borderColor, size, label, iconColor, placeholder, iconType, ...props }) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  const labelMode = primary ? 'storybook-label--primary' : 'storybook-label--secondary';

  const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: borderColor || (primary && "#1ea7fd"),
        padding: "18.5px 18px"
      },
      "& .MuiOutlinedInput-input": {
        color: borderColor || (primary && "#1ea7fd")
      },
      "& .MuiInputLabel-outlined": {
        color: borderColor || (primary && "#1ea7fd")
      },
    }
  });

  const classes = useStyles();

  return (
    <div className="container">
      <label for="input" style={{ color: borderColor }} className={['storybook-label', `storybook-label--${size}`, labelMode].join(' ')}>
        {label}
      </label>
      <TextField
        className={['storybook-input', `storybook-input--${size}`, mode, classes.root].join(' ')}
        style={{ borderColor, width: 270, height: "100%" }}
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        label={label}
        size={size}
        {...props}
      />
      <IconComponent iconType={iconType} className={`search-icon search-icon-${size}`} style={iconColor && { fill: iconColor }} />
    </div>
  );
};

InputComponent.propTypes = {
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

InputComponent.defaultProps = {
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