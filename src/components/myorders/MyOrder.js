import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [foods, setFoods] = useState([])
    const {user} = useAuth();
    useEffect(() => {
        fetch(`https://damp-retreat-61919.herokuapp.com/food?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return (
        <div>
            <h1 className="fw-bold mt-2 text-center mb-5">My Placed Orders : {foods.length}</h1>
              <div className="service-container  pt-4 pb-4">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {foods.map((pd, index) => (

<div class="col">
    <div class="card h-100">
      
      <div class="card-body">
          <img src={pd.image} className='img-fluid w-100'></img>
        <h4 class="card-title text-center"><b>Ordered Food:</b>{pd.name}</h4>
        <h5 className="text-center"><b>Food Price:</b> {pd.price} Taka</h5>
      </div>
      <form onSubmit="handleUpdateUser">
       
    </form>
       
</div>
</div>
  ))}
                </div>
                </div>
             </div>
</div>
    );
};

export default MyOrder;