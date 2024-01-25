import { MoviessList } from "../MoviessList/MoviessList";
import {useState} from 'react';
import { NewMoviess } from "../NewMoviess/NewMoviess";

  const MoviessGo = () => {
  const [state, setState] = useState([]);
	return (
		<div>
			{/* <NewMoviess state={state} setState={setState}/> */}
      <NewMoviess state={state} setState={setState}/>
      <MoviessList state={state} setState={setState}/>
		</div>
	);
};

export default MoviessGo