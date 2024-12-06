import Image from "next/image";
import styled from "styled-components";
import { Button } from "styles/GlobalStyle";

interface HeadLineProps {
  imgUrl: string;
  title: string;
  blur?: string;
  desc?: string;
  btnText?: string;
  btnLink?: string;
  height?: string;
  mbHeight?: string;
  titlePosition?: string;
  displayTitle?: boolean;
  isUnderMenu?: boolean;
}

export default function HeadLine({
  imgUrl,
  title,
  blur,
  desc,
  btnText,
  btnLink,
  height = "28.125rem",
  mbHeight,
  titlePosition = "0rem",
  displayTitle = true,
  isUnderMenu = true,
}: HeadLineProps) {
  const hasContent = displayTitle || desc || btnText;

  return (
    <HeadLineContainer
      id="headline"
      height={height}
      mbHeight={mbHeight || `${height}`}
      titlePosition={titlePosition}
      isUnderMenu={isUnderMenu}
    >
      <Image
        src={imgUrl}
        alt="headline image"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      {blur && <Blur blur={blur}></Blur>}
      {hasContent && (
        <div className="content-wrapper">
          {displayTitle && <h1>{title}</h1>}
          {desc && <p>{desc}</p>}
          {btnText && (
            <HeadLineBtn className="white" href={btnLink} target="_blank" data-open-in-church-center-modal="true">
              {btnText}
            </HeadLineBtn>
          )}
        </div>
      )}
    </HeadLineContainer>
  );
}
export const HeadLineContainer = styled.div<{
  height: string;
  mbHeight: string;
  titlePosition: string;
  isUnderMenu: boolean;
}>`
  position: relative;
  height: ${(props) => props.height};
  top: ${(props) => (props.isUnderMenu ? "0" : "5rem")};
  margin-bottom: ${(props) => (props.isUnderMenu ? "0" : "5rem")};
  image {
    z-index: 0;
  }
  h1 {
    color: #fff;
    text-shadow: var(--text-shadow);
    margin-bottom: 0.5rem;
  }
  .content-wrapper {
    min-width: 15rem;
    max-width: 90vw;
    position: absolute;
    text-align: center;
    color: #fff;
    top: calc(50% + 3.125rem - ${(props) => props.titlePosition});
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
    text-shadow: var(--text-shadow);
  }
  @media screen and (max-width: 48rem) {
    height: ${(props) => props.mbHeight};
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;
const Blur = styled.div<{ blur: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1;
  backdrop-filter: ${(props) => (props.blur ? props.blur : null)};
`;
const HeadLineBtn = styled(Button)`
  font-weight: bold;
  border-radius: 3rem;
  font-size: 1.1rem;
  padding: 0.75rem 2.75rem;
`;
