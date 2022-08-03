import AppBar from "./AppBar";
import AppHeader from "./AppHeader";
import MenuBar from "./MenuBar";
import { GlobalWrap } from "./App.styled,";

export const App = () => {
  return (
    <GlobalWrap>
    <AppHeader />
    <AppBar />
    <MenuBar />
    </GlobalWrap>
  );
};
