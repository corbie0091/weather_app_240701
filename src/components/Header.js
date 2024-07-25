import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const SHeader = styled.div`
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

const getCurrentDateTime = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const now = new Date();
  const day = days[now.getDay()];
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${day}, ${hours}:${minutes}`;
};

export const Header = ({ headerData }) => {
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(getCurrentDateTime());
    }, 60000); // 1분마다 업데이트

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌 정리
  }, []);
  return (
    <SHeader>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
      <MyLocation>
        <h3>{headerData.name}</h3>
        <p>{currentDateTime}</p>
      </MyLocation>
      <More>
        <FontAwesomeIcon icon={faPlus} />
      </More>
    </SHeader>
  );
};
