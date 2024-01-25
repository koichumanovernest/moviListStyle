import css from './Cards.module.css'
export const Card = ({ data }) => {
	return (
		<div className={css.containerCrad}>
			{data.map((item, index) => {
				return (
					<div key={index} className={css.border}>
						<h2>{item.name}</h2>
						<img src={item.photo} alt={item.name} />
						<p>{item.nameG}</p>
					</div>
				);
			})}
		</div>
	);
};
