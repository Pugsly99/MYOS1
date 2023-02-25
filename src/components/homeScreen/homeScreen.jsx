import React from 'react';
import './homeScreen.css';

import App from '../app';
import { MAINAPPS } from '../../assets/apps';

const HomeScreen = () => {
	return (
		<div className='homeScreen'>
			<div className='header'>Header</div>
			<div className='apps'>
				{MAINAPPS.map((app) => (
					<App data={app} />
				))}
			</div>
			<div className='footer'>
				DOCK
				<link
					rel='stylesheet'
					href='TEXT MY ARTIST NUMBER'
				/>
				<link
					rel='stylesheet'
					href='EMAIL ME'
				/>
			</div>
		</div>
	);
};

export default HomeScreen;
