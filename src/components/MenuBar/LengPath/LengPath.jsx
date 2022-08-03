import React from 'react';
import { LengBox, BtnText, Btn, BtnBox } from './LengPath.styled';
import LanguageIco from '../../../Images/LanguageIco.svg';
import { ReactSVG } from 'react-svg';

const LengPath = () => {
  return (
    <LengBox>
      <BtnBox>
        <Btn variant="outlined">
          <BtnText style={{ color: '#2C7DFA' }}>UA</BtnText>
        </Btn>
        <Btn variant="contained" disabled style={{ margin: '0 8px' }}>
          <BtnText>RU</BtnText>
        </Btn>
        <Btn variant="contained" disabled>
          <BtnText>ENG</BtnText>
        </Btn>
      </BtnBox>
      <ReactSVG
        src={LanguageIco}
        style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}
      />
    </LengBox>
  );
};

export default LengPath;
