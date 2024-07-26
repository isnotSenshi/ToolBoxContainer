import { useContext, useEffect } from "react"
import { CONTEXT } from "../../App/context"
import { useNavigate } from "react-router-dom"
import { NAVIGATE_TO } from "../../Core/Types"


const CustomRoute = ({ element }) => {
	const { state, dispatch } = useContext(CONTEXT)
	const navigate = useNavigate()
	const path = state?.navigateTo

	useEffect(() => {
		if (path) {
			navigate(path)
			dispatch({
				type: NAVIGATE_TO,
				value: null
			})
		}
	}, [path])

	return element
}
export default CustomRoute
