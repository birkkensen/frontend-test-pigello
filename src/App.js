import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, NotFound } from './pages';
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
