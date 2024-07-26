import styled from "styled-components"

const TextArea = styled("textarea")`    
    background-color: ${props => props.backColor};
    border: none;
    margin: ${props => props.margin};
    outline: none;
    width: ${props => props.width};
	cursor: ${props => props.cursor};
    ${props => props.$styleString};
    ${props => props.id};

`

export default TextArea 
