import styled from 'styled-components';
import React, { useState } from 'react';
import Block from '../../Components/Block';
import Link from '../../Components/Link';
import logo from '../../assets/logo.svg';
import voina from '../../assets/voina_mirov.png';
import amur from '../../assets/amur_ugol.png';
import bxg from '../../assets/bxg.png';
import intro from '../../assets/intro_novosti.png';
import kenetic from '../../assets/keenetic_1.png';
import lentv from '../../assets/lentv1.png';
import ArrowButton from '../../Components/ArrowButton';

const projects = [
  { id: 1, title: 'война миров', image: voina },
  { id: 2, title: 'амур уголь', image: amur },
  { id: 3, title: '3D сушилка', image: bxg },
  { id: 4, title: 'новости интро', image: intro },
  { id: 5, title: 'кенетик', image: kenetic },
  { id: 6, title: 'лен тв', image: lentv },
  { id: 7, title: 'война миров', image: voina },
  { id: 8, title: 'амур уголь', image: amur },
  { id: 9, title: '3D сушилка', image: bxg },
  { id: 10, title: 'новости интро', image: intro },
  { id: 11, title: 'кенетик', image: kenetic },
  { id: 12, title: 'лен тв', image: lentv },
];

export const BlockHover = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  z-index: 2;
`;

function Hero() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((startIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setStartIndex((startIndex + 1) % projects.length);
  };

  let visibleProjects = projects.slice(startIndex, startIndex + 3);

  // If there are less than 3 projects left at the end of the list,
  // add projects from the beginning of the list to fill the empty space.
  if (visibleProjects.length < 3) {
    visibleProjects = [...visibleProjects, ...projects.slice(0, 3 - visibleProjects.length)];
  }

  return (
    <Block maxHeight="91vh" bgColor="grey" position="relative">
      <Block display="flex" flexWrap="nowrap" overflowX="hidden">
        {visibleProjects.map((project) => (
          <Block key={project.id} flex="0 0 calc(100% / 3)" hasHover={true}>
            <Link
              background={project.image}
              width="100%"
              height="20vw"
              maxWidth="550px"
              minHeight="280px"
              marginLeft="0px"
              hasHover={true}
            >
             
            </Link>
            <BlockHover>{project.title}</BlockHover>
          </Block>
        ))}
      </Block>
      {projects.length > 3 && (
        <>
          <Block
            position="absolute"
            top="50%"
            left="10px"
            transform="translateY(-50%)"
            onClick={handlePrev}
          >
            {'<'}
          </Block>
          <ArrowButton direction="left" onClick={handlePrev} />
          <ArrowButton direction="right" onClick={handleNext} />
        </>
      )}
    </Block>
  );
}

export default Hero;
