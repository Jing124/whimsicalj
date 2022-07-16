import { Route, Routes } from 'react-router-dom';

import GraphicDesign from './components/GraphicDesign';
import Home from './components/Home';
import Layout from './components/Layout';
import MotionDesign from './components/MotionDesign';
import Resume from './components/Resume';
import ThreeDModeling from './components/ThreeDModeling';
import ThreeDModelingProjectDetails from './components/ThreeDModeling/ThreeDModelingProjectDetails';
import UxUi from './components/UxUi';
import VideoEditing from './components/VideoEditing';

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
				<Route
					path='/graphic-design'
					element={<GraphicDesign />}
				></Route>
				<Route path='/video-editing' element={<VideoEditing />}></Route>
				<Route path='/ux-ui' element={<UxUi />}></Route>
				<Route path='/resume' element={<Resume />}></Route>
			</Routes>
		</Layout>
	);
};

export default App;
