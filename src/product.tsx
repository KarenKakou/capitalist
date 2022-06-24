import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import { Product, World } from '../world'
import MyProgressbar, { Orientation } from './MyProgressBar';
import { resolveProjectReferencePath } from 'typescript';

type ProductProps = {
    prod: Product,
    
}


export default function ProductComponent({ prod } : ProductProps){
    let src ="http://localhost:4000/"+prod.logo

    let boolRun = false
    const [run, setRun] = useState(boolRun);

    function onProgressbarCompleted(){
        setRun(false)
    }
    
    function startFabrication(){
        setRun(true)
    }

    function calcScore(){
        setInterval(() => calcScore(), 100)

    }

    const savedCallback = useRef(calcScore)
useEffect(() => savedCallback.current = calcScore)
useEffect(() => {
let timer = setInterval(() => savedCallback.current(), 100)
return function cleanup() {
if (timer) clearInterval(timer)
}
}, [])

    return (
        
        <div className='produit'>
            <div> {prod.name} </div>
            <div className="lesdeux">
                <div><img src={src} className="logo, round" onClick={startFabrication} ></img></div>
                <div className="lesecond"> quantité : {prod.quantite}</div>
            </div>
            <div>cout : {prod.cout}</div>
        </div>
    )
}

{/* <MyProgressbar className="barstyle" vitesse={prod.vitesse}
initialvalue={prod.vitesse - prod.timeleft}
run={run} frontcolor="#ff8800" backcolor="#ffffff"
auto={prod.managerUnlocked} orientation={Orientation.horizontal}
onCompleted={onProgressbarCompleted}/> */}