import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Progress, SimpleCell, Group, Avatar, Div, InfoRow, Header, Banner, Text, Button } from '@vkontakte/vkui';





const OpenPost = ({ go }) => (
    <Panel id="home">
        <PanelHeader>Сбор</PanelHeader>
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
            header={<span style={{ color: 'black' }}>Название пожертвования</span>}
            subheader={
                <React.Fragment>
                    <InfoRow header={<span>Собрано: <span style={{ color: 'black' }}>75 000 ₽</span></span>}>
                        <Progress style={{ marginBottom: '15px', color: 'rgb(68,174,76' }} value={60} />
                    </InfoRow>
                </React.Fragment>}
        />
        <Group>
            <Header mode="secondary">{<span style={{ color: 'black' }}>Автор</span>}</Header>
            <SimpleCell before={<Avatar size={48} src="https://i.imgur.com/T1WC6ky.png" />} description="Интернет-СМИ">TJ</SimpleCell>
            <Header mode="secondary">{<span style={{ color: 'black' }}>Описание</span>}</Header>
            <Div>
                <Text weight="regular" style={{ marginBottom: 16 }}>Длинное описание для очень красивого пожертвования, но мы не уверены, что так должно быть</Text>
            </Div>
        </Group>
        <Div>
            <Button size="xl" mode="primary" style={{ marginBottom: '50px', backgroundColor: 'rgb(68,174,76'}}>Пожертвовать</Button>
        </Div>





    </Panel>
);


export default OpenPost;
