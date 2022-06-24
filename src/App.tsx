import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import Main from './main';



const GET_WORLD = gql`
query getWorld {
  getWorld {
    name
    logo
    money
    score
    totalangels
    activeangels
    angelbonus
    lastupdate
    products {
      id
      name
      logo
      cout
      croissance
      revenu
      vitesse
      quantite
      timeleft
      managerUnlocked
      paliers {
        name
        logo
        seuil
        idcible
        ratio
        typeratio
        unlocked
      }
    }
    allunlocks {
      name
      logo
      seuil
      idcible
      ratio
      typeratio
      unlocked
    }
    upgrades {
      name
      logo
      seuil
      idcible
      ratio
      typeratio
      unlocked
    }
    angelupgrades {
      name
      logo
      seuil
      idcible
      ratio
      typeratio
      unlocked
    }
    managers {
      name
      logo
      seuil
      idcible
      ratio
      typeratio
      unlocked
    }
  }
}
`;



function App() {

  let name = localStorage.getItem("username");
  if (!name) {
    name = "Chtulu"+ Math.round(Math.random()* 1000)
  }
  const [username, setUsername] = useState(name);

  const {loading, error, data, refetch } = useQuery(GET_WORLD, {
    context: { headers: { "x-user": username } }
    });

  function onUserNameChanged(e: React.FormEvent<HTMLInputElement>){
    setUsername(e.currentTarget.value)
    localStorage.setItem("username",username)
    refetch();
    console.log("changement");
  }

  

  let corps = undefined
  if (loading) corps = <div> Loading... </div>
  else if (error) corps = <div> Erreur de chargement du monde ! </div>
  else {
    let result = data.getWorld
    corps = <Main loadworld={data.getWorld} username={username} />
    console.log(data.getWorld.products[0].name)
  }

  return (
    <div>
    <input type="text" value={username} onChange={onUserNameChanged}/>

        {corps}

    </div>
    );
  }

  
  
  export default App;
  