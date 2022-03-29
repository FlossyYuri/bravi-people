import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ContactHome from './pages';

function Routes() {
  return (
    <BrowserRouter>
      <div className='bg-main-BG w-screen h-screen flex items-center justify-center text-main-text'>
        <Sidebar />
        <main className='ml-64'>
          <Switch>
            <Route exact path='/contacts' component={ContactHome} />
            <Route exact path='/dashboard' component={ContactHome} />
            <Route path='/*'>
              <Redirect to='/contacts' />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default Routes;
