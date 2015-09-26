import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';

class SearchBox extends Component {
  static propTypes = {
    query: PropTypes.string
  }

  handleSubmit(e) {
    e.preventDefault();
    const {query} = this.props;
    const { state: { location: {pathname}}} = router;
    const inputValue = findDOMNode(this.refs.searchBoxInput).value;
    if (!query || query !== inputValue) {
      const newQuery = {
        q: inputValue,
        page: 1
      };
      router.transitionTo(pathname, newQuery);
    }
  }

  render() {
    const {query} = this.props;
    const defaultValue = query && query.q;

    return (
      <form name="searchForm" onSubmit={(e) => {this.handleSubmit(e);}}>
        <div className="col-md-2">
          <input
            className="form-control"
            type="text"
            name="q"
            ref="searchBoxInput"
            placeholder={'Search'}
            defaultValue={defaultValue}
            />
          <input type="hidden" name="page" value="1"/>
        </div>
      </form>
    );
  }
}

export default SearchBox;
