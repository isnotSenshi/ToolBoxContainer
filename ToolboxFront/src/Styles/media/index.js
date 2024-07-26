import styled from 'styled-components'


const Media = styled('img')`
	${(props) => props.$styleString};
	${(props) => (props.$pointer ? `cursor: pointer;` : `pointer-events: none;`)};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.$margin};
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	background-color: ${(props) => props.$bgColor};
	${(props) =>
		props.center &&
		`display: block;
        margin-left: auto;
        margin-right: auto;`};
	${(props) =>
		props.$hovercolor &&
		` &:hover{
            fill:white; 
            background: ${props.$hovercolor};
            cursor: pointer;
        }`}
	user-select: none;
`

export default Media