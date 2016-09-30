import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, FellowList, FellowDetails } from './containers';

export default () => (
  <Route path="/" component={App}>
    {/* Home (main) route */}
    <IndexRoute component={FellowList} />

    {/* Routes */}
    <Route path="details" component={FellowDetails} />

    {/* Catch all route */}
    <Route path="*" component={'Not found!'} status={404} />
  </Route>
);
