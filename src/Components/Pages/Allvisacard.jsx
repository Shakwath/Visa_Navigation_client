import React from 'react';

const Allvisacard = ({Allvisa}) => {
    const {countryName,countryImage,description} = Allvisa;

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
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-warning w-full">See Details</button>
    </div>
  </div>
</div>
    );
};

export default Allvisacard;