import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';


const Home = ({ go, id, info}) => (
	<Panel id={id}>
		<PanelHeader>Пожертвования</PanelHeader>

		<Placeholder stretched>
			У Вас пока нет сборов.<br />Начинате доброе дело.
			<Div>
				<Button size="m" onClick={go} data-to='makecollection' >Создать сбор</Button>
			</Div>
		</Placeholder>

	</Panel>
);


export default Home;
