import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContactHome from './pages';

function Routes() {
  return (
    <BrowserRouter>
      <div className='bg-main-BG min-h-screen text-main-text'>
        <Sidebar />
        <Header />
        <main className='h-screen pl-64 bg-red-50 w-full'>
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
