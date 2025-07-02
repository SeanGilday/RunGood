import Dropdown from "./Dropdown";

function GameInfo() {
  const positions = [
    "Small Blind",
    "Big Blind",
    "UTG",
    "UTG+1",
    "MP",
    "Lojack",
    "Hijack",
    "Cutoff",
    "Button",
  ];

  return (
    <>
      <div id="gameInfo">
        <tr>
          <td>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                aria-label="Location"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Confirm
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="How many handed?"
                aria-label="How many handed?"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Confirm
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Stack size (BB)"
                aria-label="Stack size (BB)"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Confirm
              </button>
            </div>
          </td>
          <td>
            <Dropdown title="Position" content={positions} />
          </td>
        </tr>
      </div>
    </>
  );
}

export default GameInfo;
