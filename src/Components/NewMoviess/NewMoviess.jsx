import { Button } from "../ul/button/Button";
import { Input } from "../ul/input/Input";
import "./NewMoviess.css";
import { useRef  } from "react";

export const NewMoviess = ({ state, setState }) => {
	

const moviesName = useRef(null)
const moviesPhoto = useRef(null)
const moviesG = useRef(null)

	function valueInputs() {
		const NewMovies = {
			name: moviesName.current.value,
			photo: moviesPhoto.current.value,
			genre: moviesG.current.value,
		};
		setState([...state, NewMovies]);
		
	}
  console.log(moviesName);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				valueInputs();
			}}>
			<Input
				type="text"
				text="text..."
				style="inputMain"
				value={moviesName}
				
			/>
			<Input
				type="url"
				text="img..."
				style="inputMain"
				value={moviesPhoto}
			/>
			<Input
				type="text"
				text="janr..."
				style="inputMain"
				value={moviesG}
			/>
			<Button type='submit' text="Add" style="addButton" button="Aadd" />
		</form>
	);
};
