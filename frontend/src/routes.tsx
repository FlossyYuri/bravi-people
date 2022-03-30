import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ContactProvider } from './context/useContacts';
import ContactHome from './pages';

function Routes() {
  return (
    <BrowserRouter>
      <div className='bg-main-BG min-h-screen text-main-text'>
        <Sidebar />
        <Header />
        <main className='h-screen pl-64 pt-16 w-full'>
          <div className='container '>
            <Switch>
              <ContactProvider>
                <Route exact path='/contacts' component={ContactHome} />
              </ContactProvider>
              <Route exact path='/dashboard' component={ContactHome} />
              <Route path='/*'>
                <Redirect to='/contacts' />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default Routes;
