import React from "react";

const Square = props => (

	<div className = "col-12 col-md-4 col-lg-3 px-2 py-2">
      <div onClick={() => props.hitEmWitDat(props.id)} className="click">
        <img className= "img-fluid hvr-pop" data-clicked={props.clicked} alt={props.name} src={props.image} />
      </div>
    </div> 

);

export default Square;