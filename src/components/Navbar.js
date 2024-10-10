import React from 'react';
import styled from 'styled-components';
import {
   SignedIn,
   SignedOut,
   SignInButton,
   UserButton,
   useUser,
} from '@clerk/clerk-react';

const Navbar = () => {
   const { user } = useUser();

   return (
      <Wrapper>
         {!user && (
            <div>
               <span>Welcome Guest</span>
            </div>
         )}
         <SignedOut>
            <SignInButton>
               <button className="login-btn">Login</button>
            </SignInButton>
         </SignedOut>

         <SignedIn>
            <span>Welcome,</span>
            <div>
               <strong>{user?.fullName || 'User'}</strong>
            </div>
            <UserButton />
         </SignedIn>
      </Wrapper>
   );
};

const Wrapper = styled.nav`
   padding: 1.5rem;
   margin-bottom: 4rem;
   background: var(--clr-white);
   text-align: center;
   display: grid;
   grid-template-columns: auto auto 100px;
   justify-content: center;
   align-items: center;
   gap: 1.5rem;

   button {
      background: transparent;
      border: transparent;
      font-size: 1.2rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      color: var(--clr-grey-5);
      cursor: pointer;
   }
`;

export default Navbar;
