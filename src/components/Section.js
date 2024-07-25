import styled from "styled-components";

const SSection = styled.div`
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

export const Section = ({ TempData }) => {
  return (
    <SSection>
      <h3>{TempData.weather[0].description}</h3>
      <TempWrap>
        <Temp className="temp">
          {Math.round(TempData.main?.temp)}
          <span>°</span>
        </Temp>

        <Temp>
          <Num>
            {Math.round(TempData.main?.temp_max)}
            <span>°</span>c
          </Num>
          <Num>
            {Math.round(TempData.main?.temp_min)}
            <span>°</span>c
          </Num>
        </Temp>
      </TempWrap>

      <p>위도: {TempData.coord.lat}</p>
      <p>경도: {TempData.coord.lon}</p>
    </SSection>
  );
};
