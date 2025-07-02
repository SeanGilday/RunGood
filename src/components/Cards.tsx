import Dropdown from "./Dropdown";

function Cards() {
  const suitTitle = "Select your suit";
  const suits = [suitTitle, "Hearts", "Diamonds", "Spades", "Clubs"];
  const cardTitle = "Select your card";
  const cards = [
    cardTitle,
    "A",
    "K",
    "Q",
    "J",
    "T",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];
  return (
    <>
      <div id="holeCards">
        <tr>
          <td>
            <h3>Card 1</h3>
          </td>
          <td>
            <Dropdown title={cardTitle} content={cards} />
          </td>
          <td>
            <Dropdown title={suitTitle} content={suits} />
          </td>
        </tr>
        <tr>
          <td>
            <h3>Card 2</h3>
          </td>
          <td>
            <Dropdown title={cardTitle} content={cards} />
          </td>
          <td>
            <Dropdown title={suitTitle} content={suits} />
          </td>
        </tr>
      </div>
      <div id="flop">
        <tr>
          <td>
            <h3>Flop</h3>
          </td>
          <td>
            <Dropdown title={cardTitle} content={cards} />
          </td>
          <td>
            <Dropdown title={suitTitle} content={suits} />
          </td>
        </tr>
        <tr>
          <td>
            <h3>Flop</h3>
          </td>
          <td>
            <Dropdown title={cardTitle} content={cards} />
          </td>
          <td>
            <Dropdown title={suitTitle} content={suits} />
          </td>
        </tr>
        <tr>
          <td>
            <h3>Flop</h3>
          </td>
          <td>
            <Dropdown title={cardTitle} content={cards} />
          </td>
          <td>
            <Dropdown title={suitTitle} content={suits} />
          </td>
        </tr>
      </div>
      <div id="turn">
        <tr>
          <td>
            <h3>Turn</h3>
          </td>
          <td>
            <Dropdown title={cardTitle} content={cards} />
          </td>
          <td>
            <Dropdown title={suitTitle} content={suits} />
          </td>
        </tr>
      </div>
      <div id="river">
        <tr>
          <td>
            <h3>River</h3>
          </td>
          <td>
            <Dropdown title={cardTitle} content={cards} />
          </td>
          <td>
            <Dropdown title={suitTitle} content={suits} />
          </td>
        </tr>
      </div>
    </>
  );
}

export default Cards;
