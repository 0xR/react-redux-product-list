import React from 'react';

import ProductImage from './ProductImage';

export default class ProductTile extends React.Component {
  render() {
    const productClass = 'col-xs-6 col-sm-4 col-md-3 col-lg-3';
    const {
      website_description: title,
      product_number: productNumber,
      normalized_name: normalizedName
      } = this.props.product;
    return (
      <div style={{textAlign: 'center'}} className={productClass}>
        <div style={{height: '60px'}}>{title}</div>
        <div><ProductImage productNumber={productNumber} normalizedName={normalizedName} alt={title}/></div>
      </div>
    );
  }
}

ProductTile.propTypes = {
  product: React.PropTypes.object.isRequired
};

