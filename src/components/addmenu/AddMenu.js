import React, { useRef } from 'react';

const AddMenu = () => {

    const nameRef=useRef();
    const descriptionRef=useRef()
    const imageRef=useRef();
    const priceRef=useRef()
const handleAddMenu = e => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;
    const price = priceRef.current.value;
    const newHotel = {name,description,image,price};
    fetch('https://damp-retreat-61919.herokuapp.com/menu',{
        method:'POST',
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(newHotel)
    })
    .then(res=>res.json())
    .then(data=> {
        if(data.insertedId){
            alert('Added Successfully');
            e.target.reset();
        }
    })
    e.preventDefault();
}


    return (
        <div>
            <h1 className='text-center mb-5 mt-5 fw-bold fs-1'>Please add an Menu</h1>
            <form onSubmit={handleAddMenu} className='text-center' mt-5>
<input className='w-50 p-2' type="text" placeholder='Add image' ref={imageRef}></input>
<br></br>
<br></br>
<input className='w-50 p-2' type="text" placeholder='Add menu name' ref={nameRef}></input>
<br></br>
<br></br>
<input className='w-50 p-2' type="text" placeholder='Short description' ref={descriptionRef}></input>
<br></br>
<br></br>
<input className='w-50 p-2' type="text" placeholder='menu price' ref={priceRef}></input>
<br></br>
<br></br>
<input className='w-50 mb-5' type="submit" value="Add"></input>
            </form>
        </div>
    );
};

export default AddMenu;