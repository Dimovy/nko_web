import React, { useState } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Radio from '@vkontakte/vkui/dist/components/Radio/Radio';

const MakeCollection = ({ go, id, setInfo }) => {
    const [target, setTarget] = useState(true);
    const [date, setDate] = useState(false);
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [donationType, setDonationType] = useState('Целевой');
    const [donationValue, setDonationValue] = useState('');
    const [donationAcc, setDonationAcc] = useState('');
    const [donationName, setDonationName] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endType, setEndType] = useState('Сумма');

    const radioClickTarget = () => {
        setTarget(previousState => !previousState)
        if (donationType === 'Постоянный') {
            setDonationType('Целевой')
        } else {
            setDonationType('Постоянный')
        }
    }
    const radioClickDate = () => {
        setDate(previousState => !previousState)
        if (endType === 'Сумма') {
            setEndType('Дата')
        } else {
            setEndType('Сумма')
        }
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangeDonationName = (e) => {
        setDonationName(e.target.value)
    }
    const onChangeDonationValue = (e) => {
        setDonationValue(String(e.target.value))
    }
    const onChangeAuthor = (e) => {
        setAuthor(e.target.value)
    }
    const onChangeDonationAcc = (e) => {
        setDonationAcc(e.target.value)
    }
    const onChangeEndDate = (e) => {
        setEndDate(e.target.value)
    }
    const addDonation = () => {
        let newElement = {
            author: author,
            description: description,
            donationType: donationType,
            donationValue: donationValue,
            donationAcc: donationAcc,
            donationName: donationName,
            endDate: endDate,
            endType: endType,
            progress: String(Date.now()).slice(11, 13),
            id: Date.now()
        }
        console.log(newElement)
        setInfo(oldArray => [...oldArray, newElement])
    }
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={go} data-to="home" > <Icon24Cancel /></PanelHeaderButton>}>
                Создать сбор
                </PanelHeader>
            <Div>
                <FormLayout>
                    <FormLayoutGroup top="Цель">
                        <Input type="text" onChange={onChangeDonationName} placeholder="Название пожертвования" />
                    </FormLayoutGroup>
                    <Group>
                        <CellButton before={<Icon24Add />}>Добавить фотографию</CellButton>
                    </Group>
                    <FormLayout top="Тип сбора">
                        <div>
                            <Radio name="radio" onChange={radioClickTarget} value="target" description="Когда есть определенная цель" defaultChecked>Целевой сбор</Radio>
                            <Radio name="radio" value="monthly" onChange={radioClickTarget} description="Если помощь нужна ежемесячно">Регулярный сбор</Radio>
                        </div>
                    </FormLayout>
                    {target ? <FormLayoutGroup top="Сумма сбора, ₽">
                        <Input type="number" onChange={onChangeDonationValue} placeholder="Сколько нужно собрать" />
                    </FormLayoutGroup> :
                        <FormLayoutGroup top="Сумма в месяц, ₽">
                            <Input type="number" onChange={onChangeDonationValue} placeholder="Сколько нужно в месяц?" />
                        </FormLayoutGroup>}
                    <FormLayoutGroup top="Описание">
                        <Textarea type="text" onChange={onChangeDescription} placeholder="Длинное описание для очень красивого пожертвования, но мы не уверены, что так должно быть" />
                    </FormLayoutGroup>
                    <FormLayout>
                        <Select top="Получить средаства на" onChange={onChangeDonationAcc} placeholder="Счёт VK Pay • 1235">
                            <option value="VK Pay">VK Pay • 1235</option>
                            <option value="Крата">Карта</option>
                        </Select>
                    </FormLayout>
                    <FormLayoutGroup top="Автор">
                        <Input type="text" onChange={onChangeAuthor} placeholder="Иван Иванов" />
                    </FormLayoutGroup>
                    {target ? <FormLayout top="Сбор завершится">
                        <div>
                            <Radio name="radio" onChange={radioClickDate} value="money" defaultChecked>Когда соберем сумму</Radio>
                            <Radio name="radio" onChange={radioClickDate} value="date">В определенную дату</Radio>
                        </div>
                    </FormLayout> : null}
                    {target && date ? <FormLayoutGroup top="Дата завершения">
                        <Input type="date" onChange={onChangeEndDate} placeholder="Выберите дату" />
                    </FormLayoutGroup> : null}
                    <Button size="xl" mode="primary" onMouseUp={go} data-to='feed' onClick={addDonation}>Создать сбор</Button>

                </FormLayout>
            </Div>
        </Panel>
    )
}


export default MakeCollection;
