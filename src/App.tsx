import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/Layout';
import MotionDesign from './components/MotionDesign';
import ThreeDModeling from './components/ThreeDModeling';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/motion-design' element={<MotionDesign />}></Route>
				<Route path='/3d-modeling' element={<ThreeDModeling />}></Route>
			</Routes>
		</Layout>
	);
};

export default App;
