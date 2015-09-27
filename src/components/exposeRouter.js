import React, {Component} from 'react';

// Higher order component exposing router.
// https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
export default function exposeRouter(Wrapped) {

  class ExposeRouter extends Component {
    render() {
      return <Wrapped {...this.props} history={this.context.history} location={this.context.location}/>;
    }
  }

  ExposeRouter.contextTypes = {
    history: React.PropTypes.object,
    location: React.PropTypes.object
  };

  return ExposeRouter;
}

