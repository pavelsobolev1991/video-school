import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ArrowButton from '../../Components/ArrowButton';
import Block from '../../Components/Block';
import Link from '../../Components/Link';
import Text from '../../Components/Text';

export const BlockHover = styled.div`
  display: block;
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

function ProjectList({ projects }) {
  const [startIndexByCategory, setStartIndexByCategory] = useState({});
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Initialize startIndexByCategory with 0 for each category
  useEffect(() => {
    const startIndexByCategoryObj = {};
    projects.forEach((category, i) => {
      startIndexByCategoryObj[i] = 0;
    });
    setStartIndexByCategory(startIndexByCategoryObj);
  }, [projects]);

  const handleCategoryChange = (index) => {
    setStartIndexByCategory((prevState) => ({
      ...prevState,
      [currentCategoryIndex]: startIndexByCategory[currentCategoryIndex],
      [index]: startIndexByCategory[index] || 0,
    }));
    setCurrentCategoryIndex(index);
  };

  const handlePrev = (categoryIndex) => {
    const newIndex =
      (startIndexByCategory[categoryIndex] - 1 + projects[categoryIndex].length) %
      projects[categoryIndex].length;
    setStartIndexByCategory((prevIndexes) => ({
      ...prevIndexes,
      [categoryIndex]: newIndex,
    }));
  };

  const handleNext = (categoryIndex) => {
    const newIndex =
      (startIndexByCategory[categoryIndex] + 1) % projects[categoryIndex].length;
    setStartIndexByCategory((prevIndexes) => ({
      ...prevIndexes,
      [categoryIndex]: newIndex,
    }));
  };
  const visibleProjectsByCategory = projects.map((category, i) => {
    let visibleProjects = category.slice(startIndexByCategory[i], startIndexByCategory[i] + 3);
    if (visibleProjects.length < 3) {
      visibleProjects = [...visibleProjects, ...category.slice(0, 3 - visibleProjects.length)];
    }
    return visibleProjects;
  });

  return (
    <>
      {projects.map((category, i) => (
        <div key={i}>
          <Block
            display="flex"
            bgColor="black"
            justifyContent="center"
            alignItems="center"
            height="80px"
          >
            <Text color="white" fontSize="30px">
              {category[i].category.toUpperCase()}
            </Text>
          </Block>
          <Block maxHeight="91vh" bgColor="grey" position="relative">
            <Block display="flex" flexWrap="nowrap" overflowX="hidden">
              {visibleProjectsByCategory[i].map((project) => (
                <Block key={project.id} flex="0 0 calc(100% / 3)" hasHover>
                  <Link
                    background={project.image}
                    width="100%"
                    height="20vw"
                    maxWidth="550px"
                    minHeight="280px"
                    marginLeft="0px"
                    hasHover
                    onClick={() => console.log('test', project.id)}
                  />
                  {/* <BlockHover>{project.category}</BlockHover> */}
                </Block>
              ))}
            </Block>
            <ArrowButton
              direction="left"
              onClick={() => {
                handleCategoryChange(i);
                handlePrev(i);
              }}
            />
            <ArrowButton
              direction="right"
              onClick={() => {
                handleCategoryChange(i);
                handleNext(i);
              }}
            />
          </Block>
        </div>
      ))}
    </>
  );
}

export default ProjectList;
