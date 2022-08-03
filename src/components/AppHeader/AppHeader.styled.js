import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 51px;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-between;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px 4px 0px 0px;

`;

export const LinkToBack = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  text-decoration: none;
`;

export const LinkText = styled.p`
  margin: 0 0 0 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #2c7dfa;
`;

export const CentralText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6c757d;
`;

export const BtnBox = styled.div`
  margin-right: 20px;
`;

export const BtnText = styled.p`
  margin: 0;
  font-family: 'IBM Plex Sans';
  text-transform: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;
