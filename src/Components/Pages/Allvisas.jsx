import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allvisacard from './Allvisacard';

const Allvisas = () => {
     
    const allvisas = useLoaderData()
    console.log(allvisas);
    return (
        <div className='mx-20'>
            <h2 className='text-center text-4xl text-yellow-600 font-bold mb-3'>See All Added Visa:{allvisas.length}</h2>

            <div className='grid lg:grid-cols-4 gap-x-2 md:grid-cols-2 gap-4'>
                {
                   allvisas?.map(visa =>  
                    <Allvisacard
                    key={visa._id} Allvisa={visa}>
                    </Allvisacard>
                   ) 
                }
            </div>
        </div>
    );
};

export default Allvisas;