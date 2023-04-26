import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ArrowButton from '../../Components/ArrowButton';
import Modal from '../../Components/Modal';
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
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <>
      {projects.map((category, i) => (
        <div key={category}>
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
                    onClick={() => handleProjectClick(project)}
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
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Block display="flex" flexDirection="column" alignItems="center" justifyContent="center" maxWidth="300px">
            <Block>
              <Text fontSize="30px" fontWeight="700">
                Проект (
                {selectedProject.category}
                ):
                {' '}
              </Text>
              <Text fontSize="30px" fontWeight="700">{selectedProject.title}</Text>
            </Block>
            <Block display="flex" margin="20px 0 20px 0"><img src={selectedProject.image} style={{ maxWidth: '100%' }} /></Block>
            <Text fontSize="20px" fontWeight="700">Описание проекта:</Text>
            <Block margin="20px 0 0 0"><Text fontSize="20px">{selectedProject.description}</Text></Block>
            {/* <Button onClick={() => setShowModal(false)}>Закрыть</Button> */}
          </Block>
        </Modal>
      )}
    </>
  );
}

export default ProjectList;
