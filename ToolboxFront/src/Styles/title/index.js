import styled from 'styled-components'

const Title = styled('div')`
	box-sizing: border-box;
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	text-align: ${(props) => props.align};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	background-color: ${(props) => props.$bgColor};
	${(props) => props.$styleString};
	${(props) =>
		props.hover &&
		` &:hover{
            color:white; 
        }`};
`

export default Title