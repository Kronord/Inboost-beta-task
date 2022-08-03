import React from 'react';
import {
  Text,
  Wrapper,
  Button,
  Box,
  TextArea,
  AreaBox,
  EmojiButton,
  Container,
} from './TextForClient.styled';
import { ReactSVG } from 'react-svg';
import AddIco from '../../../Images/Add.svg';
import Remove from '../../../Images/Remove.svg';
import { useState } from 'react';
import Picker from 'emoji-picker-react';
import EmojiIco from '../../../Images/EmojiIco.svg';

const TextForClient = () => {
  const [open, setOpen] = useState(false);
  const [inputStr, setInputStr] = useState("Привіт😊 Щоб перейти до головного меню бота, натисніть кнопку внизу “📱Поділитися номером”");
  const [showEmoji, setShowEmoji] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setInputStr(prevInput => prevInput + emojiObject.emoji);
    setShowEmoji(false);
  };
  return (
    <Wrapper>
      <Box>
        <Text>Повідомлення для клієнта</Text>
        <Button type="button" onClick={() => setOpen(!open)}>
          <ReactSVG src={open ? Remove : AddIco} />
        </Button>
      </Box>
      {open && (
        <AreaBox>
          <Container>
            <EmojiButton type="button" onClick={() => setShowEmoji(!showEmoji)}>
              <ReactSVG src={EmojiIco} />
            </EmojiButton>
            <TextArea
              type="text"
              value={inputStr}
              onChange={e => setInputStr(e.target.value)}

            >
              {chosenEmoji}
            </TextArea>
          </Container>
          {showEmoji && (
            <Picker
              onEmojiClick={onEmojiClick}
              pickerStyle={{ width: '400px', height: '300px' }}
            />
          )}
        </AreaBox>
      )}
    </Wrapper>
  );
};

export default TextForClient;
