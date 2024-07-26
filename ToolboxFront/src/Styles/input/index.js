import styled from "styled-components"

const Input = styled("input")`
    autocomplete: off;
    background-color: ${props => props.backColor};
    border: none;
    margin: ${props => props.margin};
    outline: none;
    width: ${props => props.width};
    height: ${props => props.height};
	cursor: ${props => props.cursor};
    ${props => props.$styleString};
    ${props => props.id};

`
export default Input 
