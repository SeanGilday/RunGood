import { useState } from "react";

interface Props {
  title: string;
  content: string[];
}

function Dropdown({ title, content }: Props) {
    const [suit, setSuit] = useState(title)

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {suit}
        </button>
        <ul className="dropdown-menu">
          {content.map((content) => (
            <li>
              <button className="dropdown-item" onClick={() => setSuit(content)}>
                {content}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
