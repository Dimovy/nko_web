import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import MakeCollection from './panels/MakeCollection';
import Feed from './panels/feed';
import OpenPost from './panels/openPost';



const ROUTES = {
	HOME: 'home',
	MAKECOLLECTION: 'makecollection',
	FEED: 'feed',
	OPENPOST: 'openpost'
};


const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.HOME);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [info, setInfo] = React.useState([{
		author: 'Юлия Борисовна',
		description: 'В Германии очень дорогое лечение, требуется ваша помощь!',
		donationType: 'Целевое',
		donationValue: '1000000',
		donationAcc: 'Карта',
		donationName: 'На лечение Алексею Анатольевичу',
		endDate: '',
		endType: 'Сумма',
		progress: '100',
		id: Date.now()
	}]);
	const [donationID, setDonationID] = React.useState();

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
		});
		async function fetchData() {
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
		setDonationID(e.currentTarget.dataset.id)
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' go={go} info={info}/>
			<MakeCollection id='makecollection' setInfo={setInfo} go={go} />
			<Feed id='feed' info={info} go={go} />
			<OpenPost id='openpost' donationID={donationID} info={info} go={go} />
		</View>
	);
}

export default App;

