import React from 'react';
 import About from '../about/About';
 import Banner from '../banner/Banner';


import ManageReview from '../managereview/ManageReview';
import Menu from '../menu/Menu';
import BookTable from '../booktable/BookTable';
import Footer from '../footer/Footer';
import Gallary from '../gallary/Gallary';
import Contact from '../contact/Contact';
const Home = () => {
    return (
        <div>
             <Banner></Banner> 
             <br></br>
             <br></br>
             <br></br>
             <About></About> 
             <br></br>
             <br></br>
             <br></br>
            <Menu></Menu>
            <br></br>
             <br></br>
             <br></br>
            <BookTable></BookTable>
            <br></br>
             <br></br>
             <br></br>
             <Gallary></Gallary> 
            <br></br>
             <br></br>
             <br></br>
            <ManageReview></ManageReview>
            <br></br>
             <br></br>
             <br></br>
            <Contact></Contact>
            <br></br>
             <br></br>
             <br></br>
        </div>
    );
};
export default Home;