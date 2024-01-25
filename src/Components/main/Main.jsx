import { Card } from "../ul/Cards/Cards";
import { Button } from "../ul/button/Button";
import { useState } from "react";
import "./Main.css";

const data = [
	{
		name: "Kosmos",
		photo: "https://www.mirf.ru/wp-content/uploads/2015/09/interstellar-3.jpg",
		nameG: "Фантастика",
	},
	{
		name: "Tom Kruz",
		photo:
			"https://w.forfun.com/fetch/ad/adef9bed51d674c2fc197f2f670caf9b.jpeg?w=1470&r=0.5625",
		nameG: "Фантастика",
	},
	{
		name: "Robot",
		photo: "https://fi-hi.ru/wp-content/uploads/2021/08/1-8.jpeg",
		nameG: "Фантастика",
	},
	{
		name: "mistiteli",
		photo:
			"https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mstiteli-25.jpg",
		nameG: "Фантастика",
	},
	{
		name: "Дорамы",
		photo:
			"https://i.pinimg.com/originals/b3/1a/d3/b31ad3d96bfd111b2316fb5e743e0896.jpg",
		nameG: "дорамы",
	},
	{
		name: "Дорамы",
		photo:
			"https://avatars.dzeninfra.ru/get-zen_doc/10074064/pub_64918ba5b8acde1479ea5970_64918c29413f4373a7f115d7/scale_1200",
		nameG: "дорамы",
	},
	{
		name: "Дорамы",
		photo:
			"https://i.pinimg.com/originals/e0/84/07/e084074cf7918f9113bfe4429d59ec31.jpg",
		nameG: "дорамы",
	},
	{
		name: "Дорамы",
		photo:
			"https://avatars.mds.yandex.net/i?id=2c6aeabcc1816e5947cbda2708aa6ebab3a41805-4575666-images-thumbs&n=13",
		nameG: "дорамы",
	},
	{
		name: "Aladin",
		photo:
			"https://i.pinimg.com/originals/e0/19/44/e01944e1fe3de1171ff63e9bf01ed2db.jpg",
		nameG: "Любовь",
	},
	{
		name: "Мультики",
		photo:
			"https://i.pinimg.com/originals/21/bb/de/21bbdeeb2edf9097aed8d4f84bea6c35.jpg",
		nameG: "Любовь",
	},
	{
		name: "Мультики",
		photo: "https://www.film.ru/sites/default/files/images/08(137).jpg",
		nameG: "Любовь",
	},
	{
		name: "Мультики",
		photo:
			"https://n1s1.hsmedia.ru/5b/88/10/5b8810800181f88705307da7ee2b4439/600x600_1_8813a5bc554a6e3c1b2c70031dbce21c@1036x1036_0xac120004_464440591685275251.jpeg",
		nameG: "Любовь",
	},
	

];

const Main = () => {
	const [stateResult1, setStateResult1] = useState(data);
	const [stateresult, setStateResult] = useState(data);
	function getCards(stateresult) {
		const result = stateResult1.filter((item) => item.nameG === stateresult);
		setStateResult(result);
		console.log(result);
	}
	function resultGet(e) {
		// setStateResult(e.target.innerText);
		getCards(e.target.innerText);
	}
	return (
		<div>
			<div>
				<div>
					<Button
						className="button1"
						text="Фантастика"
						style="button1"
						onClick={resultGet}
					/>
					<Button text="Любовь" style="button1" onClick={resultGet} />
					<Button text="дорамы" style="button1" onClick={resultGet} />
  				</div>
				<div className="cards">
					<Card data={stateresult} />
				</div>
			</div>
		</div>
	);
};

export default Main;
