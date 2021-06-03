import React from 'react';
import PropTypes from 'prop-types';

export const image = ({ alt, src, width }) => {
  return (
    <div>
      <img src={src}
        width={width}
        alt={alt}
      />
    </div>
  )
}

image.defaultProps = {
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_LjU5IPxK2i1KfGU7k6NoSupsR6FZ2OX4g&usqp=CAU",
  width: "50%"
}

image.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  width: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
};

export default image;