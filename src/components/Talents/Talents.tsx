import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Talent} from './Talent'
import { Row, Col } from 'antd';

export function Talents() {
    let [talents, setTalents] = useState([]);
    useEffect( () => {
        axios.get('http://kamibackend/talent/')
        .then(res => {
            console.log(res);
            const listTalents= res.data.map( (talent : any) => 
                <Col  xs={24} xl={12} key={talent.id}><Talent key={talent.id} data={talent}/></Col>               
            )
            setTalents(listTalents);
        }).catch( error => {
            setTalents([]);
            console.log(error);
        });
    }, [])

    return (
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>{talents}</Row>
    );
}