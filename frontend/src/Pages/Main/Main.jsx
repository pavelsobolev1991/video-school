import React from 'react';
import Header from '../../modules/Header/Header';
import Hero from '../../modules/Hero/Hero';
import ProjectsList from '../../modules/ProjectList/ProjectList';
import Footer from '../../modules/Footer/Footer';

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
  [
    {
      id: 1, title: 'война миров', image: voina, category: '3D',
    },
    {
      id: 2, title: 'амур уголь', image: amur, category: '3D',
    },
    {
      id: 3, title: '3D сушилка', image: bxg, category: '3D',
    },
    {
      id: 4, title: 'новости интро', image: intro, category: '3D',
    },
    {
      id: 5, title: 'кенетик', image: kenetic, category: '3D',
    },
    {
      id: 6, title: 'лен тв', image: lentv, category: '3D',
    },
    {
      id: 7, title: 'война миров', image: voina, category: '3D',
    },
    {
      id: 8, title: 'амур уголь', image: amur, category: '3D',
    },
    {
      id: 9, title: '3D сушилка', image: bxg, category: '3D',
    },
    {
      id: 10, title: 'новости интро', image: intro, category: '3D',
    },
    {
      id: 11, title: 'кенетик', image: kenetic, category: '3D',
    },
    {
      id: 12, title: 'лен тв', image: lentv, category: '3D',
    },
  ],
  [
    {
      id: 1, title: 'война миров', image: voina, category: 'motion',
    },
    {
      id: 2, title: 'амур уголь', image: amur, category: 'motion',
    },
    {
      id: 3, title: '3D сушилка', image: bxg, category: 'motion',
    },
    {
      id: 4, title: 'новости интро', image: intro, category: 'motion',
    },
    {
      id: 5, title: 'кенетик', image: kenetic, category: 'motion',
    },
    {
      id: 6, title: 'лен тв', image: lentv, category: 'motion',
    },
    {
      id: 7, title: 'война миров', image: voina, category: 'motion',
    },
    {
      id: 8, title: 'амур уголь', image: amur, category: 'motion',
    },
    {
      id: 9, title: '3D сушилка', image: bxg, category: 'motion',
    },
    {
      id: 10, title: 'новости интро', image: intro, category: 'motion',
    },
    {
      id: 11, title: 'кенетик', image: kenetic, category: 'motion',
    },
    {
      id: 12, title: 'лен тв', image: lentv, category: 'motion',
    },
  ],
  [
    {
      id: 1, title: 'война миров', image: voina, category: 'art',
    },
    {
      id: 2, title: 'амур уголь', image: amur, category: 'art',
    },
    {
      id: 3, title: '3D сушилка', image: bxg, category: 'art',
    },
    {
      id: 4, title: 'новости интро', image: intro, category: 'art',
    },
    {
      id: 5, title: 'кенетик', image: kenetic, category: 'art',
    },
    {
      id: 6, title: 'лен тв', image: lentv, category: 'art',
    },
    {
      id: 7, title: 'война миров', image: voina, category: 'art',
    },
    {
      id: 8, title: 'амур уголь', image: amur, category: 'art',
    },
    {
      id: 9, title: '3D сушилка', image: bxg, category: 'art',
    },
    {
      id: 10, title: 'новости интро', image: intro, category: 'art',
    },
    {
      id: 11, title: 'кенетик', image: kenetic, category: 'art',
    },
    {
      id: 12, title: 'лен тв', image: lentv, category: 'art',
    },
  ],
];

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <ProjectsList projects={projects} />
      <Footer />
    </>

  );
}

export default Main;
