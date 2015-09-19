import React, {Component} from 'react';
import exposeRouter from './exposeRouter';

const pagesAround = 5;
const steps = 10;
const productPerPage = 48;

class PaginationLinks extends Component {
  getNewQueryParams(page) {
    const {router, query} = this.props;
    const {state:{location:{query: queryParams}}} = router;
    return {...queryParams, q: query, page};
  }

  handleClick(e, targetPage) {
    e.preventDefault();
    const {router, page} = this.props;
    const {state:{location:{pathname}}} = router;
    if (page !== targetPage) {
      router.transitionTo(pathname, this.getNewQueryParams(targetPage));
    }
  }

  hrefForPage(page) {
    const {router} = this.props;
    const {state:{location:{pathname}}} = router;
    return router.makeHref(pathname, this.getNewQueryParams(page));
  }

  static getPages(page, total) {
    const pages = [];
    for(var i = 1; i <= total; i++) {
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
    return (
      <div style={{textAlign: 'center'}}>
        <ul className="pagination">{PaginationLinks.getPages(currentPage, totalPages).map((page) =>
            <li key={page} className={page === currentPage ? 'active' : null}>
              <a href={this.hrefForPage(page)}
                 onClick={(e) => this.handleClick(e, page)}>{page}</a>
            </li>
        )}</ul>
      </div>
    );
  }
}

export default exposeRouter(PaginationLinks);

PaginationLinks.propTypes = {
  router: React.PropTypes.object.isRequired,
  query: React.PropTypes.string.isRequired,
  total: React.PropTypes.number.isRequired,
  page: React.PropTypes.number.isRequired
};
