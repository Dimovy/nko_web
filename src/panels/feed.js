import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Banner from '@vkontakte/vkui/dist/components/Banner/Banner';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Icon24Add from '@vkontakte/icons/dist/24/add';



const Feed = ({ go, id, info }) => (
    <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={go} data-to="makecollection" > <Icon24Add /></PanelHeaderButton>}>
            Новости
            </PanelHeader>
        {info !== '' ? info.map((donation, donationID) => (
            <Banner
                before={<Avatar size={96} mode="image" style={{ backgroundSize: 'cover' }} src="https://i.imgur.com/uuiHNoh.png" />}
                header={donation.donationName}
                subheader=
                {<React.Fragment>
                    <InfoRow header={donation.id !== '100' ? donation.donationValue + '₽' : 'Cумма собрана!'}>
                        <Progress value={donation.id} />
                    </InfoRow>
                </React.Fragment>}
                actions={donation.id !== '100' ? 
                <Button onClick={go} data-to="openpost" data-id={donationID} >Помочь</Button> : 
                <Button onClick={go} data-to="openpost" data-id={donationID} >Посмотреть</Button>}
            />
        )) : null}
    </Panel>
);


export default Feed;
