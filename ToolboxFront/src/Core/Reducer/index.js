import {
	ADD_INITIAL_VALUE,
	NAVIGATE_TO,
	CHANGE_MAIN_WINDOW,
	CLEAR_STATE,
	SHOW_CLIENT_MODAL,
	SHOW_PRODUCT_GROUPS_MODAL,
	SHOW_PRODUCT_MODAL
} from '../Types/index.js'

export const Reducer = (state, action) => {
	switch (action.type) {
		case ADD_INITIAL_VALUE:
			return {
				...state,
				...action.value
			}
		case CLEAR_STATE:
			return {
				...state,
				example: null,
				mainWindow: 'HOME_WINDOW',
				loginToken: null,
				user: null,
				inventoryUsers: [{ id: 'ID', name: 'Nombre', role: 'Rol', email: 'Email', phone: 'Teléfono' }]
			}
		case NAVIGATE_TO:
			return {
				...state,
				navigateTo: action.value
			}
		case SHOW_PRODUCT_GROUPS_MODAL:
			return {
				...state,
				showProductGroupsModal: action.value
			}
		case SHOW_PRODUCT_MODAL:
			return {
				...state,
				showProductModal: action.value
			}
		case SHOW_CLIENT_MODAL:
			return {
				...state,
				showClientModal: action.value
			}
		case CHANGE_MAIN_WINDOW:
			return {
				...state,
				mainWindow: action.value,
				showProductGroupsModal: false
			}
		default:
			return {
				...state
			}
	}
}
