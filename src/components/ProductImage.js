import React from 'react';

export default class ProductImage extends React.Component {
  render() {
    const productNumber = this.props.productNumber;
    const normalizedName = this.props.normalizedName;
    const src = 'https://assets.wehkamp.com/i/wehkamp/' + productNumber + '_pb_01/' + normalizedName + '.jpg?$product300x300$';
    return (
      <img className='img-responsive' src={src} alt={this.props.alt}/>
    );
  }
}

ProductImage.propTypes = {
  productNumber: React.PropTypes.string.isRequired,
  normalizedName: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired
};
