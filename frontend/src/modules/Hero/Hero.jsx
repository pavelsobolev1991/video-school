import styled from 'styled-components';
import React from 'react';
import Block from '../../Components/Block';

const VideoContainer = styled(Block)`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const ResponsiveVideo = styled.video`
  width: 100%;
`;

function Hero() {
  return (
    <VideoContainer minWidth="100%" bgColor="black">
      <ResponsiveVideo
        autoPlay="autoplay"
        loop="loop"
        poster="https://dl.dropboxusercontent.com/s/2r69mlqhvyxqouh/Logo_ALL_10sec.jpg?dl=0"
      >
        <source
          src="https://dl.dropboxusercontent.com/s/aewux4zpo7lx5e3/Logo_ALL_10sec%28v1%29_mp4.mp4?dl=0"
          type="video/mp4"
        />
        <source
          src="https://dl.dropboxusercontent.com/s/ynxnycifkmm2t22/Logo_ALL_10sec%28v1%29_webm.webm?dl=0"
          type="video/webm"
        />
      </ResponsiveVideo>
    </VideoContainer>
  );
}

export default Hero;
