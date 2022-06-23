import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import { Product, World } from '../world'

type ProductProps = {
    prod: Product
}

export default function ProductComponent({ prod } : ProductProps){
    let src ="http://localhost:4000/"+prod.logo
    
    return (
        
        <div>
            <div> {prod.name} </div>
            <div className="lesdeux">
            <img src={src} className="logo, round" ></img>
            <div className="lesecond">{prod.quantite}</div>
            </div>
            <div>{prod.cout}</div>
        </div>
    )
}