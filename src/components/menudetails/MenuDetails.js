import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm, useWatch } from "react-hook-form";

import './MenuDetails.css'
import useAuth from '../../hooks/useAuth';

const headingService={
   textAlign:'center',
   fontSize:'40px',
   fontWeight:'bolder'
}
const MenuDetails = () => {
   const {user} = useAuth();
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data =>{
       console.log(data);
       axios.post("https://damp-retreat-61919.herokuapp.com/food",data)
       .then(res=>{
           if(res.data.insertedId){
               alert("Added Successfully");
               reset();
               
           }
       })
   } 
     const {id} = useParams();
    const [food,setFood] = useState({})
     useEffect(()=>{
         fetch(`https://damp-retreat-61919.herokuapp.com/menu/${id}`)
       .then(res=>res.json())
        .then(data=>setFood(data))

     },[])
    return (
        <div className='mt-5'>
<Container>
  <Row>
    <Col sm={12} md={12} lg={6}><img src={food.image} className='img-fluid mb-5'></img></Col>
    <Col sm={12} md={12} lg={6}>
    <form onSubmit={handleSubmit(onSubmit)} className="bg-dark text-center pt-4 pb-4 px-4 pe-4 mb-5">
     <input {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='w-100 p-2' defaultValue={user.email} />
<br></br>
<br></br>
     <input {...register("name", { required: true, maxLength: 120 })} placeholder="name" className='w-100 p-2' defaultValue={user.displayName} />
     <br></br>
<br></br>
     <input {...register("foodname", { required: true, })} placeholder="Food Name" className='w-100 p-2' />

     <br></br>
<br></br>
     <input type="text" {...register("price")}placeholder="Food Price" className='w-100 p-2' />
     <br></br>
<br></br>
     <input {...register("address", { required: true, })} placeholder="address" className='w-100 p-2'/>
     <br></br>
<br></br>
     <input type="submit" className='w-50' />
   </form>   
        
    </Col>
  </Row>
</Container>

<div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 bg-dark pt-5 pb-5">
         <h1 className='text-white text-center fw-bold'>Menu Details:</h1>
         <br></br>
    <h4 className='fw-bold text-white text-center'> Menu Name:</h4>
    <h5 className='fw-bold text-white text-center'>  {food.name}</h5>
        <br></br>
        <h4 className='fw-bold text-white text-center'>Menu description:</h4>
        <h5 className='fw-bold text-white text-center'>{food.description}</h5>
        <br></br>
        <h4 className='fw-bold text-white text-center'>Menu price:</h4>
        <h5 className='fw-bold text-white text-center'>{food.price}</h5>
         
    </div>
  </div>
</div>
 </div>
    );

    }
export default MenuDetails;