import styled from 'styled-components';

export const BarWrapp = styled.section`
  width: 72px;
  height: 720px;
  background-color: #2c7dfa;
  border: 3px solid #2c7dfa;
  border-radius: 0px 30px 30px 0px;
  z-index: 5;
`;

export const SvgBox = styled.a`
  display: block;
  margin: 20px 10px 0;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin: 70px 20px 0;
`;

export const Item = styled.li`
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const AccLink = styled.a`
  display: block;
  margin: 20px 20px 0;
`;

export const Line = styled.div`
  width: 100%;
  margin-top: 140px;
  border-top: 2px solid rgba(255, 255, 255, 0.24);
`;

export const Link = styled.a`
  
`;
