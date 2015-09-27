import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import exposeRouter from './exposeRouter';

class SearchBox extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  handleSubmit(e) {
    e.preventDefault();
    const {history, location: { query, pathname }} = this.props;
    const inputValue = findDOMNode(this.refs.searchBoxInput).value;
    if (!query || query.q !== inputValue) {
      const newQuery = {
        ...query,
        q: inputValue,
        page: 1
      };
      history.pushState(null, pathname, newQuery);
    }
  }

  render() {
    const {location: { query }} = this.props;
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

export default exposeRouter(SearchBox);
