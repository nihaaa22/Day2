import React, { useState } from "react";
import Ass2 from "./ass2";

function Ten() {
  const [values, setValues] = useState([]);
  const [review, setReview] = useState('');

  const inputValueChange = (event) => {
    setReview(event.target.value);
  };

  const addReview = () => {
    setValues([review,...values]);
    setReview('');
  };

  return (
    <div className="card" style={{margin:'20px'}} >
      <div className="card-body" >
        <h2 style={{ marginLeft: '70px', color: 'black' }}>Camera</h2>
        <div className="product-details" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="product-image" >
            <img src="data:image/jpeg;base64,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" alt="Product" width={350} height={300} border='rounded-border' />
          </div>
          <div className="product-info" style={{ marginLeft: '20px'}}>
            <h4>Camera</h4>
            <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>            
            <b>₹500.00</b>
            <Ass2 />
        </div>
      </div>
      </div>
      <div className="card-body">
          <h4>Product Specification</h4>
          <p>Product Product Product Product Product Product Product Product Product Product Product Product Product </p>
      </div>
      
      <div className="card-body">
        <h4>Reviews</h4>
        <input type="text" placeholder="Type to review" value={review} onChange={inputValueChange} />
        <button type="button" className="btn btn-dark btn-sm" onClick={addReview}>
          Add Review
        </button>
      </div>
        <div className="card-body">
          <h4>Review</h4>
          {values.map((value, index) => (
            <div key={index}>Reviewer<br/>{value}</div>
          ))}
        </div>
        
    </div>
  );
}

export default Ten;
