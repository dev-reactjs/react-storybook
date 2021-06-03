import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckBox = ({ onChange, checked, variant, size, label, textcolor, ...props }) => {

  return (
    <FormControlLabel
      control={<Checkbox
        onChange={(e) => onChange && onChange(e)}
        checked={checked}
        size={size}
        color={variant}
        {...props}
      />}
      label={<span style={textcolor && { color: textcolor }}>{label}</span>}
    />
  );
}

CheckBox.defaultProps = {
  size: 'medium',
  variant: 'primary'
}

CheckBox.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
  textcolor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckBox;


