import css from "./Movi.module.css";

export const Movi = ({ name, photo, gh, id }) => {
	return (
		<div className={css.divBar}>
			<div className={css.Name} key={id}>
				<h3>{name}</h3>
				<img src={photo} alt={name} />
				<p>{gh}</p>
			</div>
		</div>
	);
};
