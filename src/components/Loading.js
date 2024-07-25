import styled, { keyframes } from "styled-components";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingAni = keyframes`
    100%{
        transform: rotate(360deg);
    } // 0%필요없이 rotate값 써주면 될 듯
`;

const Loader = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 10px solid salmon;
  border-color: salmon transparent transparent transparent;
  animation: ${LoadingAni} 1s infinite linear;
  // 이름 duration값 반복설정 속도값(direction)  4가지 넣을 것임 (가속도 설정도 가능하긴함)
`;
export const Loading = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};
