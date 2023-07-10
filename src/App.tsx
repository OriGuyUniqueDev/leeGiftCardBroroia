import MainContainer from "./pages/main/MainContainer";
import DescAndConnect from "./pages/main/components/DescAndConnect";
import TextBubble from "./pages/main/components/TextBubble";
import logoSrc from "./assets/logo.png";

export default function App() {
  return (
    <MainContainer>
      <TextBubble />
      <DescAndConnect />
      <img
        src={logoSrc}
        alt="Lee Malka Consmetics Logo"
        width="200rem"
        className="sixth"
      />
    </MainContainer>
  );
}
