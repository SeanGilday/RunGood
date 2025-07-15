import { useState } from "react";
import Dropdown from "./Dropdown";

function GameInfo() {
	const [isCashGame, setIsCashGame] = useState(false);
	const blindOptions = ["0.10/0.20", "0.25/0.50", "0.50/1", "1/2", "2/5"];
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
	const cardRanks = [
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"T",
		"J",
		"Q",
		"K",
		"A",
	];
	const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

	return (
		<>
			<div className="game-mode">
				<span className="label">Game Mode:</span>
				<button
					className="game-mode-button"
					onClick={() => setIsCashGame(!isCashGame)}
				>
					{isCashGame ? "Cash" : "Tournament"}
				</button>
			</div>
			<div className="blinds">
				<span className="label">Blinds: </span>
				<Dropdown title="" content={blindOptions} />
			</div>
			<div className="num-players">
				<span className="label">Number of Players: </span>
				<Dropdown title="" content={numPlayerOptions} />
			</div>
			<div className="position">
				<span className="label">Hero Position: </span>
				<Dropdown title="" content={positionOptions} />
			</div>
			<table className="hole-cards">
				<tr>
					<td>Card 1</td>
					<td>
						<Dropdown title="Select Card" content={cardRanks} />
					</td>
					<td>
						<Dropdown title="Select Suit" content={suits} />
					</td>
				</tr>
				<tr>
					<td>Card 2</td>
					<td>
						<Dropdown title="Select Card" content={cardRanks} />
					</td>
					<td>
						<Dropdown title="Select Suit" content={suits} />
					</td>
				</tr>
			</table>
			<button type="button" className="start-hand btn btn-primary ">
				Start Hand
			</button>
		</>
	);
}

export default GameInfo;
