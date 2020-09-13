import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Radio from '@vkontakte/vkui/dist/components/Radio/Radio';





const MakeCollection = ({ go }) => (
    <Panel id="home">
        <PanelHeader>Создать сбор</PanelHeader>
        <Div>
            <FormLayout>
                <FormLayoutGroup top="Цель">
                    <Input type="text" placeholder="Название пожертвования" />
                </FormLayoutGroup>
                <Group>
                    <CellButton before={<Icon24Add />}>Добавить фотографию</CellButton>
                </Group>
                <FormLayout top="Тип сбора">
                    <div>
                        <Radio name="radio" value="1" description="Когда есть определенная цель" defaultChecked>Целевой сбор</Radio>
                        <Radio name="radio" value="2" description="Если помощь нужна ежемесячно">Регулярный сбор</Radio>
                    </div>
                </FormLayout>
                <FormLayoutGroup top="Сумма сбора, ₽">
                    <Input type="text" placeholder="Сколько нужно собрать" />
                </FormLayoutGroup>
                <FormLayoutGroup top="Сумма в месяц, ₽">
                    <Input type="text" placeholder="Сколько нужно в месяц?" />
                </FormLayoutGroup>
                <FormLayoutGroup top="Описание">
                    <Textarea type="text" placeholder="Длинное описание для очень красивого пожертвования, но мы не уверены, что так должно быть" />
                </FormLayoutGroup>
                <FormLayout>
                    <Select top="Получить средаства на" placeholder="Счёт VK Pay • 1235">
                        <option value="m">VK Pay • 1235</option>
                        <option value="f">Карта</option>
                    </Select>
                </FormLayout>
                <FormLayoutGroup top="Автор">
                    <Input type="text" placeholder="Иван Иванов" />
                </FormLayoutGroup>
                {/* Если выбирают сбор в месяц, то дата оканчания не нужна */}
                <FormLayoutGroup top="Сбор завершится">
                    <Input type="date" placeholder="Иван Иванов" />
                </FormLayoutGroup>
                <Button size="xl" mode="primary">Создать сбор</Button>

            </FormLayout>
        </Div>

    </Panel>
);


export default MakeCollection;
