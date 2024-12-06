import SocialShare from "components/common/SocialShare";
import styled from "styled-components";

export default function Subscribe() {
  return (
    <SubscribeWrapper>
      <h2>Stay connected with us</h2>
      <h2>Subscribe</h2>
      <SocialShare isSubSection={true} />
    </SubscribeWrapper>
  );
}
const SubscribeWrapper = styled.section`
  position: relative;
  width: 100%;
  background-image: url("/img/subscribe-bg.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 30rem;
  position: relative;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    max-width: 90vw;
    color: #fff;
    @media screen and (max-width: 40rem) {
      font-size: 2.5rem;
    }
  }

  .icon img {
    filter: brightness(0) invert(1);
  }
`;
