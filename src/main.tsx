import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import { Product, World } from '../world'
import ProductComponent from './product';
import { transform } from './utils';

type MainProps = {
    loadworld: World
    username: string
}

export default function Main({ loadworld, username } : MainProps) {
    const [world, setWorld] = useState(JSON.parse(JSON.stringify(loadworld)) as World)
    let src = "http://localhost:4000/"+ world.logo 
    
    return(
    <div>
    <div className="App">
        <div className="header">
        <span> {world.name} </span>
            <img src={ src } className="round logoPrincipal"/>
            <span dangerouslySetInnerHTML={{__html: transform(world.money)}}/>
          <div> multiplicateur </div>
          <div> ID du joueur </div>
          
        </div>
        <div className="main">
          <div className='borderBlanc'> liste des boutons de menu </div>
          <div className="product">
          {world.products.map(prod=>
          <ProductComponent prod={prod} />
          )}
        </div>
      </div>
    </div>
    </div>

    )
}





