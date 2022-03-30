import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ContactProvider } from './context/useContacts';
import ContactHome from './pages';

function Routes() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <BrowserRouter>
      <div className='bg-main-BG min-h-screen text-main-text'>
        <Sidebar sidebar={sidebar} closeSidebar={() => setSidebar(false)} />
        <Header openSidebar={() => setSidebar(true)} />
        <main className='h-screen lg:pl-64 pl-0 pt-16 w-full'>
          <div className='w-full'>
            <ContactProvider>
              <Switch>
                <Route path='/contacts'>
                  <ContactHome />
                </Route>
                <Route exact path='/dashboard' component={ContactHome} />
                <Redirect to='/contacts' />
              </Switch>
            </ContactProvider>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default Routes;
