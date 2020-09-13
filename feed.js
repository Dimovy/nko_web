import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Banner from '@vkontakte/vkui/dist/components/Banner/Banner';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';




const Feed = ({ go }) => (
    <Panel id="home">
        <PanelHeader>Новости</PanelHeader>

        <Banner
            before={<Avatar size={96} mode="image" style={{ backgroundSize: 'cover' }} src="https://i.imgur.com/uuiHNoh.png" />}
            header="Название пожертвования"
            subheader=
            {<React.Fragment>
                <InfoRow header="75 000 ₽">
                    <Progress value={40} />
                </InfoRow>
            </React.Fragment>}
            actions={<Button>Помочь</Button>}
        />

    </Panel>
);


export default Feed;
