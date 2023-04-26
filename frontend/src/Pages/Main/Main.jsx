import React from 'react';
import Header from '../../modules/Header/Header';
import Hero from '../../modules/Hero/Hero';
import ProjectsList from '../../modules/ProjectList/ProjectList';
import Footer from '../../modules/Footer/Footer';
import voina from '../../assets/voina_mirov.png';
import amur from '../../assets/amur_ugol.png';
import bxg from '../../assets/bxg.png';
import intro from '../../assets/intro_novosti.png';
import kenetic from '../../assets/keenetic_1.png';
import lentv from '../../assets/lentv1.png';

const projects = [
  [
    {
      id: 1, title: 'война миров', image: voina, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 2, title: 'амур уголь', image: amur, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 3, title: '3D сушилка', image: bxg, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 4, title: 'новости интро', image: intro, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 5, title: 'кенетик', image: kenetic, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 6, title: 'лен тв', image: lentv, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 7, title: 'война миров', image: voina, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 8, title: 'амур уголь', image: amur, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 9, title: '3D сушилка', image: bxg, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 10, title: 'новости интро', image: intro, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 11, title: 'кенетик', image: kenetic, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 12, title: 'лен тв', image: lentv, category: '3D', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
  ],
  [
    {
      id: 1, title: 'война миров', image: voina, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 2, title: 'амур уголь', image: amur, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 3, title: '3D сушилка', image: bxg, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 4, title: 'новости интро', image: intro, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 5, title: 'кенетик', image: kenetic, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 6, title: 'лен тв', image: lentv, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 7, title: 'война миров', image: voina, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 8, title: 'амур уголь', image: amur, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 9, title: '3D сушилка', image: bxg, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 10, title: 'новости интро', image: intro, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 11, title: 'кенетик', image: kenetic, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 12, title: 'лен тв', image: lentv, category: 'motion', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
  ],
  [
    {
      id: 1, title: 'война миров', image: voina, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 2, title: 'амур уголь', image: amur, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 3, title: '3D сушилка', image: bxg, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 4, title: 'новости интро', image: intro, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 5, title: 'кенетик', image: kenetic, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 6, title: 'лен тв', image: lentv, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 7, title: 'война миров', image: voina, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 8, title: 'амур уголь', image: amur, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 9, title: '3D сушилка', image: bxg, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 10, title: 'новости интро', image: intro, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 11, title: 'кенетик', image: kenetic, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
    },
    {
      id: 12, title: 'лен тв', image: lentv, category: 'art', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet inventore asperiores, sed dolor exercitationem sint voluptate cupiditate amet, cum illum esse, error laborum odit optio. Est magnam blanditiis fugit.',
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
