import MainPage from "../Pages/Main/index.js"

const useRoutes = () => {
	return [
		{
			name: 'MAIN',
			path: '/',
			element: <MainPage/>
		},
		
	]
}

export default useRoutes
