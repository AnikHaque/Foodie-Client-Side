import React from 'react';
import { Link } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';
import ReactStars from "react-rating-stars-component";
import './SingleReview.css';



const SingleOrder = ({ review }) => {
    // const {service} = props;
    const { _id, name,description,price, img } = review;

    
    

    const firstExample = {
      size: 30,
      value:price,
      edit: false
    };
    
   

    return (
        <div>
        
  <div class="col">
    <div class="card h-100 review-card">
      <img src={img} class="card-img-top img-fluid" alt="..."></img>
      <div class="card-body">
        <h6 class="card-title text-center">{name}</h6>
        <h6 class="text-center"></h6>
        <p class="card-text text-center">"{description}"</p>
        
      <ReactStars {...firstExample} />
      </div>
      <div class="card-footer"> 
      
    </div>
  </div>
</div>

</div>
      
    );
          
          };
        
          
export default SingleOrder;