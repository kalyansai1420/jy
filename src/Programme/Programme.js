import React, { useEffect, useState } from 'react'
import ProgramCard from './ProgramCard'
import { db } from '../firebase';
import { useLocation } from "react-router-dom";



const Programme = () => {

    const [program, setprogram] = useState('');
    

    useEffect(() => {
        const propref = db.ref('/').child('programme');

        propref.on('value', (snapshot) => {
            setprogram(snapshot.val());
        })

    }, [])
    console.log(db);
    console.log(program);

    return (
        <div className='programme'>
            <h2>Placement Driven Programmes</h2>

            <ProgramCard />
        </div>
    )
}

export default Programme