import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';



const Home = ({go}) => (
	<Panel id="home">
		<PanelHeader>Пожертвование</PanelHeader>

		<Placeholder
			stretched
		>
			У Вас пока нет сборов.<br />Начинате доброе дело.
			<Div>
				<Button size="m" onClick={go}  data-to="typeofcollection" >Сделать сбор</Button>
			</Div>
		</Placeholder>

	</Panel>
);


export default Home;
