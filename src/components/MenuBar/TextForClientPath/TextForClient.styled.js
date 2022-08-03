import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 0 0 12px;
  border-bottom: 1px solid #eaf2ff;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #37352f;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  margin-right: 29px;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 397px;
  height: 88px;
  box-shadow: inset 0px 4px 20px rgba(11, 22, 40, 0.05);
  border-color: transparent;
  padding-right: 70px;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

export const AreaBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmojiButton = styled.button`
display: flex;
align-items: center;
position: absolute;
bottom: 8px;
right: 32px;
padding: 0;
border: none;
font: inherit;
color: inherit;
background-color: transparent;
`;

export const Container = styled.div`
  position: relative;
`;
