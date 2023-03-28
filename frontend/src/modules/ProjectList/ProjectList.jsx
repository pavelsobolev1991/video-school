import React from 'react';
import Block from '../../Components/Block';
import Link from '../../Components/Link';
import logo from '../../assets/logo.svg';
import voina from '../../assets/voina_mirov.png';
import amur from '../../assets/amur_ugol.png';
import bxg from '../../assets/bxg.png';
import intro from '../../assets/intro_novosti.png';
import kenetic from '../../assets/keenetic_1.png';
import lentv from '../../assets/lentv1.png';

const projects = [
  { id: 1, title: 'война миров', image: voina},
  { id: 2, title: 'амур уголь', image: amur},
  { id: 3, title: '3D сушилка', image: bxg },
  { id: 4, title: 'новости интро', image: intro},
  { id: 5, title: 'кенетик', image: kenetic },
  { id: 6, title: 'лен тв', image: lentv },
];

function Hero() {
  return (
    <Block maxHeight="91vh" bgColor="grey">
      <Block display="flex" flexWrap="wrap">
        {projects.map((project) => {
          return (
            <Block key={project.id} flex="0 0 calc(100% / 3)">
              <Link
                background={project.image}
                width="100%"
                height="20vw"
                maxWidth="550px"
                minHeight="280px"
              />
            </Block>
          );
        })}
      </Block>
    </Block>
  );
}

export default Hero;
