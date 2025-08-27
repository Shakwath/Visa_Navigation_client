import React from 'react';
import { Link } from 'react-router-dom';

const Allvisacard = ({Allvisa}) => {
    const {countryName,countryImage,description, _id} = Allvisa;

    return (
        <div className="card bg-base-100 w-80 shadow-sm">
  <figure>
    <img className='h-50 w-78 rounded-2xl'
      src={countryImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{countryName}</h2>
    <p>{description}</p>
    <div className="card-actions w-full">
        <Link to={`/visadetails/${_id}`}>
       <button className="btn btn-outline btn-warning w-full">See Details</button>
       </Link>
    </div>
  </div>
</div>
    );
};

export default Allvisacard;