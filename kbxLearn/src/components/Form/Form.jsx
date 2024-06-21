import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [homestation, setHomestation] = useState('');
    const [workstation, setWorkstation] = useState('');

    // const [passser, setPassser] = useState('');
    
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {homestation, workstation}
        tg.sendData(JSON.stringify(data));
    }, [homestation, workstation]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Зарегистрироваться'
        })
    }, [])

    useEffect(() => {
        if(!homestation && !workstation) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [homestation, workstation])

    const onChangeHomestation = (e) => {
        setHomestation(e.target.value)
    }

    const onChangeWorkstation = (e) => {
        setWorkstation(e.target.value)
    }


    return (
        <div className={"form"}>
            <label>Дом:</label>
            <select
                className={'input'}
                placeholder="Home"
                value={homestation}
                onChange={onChangeHomestation}
            >

                <option value="s9613181">Тимашевск</option>
                <option value="s9750131">Электродепо</option>
                <option value="s9750130">Сахарный завод</option>
                <option value="s9750129">63 км</option>
                <option value="s9613589">Кубанец</option>
                <option value="s9613061">Медведовская</option>
                <option value="s9750128">48 км</option>
                <option value="s9613062">Мышастовка</option>
                <option value="s9613063">Титаровка</option>
                <option value="s9613587">Березовый</option>
                <option value="s9750127">Сады</option>
                <option value="s9750126">ЗИП</option>
                <option value="s9613830">Краснодар-2</option>
                <option value="s9750125">Фабрика кожизделий</option>
                <option value="s9750124">Табаккомбинат</option>
                <option value="s9750123">МЖК</option>
                <option value="s9613602">Краснодар-1</option>

            </select>


            <img className={'image'} src={'${HOME}/assets/e.png'}/>

            <label>Работа:</label>
            <select
                className={'input'}
                placeholder="Home"
                value={workstation}
                onChange={onChangeWorkstation}
            >

                <option value="s9613181">Тимашевск</option>
                <option value="s9750131">Электродепо</option>
                <option value="s9750130">Сахарный завод</option>
                <option value="s9750129">63 км</option>
                <option value="s9613589">Кубанец</option>
                <option value="s9613061">Медведовская</option>
                <option value="s9750128">48 км</option>
                <option value="s9613062">Мышастовка</option>
                <option value="s9613063">Титаровка</option>
                <option value="s9613587">Березовый</option>
                <option value="s9750127">Сады</option>
                <option value="s9750126">ЗИП</option>
                <option value="s9613830">Краснодар-2</option>
                <option value="s9750125">Фабрика кожизделий</option>
                <option value="s9750124">Табаккомбинат</option>
                <option value="s9750123">МЖК</option>
                <option value="s9613602">Краснодар-1</option>

            </select>


        </div>
    );
};

export default Form;
