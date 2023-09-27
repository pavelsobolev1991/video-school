import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ArrowButton from '../../Components/ArrowButton';
import Modal from '../../Components/Modal';
import Block from '../../Components/Block';
import Link from '../../Components/Link';
import Text from '../../Components/Text';
import { useMediaQuery } from 'react-responsive'

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

const StyledIframe = styled.iframe`
  width: 640px;
  height: 480px;
  allow: autoplay;
  background-image: url('https://top-fon.com/uploads/posts/2023-01/1674865273_top-fon-com-p-fon-dlya-prezentatsii-chernii-matovii-157.jpg');
`;

function ProjectList({ projects }) {
  const [startIndexByCategory, setStartIndexByCategory] = useState({});
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const isTablet = useMediaQuery({ minWidth: 721, maxWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 720 });
  const maxVisibleProjects = isTablet ? 2 : isMobile ? 1 : 3;
  const flex = isTablet ? "0 0 calc(100% / 2)" : isMobile ? "0 0 100%" : "0 0 calc(100% / 3)"
  const height = maxVisibleProjects === 2 ? '35vw' : maxVisibleProjects === 1 ? "65vw" : "21vw"

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
    const newIndex = (startIndexByCategory[categoryIndex] + 1) % projects[categoryIndex].length;
    setStartIndexByCategory((prevIndexes) => ({
      ...prevIndexes,
      [categoryIndex]: newIndex,
    }));
  };
  const visibleProjectsByCategory = projects.map((category, i) => {
    let visibleProjects = category.slice(startIndexByCategory[i], startIndexByCategory[i] + maxVisibleProjects);
    if (visibleProjects.length < maxVisibleProjects) {
      visibleProjects = [...visibleProjects, ...category.slice(0, maxVisibleProjects - visibleProjects.length)];
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
                <Block key={project.id} flex={flex} hasHover>
                  <Link
                    background={project.image}
                    width="100%"
                    height={height}
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
          <Block
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            maxWidth="300px"
          >
            <Block>
              <Text fontSize="30px" fontWeight="700">
                Проект {selectedProject.category}: {selectedProject.title}
              </Text>
            </Block>
            <Block display="flex" margin="20px 0 20px 0">
              {selectedProject.url ? (
                <StyledIframe src={selectedProject.url}></StyledIframe>
              ) : (
                <img src={selectedProject.image} style={{ maxWidth: '100%' }} />
              )}
            </Block>
            <Text fontSize="20px" fontWeight="700">
              Описание проекта:
            </Text>
            <Block margin="20px 0 0 0">
              <Text fontSize="20px">{selectedProject.description}</Text>
            </Block>
            {/* <Button onClick={() => setShowModal(false)}>Закрыть</Button> */}
          </Block>
        </Modal>
      )}
    </>
  );
}

export default ProjectList;
