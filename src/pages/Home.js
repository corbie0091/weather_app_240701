import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(246, 139, 139, 1) 0%,
    rgba(194, 1, 246, 1) 100%
  );
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Menu = styled.div`
  font-size: 26px;
`;
const MyLocation = styled.div`
  font-size: 24px;
  text-align: center;
  p {
    font-size: 16px; // 16px는 기본 크기
    margin-top: 10px;
  }
`;
const More = styled.div`
  font-size: 26px;
`;
const Section = styled.div`
  margin-top: 50%;
  padding: 0 20px;
  h3 {
    font-size: 36px;
  }
`;
const TempWrap = styled.div`
  display: flex; // 옆으로 정렬하기 위해서
  justify-content: space-between;
  .temp {
    font-size: 160px;
    font-weight: 200;
    span {
      display: block; // translate를 써주기 위해 인라인 >> block요소로 전환
      font-size: 90px;
      transform: translate(170px, -150px); //쉽게 배치하는 방법
    }
  }
`;
const Temp = styled.div`
  width: 50%;
  &:nth-child(2) {
    height: 150px;
    /* background-color: gray; */
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
  }
`;
const Num = styled.div`
  font-size: 34px;
  font-weight: 400;
  padding: 10px 0;
  &:nth-child(2) {
    border-top: 1px solid #eee;
  }
`;

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  console.log(data);

  return (
    <Container>
      <Header>
        <Menu>
          <FontAwesomeIcon icon={faBars} />
        </Menu>
        <MyLocation>
          <h3>BUSAN</h3>
          <p>Sat, 19:30</p>
        </MyLocation>
        <More>
          <FontAwesomeIcon icon={faPlus} />
        </More>
      </Header>

      <Section>
        <h3>Hot</h3>

        <TempWrap>
          <Temp className="temp">
            27<span>°</span>
          </Temp>

          <Temp>
            <Num>
              30<span>°</span>c
            </Num>
            <Num>
              26<span>°</span>c
            </Num>
          </Temp>
        </TempWrap>
      </Section>
    </Container>
  );
};
