import React, { useContext } from 'react';
import Navbar from './navbar';
import Footer from './footer';

function Home() {
    const { currentUser } = useContext(AudioContext);
   return (
      <div>
      <Navbar /><div clssName="body">
          <div className="header-content">
           <h1 className='home'>Friskere Kropp AS</h1><br />
           {currentUser ? ( 
           <h2>velkomen, {currentUser.username}!</h2>
           ) : (
            <h2>Du er ikke logget inn</h2>
           )}

          </div>
      </div>
       <Footer />
       </div>
   )
}

export default Home;