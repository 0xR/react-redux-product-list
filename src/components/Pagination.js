import React from 'react';
import Link from 'react-router/lib/Link';

const pagesAround = 5;
const steps = 10;
const productPerPage = 48;

function getPages(page, total) {
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

const PaginationLinks = ({ page: currentPage, total, query}) => {
  const totalPages = Math.ceil(total / productPerPage);
  return (
    <div style={{textAlign: 'center'}}>
      <ul className="pagination">{getPages(currentPage, totalPages).map((page) =>
          <li key={page} className={page === currentPage ? 'active' : null}>
            <Link to="/products" query={{q: query, page}}>{page}</Link>
          </li>
      )}</ul>
    </div>
  );
};

PaginationLinks.propTypes = {
  total: React.PropTypes.number.isRequired,
  page: React.PropTypes.number.isRequired,
  query: React.PropTypes.string.isRequired
};

export default PaginationLinks;
