import styled from "styled-components";

const HeroSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 64px;
  color: white;
  &:hover {
    color: red;
  }
`;

const Slogan = styled.div`
  font-size: 32px;
  color: white;
  margin-top: 10px;
`;

const Paragraph = styled.div`
  font-size: 14px;
  color: white;
  margin-top: 25px;
  width: 19%;
  text-align: justify;
`;

const DonateButton = styled.button`
  padding: 10px 20px;
  margin-top: 30px;
  background-color: green;
  color: white;
  font-weight: 600;
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
  width: 100px;
  &:hover {
    box-sizing: border-box;
    border: 2px solid green;
    background-color: transparent;
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionContainer>
      <Logo>Global Warming</Logo>
      <Slogan>Keep it cool for safe living</Slogan>
      <Paragraph>
        As the planet warms, extreme weather events such as heatwaves, floods,
        and droughts become more frequent and intense. Without immediate action,
        the climate crisis could lead to widespread poverty, hunger and
        migration.
      </Paragraph>
      <DonateButton>Donate</DonateButton>
    </HeroSectionContainer>
  );
}
