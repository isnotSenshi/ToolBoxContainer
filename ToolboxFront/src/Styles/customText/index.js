import styled from 'styled-components'


const CustomText = styled('div')`
	box-sizing: border-box;
	display: flex;
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	text-align: ${(props) => props.align};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.$margin};
	background-color: ${(props) => props.$bgColor};
	${(props) => props.$styleString};

	&: hover { 		
		color: ${(props) => props.$hovercolor};
	}
`

export default CustomText