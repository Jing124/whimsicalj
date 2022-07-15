import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/Layout';
import MotionDesign from './components/MotionDesign';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/motion-design' element={<MotionDesign />}></Route>
			</Routes>
		</Layout>
	);
};

export default App;
