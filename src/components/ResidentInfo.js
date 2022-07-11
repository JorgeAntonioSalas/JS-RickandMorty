import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../App.css";
const ResidentInfo = ({residents}) => {

    const [char, setChar] = useState({})

    useEffect(()=>{
        axios.get(residents)
        .then(res => setChar(res.data))

    })

    console.log(char)

    return (  
        <l1>
            <div className='charContent'>
                <div className='imgContent'>
                    <img className='charImg' src={char.image} alt=""/>
                </div>
                <div className='descripContent'>
                    <h3 class='descrip'><b>{char.name}</b></h3>
                    <p class='descrip'>{char.status} - {char.species}</p>
                    <p class='descrip2'>Origin</p>
                    <p class='descrip'>{char.origin?.name}</p>
                    <p class='descrip2'>episodes where appear</p>
                    <p class='descrip'>{char.episode?.length}</p>
                    <br></br>
                </div>
            </div>        
        </l1>
    );
};

export default ResidentInfo;