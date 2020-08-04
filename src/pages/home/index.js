import React, { useEffect, useState } from 'react';
import ContainerCarrossel from '../../molecules/carrossel';
import HeaderSeparator from '../../molecules/headerseparator';
import CardImage from '../../molecules/cardimage';
import { GetMovie } from '../../store/movies/action';
//import { useSelector, useDispatch } from 'react-redux';

function Home() {
  
  const [movieList, setState] = useState('');

  //const dispatch = useDispatch();

  useEffect(() => {
   GetMovie()
   .then((res) => {
    setState(res)
   })
  }, []); 

  //let list = useSelector(state => state)

  return (
    <>
      <h1>
        Home
    </h1>
      <ContainerCarrossel 
        movieList={movieList && movieList.results.slice(0, 5)}
      />
      <HeaderSeparator
        text={"Destaques do mês"}
      />
      <CardImage />
    </>
  );
}

export default Home
