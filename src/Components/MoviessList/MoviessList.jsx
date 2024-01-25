import { Movi } from "../Movi/Movi";
import { Button } from "../ul/button/Button";
import "./MoviessList.css";
import {useState} from 'react';

export const MoviessList = ({ state, setState }) => {
  const [stateResult, setStateResult] = useState("");
	const removeCard = (id) => {
		const deleteCards = [...state, stateResult];
    deleteCards.splice(id);
    setState(deleteCards);
	};

	return (
		<div className="DivBUr">
				<Button  text='DELETE IS CARDS' onClick={removeCard} />
			<div className="furst">

			{state.map(({ name, photo, gh, id }) => (
				<Movi
					key={id}
					name={name}
					photo={photo}
					gh={gh}
					
				/>
				))}
			</div>
		</div>
	);
};
