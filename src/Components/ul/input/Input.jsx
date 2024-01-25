import "./Input.css";
import styled from "styled-components";

const StyleInput = styled.input`
	width: 300px;
	height: 30px;
	border-radius: 20px;
	border: none;
	margin-left: 10px;
	background: blue;
	transition: 1s;

	&:hover {
		transition: 1s;
		background: red;
		color: aliceblue;
		box-shadow: 1px 1px 20px 7px red;
	}
`;
export const Input = ({ type, style, value, text }) => {
	return (
		<StyleInput className={style} placeholder={text} type={type} ref={value} />
	);
};
