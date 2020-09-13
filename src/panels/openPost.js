import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import { Progress, SimpleCell, Group, Avatar, Div, InfoRow, Header, Banner, Text, Button } from '@vkontakte/vkui';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';




const OpenPost = ({ go, id, info, donationID }) => {
    let value = Math.floor((info[donationID].id / 100) * info[donationID].donationValue);
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={go} data-to="feed" data-id={donationID}> <Icon24BrowserBack /></PanelHeaderButton>}>
                Сбор
        </PanelHeader>
            <Div>
                <div
                    style={{
                        height: '200px', width: '100%', borderRadius: '10px',
                        backgroundImage: 'url(https://gagadget.com/media/post_big/vk_music.jpg)', backgroundSize: 'cover'
                    }}>

                </div>
            </Div>
            <Banner

                mode="image"
                size="m"
                header={<span style={{ color: 'black' }}>{info[donationID].donationName}</span>}
                subheader={
                    <React.Fragment>
                        <InfoRow header={<span>Собрано: <span style={{ color: 'black' }}>{value} ₽</span></span>}>
                            <Progress style={{ marginBottom: '15px', color: 'rgb(68,174,76' }} value={info[donationID].id} />
                        </InfoRow>
                    </React.Fragment>}
            />
            <Group>
                <Header mode="secondary">{<span style={{ color: 'black' }}>Автор</span>}</Header>
                <SimpleCell before={<Avatar size={48} src="https://i.imgur.com/T1WC6ky.png" />} description='Волонтер'>{info[donationID].author}</SimpleCell>
                {info[donationID].endType === 'Дата' ? <Group> 
                    <Header mode="secondary">{<span style={{ color: 'black' }}>Дата завершения сбора:</span>}</Header> 
                    <Div>
                    <Text weight="regular" style={{ marginBottom: 16 }}>{info[donationID].endDate}</Text>
                    </Div>
                </Group>: null}
                <Header mode="secondary">{<span style={{ color: 'black' }}>Описание</span>}</Header>
                <Div>
                    <Text weight="regular" style={{ marginBottom: 16 }}>{info[donationID].description}</Text>
                </Div>
            </Group>
            <Div>
               {info[donationID].id !== '100' ? <Button size="xl" mode="primary" style={{ marginBottom: '50px', backgroundColor: 'rgb(68,174,76' }}>Пожертвовать</Button> : null}
            </Div>
        </Panel>
    )
}


export default OpenPost;
