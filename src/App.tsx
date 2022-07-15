import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/Layout';
import MotionDesign from './components/MotionDesign';
import ThreeDModeling from './components/ThreeDModeling';
import ThreeDModelingProjectDetails from './components/ThreeDModeling/ThreeDModelingProjectDetails';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/motion-design' element={<MotionDesign />}></Route>
				<Route path='/3d-modeling' element={<ThreeDModeling />}></Route>
				<Route
					path='/3d-modeling/:project'
					element={<ThreeDModelingProjectDetails />}
				></Route>
			</Routes>
		</Layout>
	);
};

export default App;
