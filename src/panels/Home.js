import React, { useState } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import PanelHeaderContent from '@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent';
import PanelHeaderContext from '@vkontakte/vkui/dist/components/PanelHeaderContext/PanelHeaderContext';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Banner from '@vkontakte/vkui/dist/components/Banner/Banner';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import { Group } from '@vkontakte/vkui';

const Home = ({ go, id, info }) => {
	const sortedInfo = info.slice(1, info.length);
	const [contextOpened, setContextOpened] = useState(false);
	const [mode, setMode] = useState('active');

	const toggleContext = () => {
		setContextOpened(previousState => !previousState);
	}

	const select = (e) => {
		setMode(e.currentTarget.dataset.mode)
		requestAnimationFrame(toggleContext);
	}

	return (
		<Panel id={id}>
			<PanelHeader
				left={<PanelHeaderButton onClick={go} data-to="feed" > <Icon24BrowserBack /></PanelHeaderButton>}>
				<PanelHeaderContent
					aside={<Icon16Dropdown style={{ transform: `rotate(${contextOpened ? '180deg' : '0'})` }} />}
					onClick={toggleContext}
				>
					Пожертвования
            </PanelHeaderContent>
			</PanelHeader>
			<PanelHeaderContext opened={contextOpened} onClose={toggleContext}>
				<List>
					<Cell
						asideContent={mode === 'active' ? <Icon24Done fill="var(--accent)" /> : null}
						onClick={select}
						data-mode="active"
					>
						Пожертвования
              </Cell>
					<Cell
						asideContent={mode === 'archive' ? <Icon24Done fill="var(--accent)" /> : null}
						onClick={select}
						data-mode="archive"
					>
						Архив
              </Cell>
				</List>
			</PanelHeaderContext>
			{mode === 'active' ? <Group>
				{sortedInfo.length === 0 ? <Group>
					<Placeholder stretched>
						У Вас нет активных сборов.<br />Начинате доброе дело.
			<Div>
							<Button size="m" onClick={go} data-to='makecollection' >Создать сбор</Button>
						</Div>
					</Placeholder>
				</Group> : sortedInfo.map((donation, donationID) => (
					<Group>
						<Banner
							key={donation.id}
							before={<Avatar size={96} mode="image" style={{ backgroundSize: 'cover' }} src="https://i.imgur.com/uuiHNoh.png" />}
							header={donation.donationName}
							subheader=
							{<React.Fragment>
								<InfoRow header={donation.progress !== '100' ? donation.donationValue + '₽' : 'Cумма собрана!'}>
									<Progress value={donation.id} />
								</InfoRow>
							</React.Fragment>}
							actions=
							{<Button onClick={go} data-to="openpost" data-id={donationID+1} >Посмотреть</Button>}
						/>
						{donationID === sortedInfo.length - 1 ?
							<Div align = 'center'> 
								<Button size="m" onClick={go} data-to='makecollection' >Создать сбор</Button>
							</Div> : null}
					</Group>
				))}
			</Group> : <Placeholder stretched>
					Ваш архив сборов пока пуст.
	<Div>
					</Div>
				</Placeholder>
			}

		</Panel >
	)
}

export default Home;
