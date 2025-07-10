import { useState } from "react";
import Dropdown from "./Dropdown";

function GameInfo() {
	const [isCashGame, setIsCashGame] = useState(false);
	const blindOptions = ["0.10/0.20", "0.25/0.50", "1/2", "2/5"];
	const numPlayerOptions = ["2", "3", "4", "5", "6", "7", "8", "9"];
	const positionOptions = [
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
			<div className="game-mode">
				<span className="game-mode-label">Game Mode:</span>
				<button
					className="game-mode-button"
					onClick={() => setIsCashGame(!isCashGame)}
				>
					{isCashGame ? "Cash" : "Tournament"}
				</button>
			</div>
			<Dropdown title="Blinds" content={blindOptions} />
			<div className="num-players">
				<span className="num-players-label">Number of Players: </span>
				<Dropdown title="" content={numPlayerOptions} />
			</div>
			<div className="position">
				<span className="position-label">Hero Position: </span>
				<Dropdown title="" content={positionOptions} />
			</div>
		</>
	);
}

export default GameInfo;
