import React, {Component} from 'react';
import Link from 'react-router/lib/Link';
import exposeRouter from './exposeRouter';

const pagesAround = 5;
const steps = 10;
const productPerPage = 48;

class PaginationLinks extends Component {
  static getPages(page, total) {
    const pages = [];
    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i % steps === 0 ||
        page - pagesAround <= i && i <= page + pagesAround ||
        i === total) {
        pages.push(i);
      }
    }
    return pages;
  }

  render() {
    const totalPages = Math.ceil(this.props.total / productPerPage);
    const currentPage = this.props.page;
    const { location: { query }} = this.props;
    return (
      <div style={{textAlign: 'center'}}>
        <ul className="pagination">{PaginationLinks.getPages(currentPage, totalPages).map((page) =>
            <li key={page} className={page === currentPage ? 'active' : null}>
              <Link to="/products" query={{...query, page}}>{page}</Link>
            </li>
        )}</ul>
      </div>
    );
  }
}

export default exposeRouter(PaginationLinks);

PaginationLinks.propTypes = {
  location: React.PropTypes.object.isRequired,
  total: React.PropTypes.number.isRequired,
  page: React.PropTypes.number.isRequired
};
