import Header from "./components/Header";
import Body from "./Body";

function App() {
  const headerTitle = "RunGood";
  const headerSubtitle = "A poker hand logger";

  return (
    <>
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <Body />
    </>
  );
}

export default App;
