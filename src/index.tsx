import './index.scss';

import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<SnackbarProvider
					maxSnack={10}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					autoHideDuration={7000}
				>
					<App />
				</SnackbarProvider>
			</HashRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
