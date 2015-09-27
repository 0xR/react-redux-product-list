import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';

class SearchBox extends Component {
  static propTypes = {
    searchForQuery: PropTypes.func.isRequired,
    defaultValue: PropTypes.string
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchForQuery } = this.props;
    const inputValue = findDOMNode(this.refs.searchBoxInput).value;
    searchForQuery(inputValue);
  }

  render() {
    const {defaultValue} = this.props;
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
