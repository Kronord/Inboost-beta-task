import styled from "styled-components";
import Button from '@mui/material/Button';

export const LengBox = styled.div`
  display: flex;
  border-bottom: 1px solid #eaf2ff;
  justify-content: space-between;
`;

export const BtnText = styled.p`
  font-family: 'IBM Plex Sans';
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 170.23%;
`;

export const Btn = styled(Button)`
  width: 98px;
  height: 23px;
  margin-right: 8px;
`;

export const BtnBox = styled.div`
  padding: 9px 10px;
`;