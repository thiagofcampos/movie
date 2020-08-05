import React, { useEffect, useState } from 'react';
import ContainerCarrossel from '../../molecules/carrossel';
import HeaderSeparator from '../../molecules/headerseparator';
import CardImage from '../../molecules/cardimage';
import { GetMovie, GetMoviePopular } from '../../store/movies/action';
//import { useSelector, useDispatch } from 'react-redux';

function Home() {
  
  const [movieList, setMovieList] = useState('');
  const [movieListPopular, setMovieListPopular] = useState('');

  //const dispatch = useDispatch();

  useEffect(() => {
   GetMovie()
   .then((res) => {
    setMovieList(res)
   })
  }, []);

  useEffect(() => {
   GetMoviePopular()
   .then((res) => {
    setMovieListPopular(res)
   })
  }, []); 
  //let list = useSelector(state => state)

  return (
    <>
    <h1>
        Filmes
    </h1>
      <ContainerCarrossel 
        movieList={movieList && movieList.results.slice(0, 5)}
      />
      <HeaderSeparator
        text={"Destaques do mês"}
      />
      <CardImage 
        movieListPopular={movieListPopular && movieListPopular.results.slice(4, 7)}
      />
    </>
  );
}

export default Home
