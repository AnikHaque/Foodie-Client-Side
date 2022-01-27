import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const headingService={
    textAlign:'center',
    fontSize:'40px',
    fontWeight:'bolder'
}

const AddReview = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post("https://damp-retreat-61919.herokuapp.com/reviews",data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
                
            }
        })
    } 
    return (
        <div className="add-service">
            <h2 style={headingService}>Give a Feedback!!!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='text-center mt-5 mb-5 '>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name"  defaultValue={user.displayName} className='w-50 p-2'/>
      <br></br>
      <br></br>
      <textarea {...register("description")} placeholder="Your AddReview Please!!" className='w-50 p-4'/>
      <br></br>
      <br></br>
      <input type="number" {...register("price")}placeholder="Give Us A Rating" className='w-50 p-2'/>
      <br></br>
      <br></br>
      <input {...register("img")} placeholder="Your Image" className='w-50 p-2'/>
      <br></br>
      <br></br>
      <input type="submit" value="Submit Please" className='w-50' />
    </form>
        </div>
    );
};

export default AddReview;