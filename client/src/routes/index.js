
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'containers/Home'
import CreateBid from 'containers/CreateBid'
import Login from 'containers/Login'
import Register from 'containers/Register'
import NotFound from 'containers/NotFound'
import Profile from 'containers/Profile'
import Iframe from 'containers/Iframe'

const routes = (
  <Switch>
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/explore' component={Home} />
    <Route exact path='/create' component={CreateBid} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/iframe/:address' component={Iframe} />
    <Route component={NotFound} />
  </Switch>
)

export default routes
