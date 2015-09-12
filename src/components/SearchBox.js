import React, {Component, PropTypes} from 'react';
import exposeRouter from './exposeRouter';

class SearchBox extends Component {
  static propTypes = {
    query: PropTypes.object,
    router: React.PropTypes.object.isRequired
  }

  handleSubmit(e) {
    e.preventDefault();
    const {router, query} = this.props;
    const {props:{location:{pathname}}} = router;
    var inputValue = React.findDOMNode(this.refs.searchBoxInput).value;
    if (!query || query.q !== inputValue) {
      const newQuery = {
        ...query,
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
      <form name='searchForm' onSubmit={(e) => {this.handleSubmit(e)}}>
        <div className='col-md-2'>
          <input
            className='form-control'
            type='text'
            name='q'
            ref='searchBoxInput'
            placeholder={'Search'}
            defaultValue={defaultValue}
            />
          <input type='hidden' name='page' value='1'/>
        </div>
      </form>
    );
  }
}

export default exposeRouter(SearchBox)
