import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

const Location = () => {

const [Location, setLocation] = useState({});
const [id, setId] =useState('');

useEffect(()=>{

    const random = Math.floor(Math.random()*126)+1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then (res => setLocation(res.data));

},[])

console.log(Location)
const searchLocation=()=>{
    console.log(id);
    if(id<=126){
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
    .then (res => setLocation(res.data));
    }else{
        alert('we only have 126 Locations')
    }
}

    return (
        <div>     
            <h1 className='Title'>Rick and Morty Wiki</h1>
            <input className='input' placeholder='Enter a location Id' type="text" 
                onChange={e => setId(e.target.value)}
                value={id}
                />
            <button className='button' onClick={searchLocation}>Search</button>   
            <h2 className='locationName'><b>{Location.name}</b></h2>
            <div className='LocalSubsContent'> 
            <div><b>Type: </b>{Location.type}</div>
            <div><b>Dimension: </b>{Location.dimension}</div>
            <div><b>Population: </b>{Location.residents?.length}</div>
            </div>  

            <div className='groupBox'>                
                <h2 className='subTitle'>Residents</h2>
                <ul>
                <div className='mainBox'> 
                {Location.residents?.map(residents => (
                <ResidentInfo residents={residents} key={residents}/>
                ))}
                </div> 
                </ul>
                  
                
            </div>        
        </div>
    );
};

export default Location;