import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

export const GithubContext = React.createContext();

export const GithubProvider = ({ children }) => {
   const [githubUser, setGithubUser] = useState(mockUser);
   const [repos, setRepos] = useState(mockRepos);
   const [followers, setFollowers] = useState(mockFollowers);
   const [username, setUsername] = useState('reactjs');
   // request isLoading
   const [requests, setRequests] = useState(0);
   const [isLoading, setIsLoading] = useState(false);
   // error
   const [error, setError] = useState({ show: false, msg: '' });

   const searchGithubUser = async (user) => {
      toggleError();
      setIsLoading(true);

      const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
         console.log(err)
      );
      if (response) {
         setGithubUser(response.data);
         const { login, followers_url } = response.data;
         //repos

         await Promise.allSettled([
            axios(`${rootUrl}/users/${login}/repos?per_page=100`),
            axios(`${followers_url}?per_page=100`),
         ])
            .then((results) => {
               const [repos, followers] = results;
               const status = 'fulfilled';
               if (repos.status === status) {
                  setRepos(repos.value.data);
               }
               if (followers.status === status) {
                  setFollowers(followers.value.data);
               }
            })
            .catch((err) => console.log(err));
      } else {
         toggleError(true, 'There is no user with that username');
      }
      checkRequest();
      setIsLoading(false);
   };

   // check rate
   const checkRequest = () => {
      axios(`${rootUrl}/rate_limit`)
         .then(({ data }) => {
            let {
               rate: { remaining },
            } = data;
            setRequests(remaining);
            // throw error
            if (remaining === 0) {
               toggleError(true, 'Sorry, You exceede your hourly rate limit!');
            }
         })
         .catch((err) => console.log(err));
   };

   //toggleError
   const toggleError = (show = false, msg = '') => {
      setError({ show, msg });
   };

   useEffect(checkRequest, []);

   return (
      <GithubContext.Provider
         value={{
            githubUser,
            repos,
            followers,
            requests,
            error,
            searchGithubUser,
            isLoading,
         }}
      >
         {children}
      </GithubContext.Provider>
   );
};
