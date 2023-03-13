import React from 'react';
import './settings.css';

import { RxCaretRight } from 'react-icons/rx';

const Settings = () => {
	return (
		<div className='settingsPage'>
			<div className='autoBox'></div>
			<div className='autoText'>Auto Updates</div>
			<div className='on'>On</div>
			<RxCaretRight className='settingsCaret' />
			<div className='News'> Next Update March 31st</div>
			<div className='Version'>V1.0.1</div>
		</div>
	);
};

export default Settings;
