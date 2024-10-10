
import React from 'react';
import { Dashboard, Login, Error } from './pages';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/" exact>
               <SignedIn>
                  <Dashboard />
               </SignedIn>
               <SignedOut>
                  <Redirect to="/login" />
               </SignedOut>
            </Route>
            <Route path="/login">
               <SignedIn>
                  <Redirect to="/" />
               </SignedIn>
               <SignedOut>
                  <Login />
               </SignedOut>
            </Route>
            <Route path="*" component={Error} />
         </Switch>
      </Router>
   );
}

export default App;
