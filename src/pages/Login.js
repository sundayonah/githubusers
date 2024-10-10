import React from 'react';
import { SignedOut, SignInButton } from '@clerk/clerk-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';

const Login = () => {
   return (
      <Wrapper>
         <div className="container">
            <img src={loginImg} alt="Login" />
            <h1>Github User</h1>
            <SignedOut>
               <SignInButton>
                  <button className="btn">Login / Sign up</button>
               </SignInButton>
            </SignedOut>
         </div>
      </Wrapper>
   );
};

const Wrapper = styled.section`
   min-height: 100vh;
   display: grid;
   place-items: center;
   .container {
      width: 90vw;
      max-width: 600px;
      text-align: center;
   }
   img {
      margin-bottom: 2rem;
   }
   h1 {
      margin-bottom: 1.5rem;
   }
`;

export default Login;
