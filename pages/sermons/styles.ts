import { Container, rem } from "styles/GlobalStyle";

import styled from "styled-components";

const SermonsContainer = styled(Container)`
  .wrapper {
    max-width: ${rem(1140)};
    padding: 0 1rem;
  }

  .title {
    width: 100%;
    margin: 2.5rem 0 1.5rem;
    color: #000;
  }

  .video-wrapper:hover {
    transform: scale(1.025);
  }

  @media (max-width: ${rem(1140)}) {
    .wrapper {
      width: 95vw;
    }
  }
`;

export const FeaturedWrapper = styled.div`
  width: 100%;
  height: 25vh;
  object-fit: cover;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  @media (max-width: ${rem(1140)}) {
    height: calc(95vw * 9 / 16);
  }
  @media (min-width: ${rem(1140)}) {
    height: fit-content;
  }

  &:hover {
    transform: scale(1.025);
  }

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 9rem;
    color: rgba(255, 255, 255, 0.5);
  }
  .video-text {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    color: #fff;

    .tag {
      background: rgba(255, 255, 255, 0.3);
      width: fit-content;
      padding: 0.25rem 1rem;
      border-radius: 2rem;
      font-size: 1.1rem;
    }

    h3 {
      color: #fff;
    }
  }
`;

export const PopularVideoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 2rem 0;

  .img-wrapper {
    width: ${rem(320)};
    height: ${rem(180)};
    border-radius: 0.5rem;
  }
  .date {
    margin-top: -0.75rem;
    font-weight: 600;
    font-size: 0.86rem;
  }
  .slick-list {
    padding: 1rem;
    margin: -1rem;
  }
  .slick-arrow {
    margin-top: -2rem;
  }
  .popular-video-text {
    max-width: 85%;
  }
`;

export const RecentVideoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 2rem 0;

  .video-wrapper {
    width: ${rem(320)};
    height: 6rem;

    display: flex;
    align-items: center;
  }
  .img-wrapper {
    width: ${rem(120)};
    height: ${rem(60)};
    border-radius: 0.5rem;
  }
  .video-title {
    font-size: 0.8rem;
    line-height: 1.2rem;
    font-weight: 600;
    color: var(--heading-color);
    margin-left: 1rem;
    max-width: ${rem(160)};
  }
  .slick-list {
    padding: 1rem;
    margin: -1rem;
  }
`;

export const VideoContainer = styled(Container)`
  background-color: #000;

  @media (max-width: ${rem(1140)}) {
    .wrapper {
      max-width: 90vw;
    }
  }

  .wrapper {
    width: ${rem(1140)};
    margin: 4rem auto 0;
  }

  .btn-back {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .icon-back {
    font-size: 1.2rem;
  }

  a {
    color: #fff;
  }

  .text-wrapper {
    max-width: 50rem;
  }

  .title {
    width: 100%;
    color: #fff;
  }
  .subtitle {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    margin: -1rem 0 0.5rem;
  }
  .desc {
    color: #fff;
  }
  .button-wrapper {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  }
  .icon {
    width: ${rem(35)};

    &:hover {
      transform: scale(1.05);
    }
  }

  .video-wrapper:hover {
    transform: scale(1.025);
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: calc(${rem(1140)} * 9 / 16);
  object-fit: cover;
  overflow: hidden;
  position: relative;

  @media (max-width: ${rem(1140)}) {
    width: 90vw;
    height: calc(90vw * 9 / 16);
  }
`;

export default SermonsContainer;
