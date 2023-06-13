import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {
const {listCharacters, setListCharacters}= useState({})
  const url = "https://rickandmortyapi.com/api/character";
  useEffect(()=>{
    axios
      .get(url)
      .then((resp)=> {setListCharacters (resp.data.data)})
  })
      .catch ((error)=> {console.log(error)},[])
  return (
    <div>Home</div>
  )
}

export default Home