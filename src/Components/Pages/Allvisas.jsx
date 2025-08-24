import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Allvisas = () => {

    const allvisas = useLoaderData()
    console.log(allvisas);
    return (
        <div>
            <h2>{allvisas.length}</h2>
            <div>
                {
                   allvisas?.map(user => <p key={user._id}>{user.countryName} : {user.visaType}</p>) 
                }
            </div>
        </div>
    );
};

export default Allvisas;