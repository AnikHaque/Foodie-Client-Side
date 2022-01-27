import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IndividualMenu from '../individualmenu/IndividualMenu';
import './Menu.css';

const Menu = () => {
    const [Menus, setMenus] = useState([])
    useEffect(()=>{
fetch('https://damp-retreat-61919.herokuapp.com/menu')
.then(res => res.json())
.then(data => setMenus(data))
    },[])


    return (
        <div className='mt-5 mb-5'>
            <h1 className="text-center mb-5 fw-bold menu-heading">Our Menu</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-4 g-4">
                {
                    Menus.map(Menu => <IndividualMenu
                        key={Menu._id}
                        Menu={Menu}
                    ></IndividualMenu>)
                }
                </div>
                </div>
            </div>
  </div>
    )}     


export default Menu;