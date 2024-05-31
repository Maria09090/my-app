import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import "../style/account_page.css";


function Account() {
   return (
      <div>
      <Navbar />
      <div clssName="body">
           <h1 className='text'>Kontoen din</h1><br />
           <link rel="./istockphoto.jpg" href="./istockphoto.jpg"></link>
      </div>
       <Footer />
       </div>
   );  
}

export default Account;