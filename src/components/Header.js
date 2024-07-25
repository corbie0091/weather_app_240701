import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

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
export const Header = ({ headerData }) => {
  return (
    <SHeader>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
      <MyLocation>
        <h3>{headerData.name}</h3>
        <p>Sat, 19:30</p>
      </MyLocation>
      <More>
        <FontAwesomeIcon icon={faPlus} />
      </More>
    </SHeader>
  );
};
