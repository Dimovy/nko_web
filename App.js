import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import TypeOfCollection from './panels/typeOfCollection';
import Persik from './panels/Persik';
import MakeCollection from './panels/MakeCollection';
import Feed from './panels/feed';
import OpenPost from './panels/openPost';



const ROUTES = {
	HOME: 'home',
	TYPEOFCOLLECTION: 'typeofcollection',
	PERSIK: 'persik',
	MAKECOLLECTION: 'makecollection',
	FEED: 'feed',
	OPENPOST: 'openpost'
};


const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.OPENPOST);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<TypeOfCollection id='typeofcollection' go={go}/>
			<Persik id='persik' go={go}/>
			<MakeCollection id='makecollection' go={go}/>
			<Feed id='feed' go={go}/>
			<OpenPost id='openpost' go={go}/>


		</View>
	);
}

export default App;

