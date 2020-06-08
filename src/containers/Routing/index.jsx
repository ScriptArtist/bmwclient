import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchPage from 'src/containers/Search';

const Routing = () => (
  <main className="fill">
    <Switch>
      <Route path="/:slug1?/:slug2?/:slug3?" component={SearchPage} />
    </Switch>
  </main>
);

const actions = { };

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routing);
