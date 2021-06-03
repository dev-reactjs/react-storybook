import { React } from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioBt = ({ checked, onChange, variant, size, label, textcolor, disabled, ...props }) => {

  return (
    <FormControlLabel
      control={<Radio
        checked={checked}
        onChange={(e) => onChange && onChange(e)}
        disabled={disabled}
        size={size}
        color={variant}
        {...props}
      />}
      label={<span style={textcolor && { color: textcolor }}>{label}</span>}
    />
  );
}

RadioBt.defaultProps = {
  size: 'medium',
  variant: 'primary',
  checked: false
}

RadioBt.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
  textcolor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'default']),
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default RadioBt;


