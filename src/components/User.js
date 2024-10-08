import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';
const User = () => {
  return <section className='section'>
    <Wrapper className="section-center">
      <Card />
      <Followers />
    </Wrapper>
    {/* <div className='user-details'>
      <h2>User Details</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque elit. Sed ut tellus ac felis facilisis rutrum.</p>
    </div> */}
    
  </section>;
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
