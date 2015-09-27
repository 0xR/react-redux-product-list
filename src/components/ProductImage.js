import React from 'react';

const ProductImage = ({productNumber, normalizedName, alt}) =>{
  const src = 'https://assets.wehkamp.com/i/wehkamp/' + productNumber + '_pb_01/' + normalizedName + '.jpg?$product300x300$';
  return (
    <img className="img-responsive" {...{src, alt}}/>
  );
};


ProductImage.propTypes = {
  productNumber: React.PropTypes.string.isRequired,
  normalizedName: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired
};

export default ProductImage;
