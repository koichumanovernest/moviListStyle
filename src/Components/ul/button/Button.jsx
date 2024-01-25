import "./Button.css";
import styled from "styled-components";

const StyleButton = styled.button`
	background: blue;
	width: 80px;
	height: 35px;
	border: none;
	border-radius: 10px;
	margin-left: 10px;
	color: black;
	transition: 0.5s;


	&:hover{
		box-shadow: 1px 1px 20px 5px red;
  background: red;
  transition: 0.5s;
  color: #fff;
	}
`;
export const Button = ({ text, style, onClick }) => {
	return (
		<StyleButton onClick={onClick} className={style}>
			{text}
		</StyleButton>
	);
};
