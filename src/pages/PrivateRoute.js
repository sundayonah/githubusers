// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useUser } from '@clerk/clerk-react';

// const PrivateRoute = ({ children, ...rest }) => {
//    const { isSignedIn } = useUser(); // Check if the user is signed in

//    return (
//       <Route
//          {...rest}
//          render={() => {
//             return isSignedIn ? children : <Redirect to="/login" />; // Redirect if not signed in
//          }}
//       ></Route>
//    );
// };

// export default PrivateRoute;
