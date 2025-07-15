import { useState } from "react";
import PokerTable from "./components/PokerTable";
import GameInfo from "./components/GameInfo";
import Players from "./components/Players";

function HandSetup() {
	const [isPlayersVisible, setIsPlayersVisible] = useState(true);

	return (
		<>
			<table>
				<tr>
					<td>
						<PokerTable />
					</td>
					<td>
						<Players shown={isPlayersVisible} />
					</td>
				</tr>
				<tr>
					<td>
						<GameInfo />
					</td>
					<td>
						<button
							onClick={() =>
								setIsPlayersVisible(!isPlayersVisible)
							}
						>
							Make visible
						</button>
					</td>
				</tr>
			</table>
		</>
	);
}

export default HandSetup;
