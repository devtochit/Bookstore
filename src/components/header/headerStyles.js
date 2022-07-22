import styled from 'styled-components';

export const NavTag = styled.nav`
  background-color: #fff;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
`;

export const DivCont = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
`;

export const LinksDiv = styled.div`
 display: flex;
 width: 100%;
 align-items: center;
`;

export const LogoH1 = styled.h1`
  width: 15rem;
  height: 2.313rem;
  margin: 0.375rem 2.938rem 0.125rem 0;
  font-family: Montserrat, serif;
  font-size: 1.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0290ff;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 12px;

  /* @media screen and (max-width:600px) {
    position: absolute;
    top: 50px;
    left:0;
    width:100vw;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0,5s all ease;
    background-color: blueviolet;
  } */
`;

export const UserIcon = styled.div`
  margin-top: 5px;
`;

export const MenuItem = styled.li`
  width: 3.688rem;
  height: 1rem;
  margin: 1.125rem 2.563rem 0.688rem 0;
  font-family: Montserrat, serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.9px;
  color: #121212;
`;

export const MenuDiv = styled.div`
  display: none;

  /* @media screen and (max-width: 600px){
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 15px;
  } */
`;
