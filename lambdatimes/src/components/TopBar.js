import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBarStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const LeftStyle = styled(ContainerStyle)`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const CenterStyle = styled(ContainerStyle)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const RightStyle = styled(ContainerStyle)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const SpanLeftStyle = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const SpanCenterStyle = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:hover {
    text-decoration: underline;
  }
`;
const SpanRightStyle = styled.span`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarStyle>
      <ContainerStyle>
        <LeftStyle>
          <SpanLeftStyle>TOPICS</SpanLeftStyle>
          <SpanLeftStyle>SEARCH</SpanLeftStyle>
        </LeftStyle>
        <CenterStyle>
          <SpanCenterStyle>GENERAL</SpanCenterStyle>
          <SpanCenterStyle>BROWNBAG</SpanCenterStyle>
          <SpanCenterStyle>RANDOM</SpanCenterStyle>
          <SpanCenterStyle>MUSIC</SpanCenterStyle>
          <SpanCenterStyle>ANNOUNCEMENTS</SpanCenterStyle>
        </CenterStyle>
        <RightStyle>
          <SpanRightStyle>LOG IN</SpanRightStyle>
        </RightStyle>
      </ContainerStyle>
    </TopBarStyle>
  );
};

export default TopBar;
