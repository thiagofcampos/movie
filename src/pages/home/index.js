import React from 'react';
import ContainerCarrossel from '../../molecules/carrossel';
import HeaderSeparator from '../../molecules/headerseparator';

function home() {
  return (
    <>
      <h1>
        Home
    </h1>
      <ContainerCarrossel />
      <HeaderSeparator
        text={"Destaques do mês"}
      />
    </>
  );
}

export default home
