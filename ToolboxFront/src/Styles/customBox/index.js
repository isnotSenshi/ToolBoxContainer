import { styled } from 'styled-components'

const CustomBox = styled('div')`
     ${(props) => props.$styleString};
     position: relative;
     background: ${(props) => props.background};
     ${(props) => props.$hideBox && 'opacity: 0; user-select: none;'}
     ${(props) => props.$pointer && 'cursor: pointer;'}
`

export default CustomBox