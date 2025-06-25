import Dropdown from "./components/Dropdown";
import Header from "./components/Header";

function App() {
  const headerTitle = "RunGood";
  const headerSubtitle = "A poker hand logger";
  const suitTitle = "Select your suit";
  const suits = [suitTitle, "Hearts", "Diamonds", "Spades", "Clubs"];
  const cardTitle = "Select your card";
  const cards = [cardTitle, "A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

  return (
    <>
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <h3>Card 1</h3>
      <Dropdown title={cardTitle} content={cards}/>
      <Dropdown title={suitTitle} content={suits}/>
      <h3>Card 2</h3>
      <Dropdown title={cardTitle} content={cards}/>
      <Dropdown title={suitTitle} content={suits}/>
    </>
  );
}

export default App;
