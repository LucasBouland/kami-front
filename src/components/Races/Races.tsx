import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Race } from './Race'
import { Table } from 'antd';
import { ListFormat } from 'typescript';

export function Races() {
    let [races, setRaces] = useState([]);

    const columns = [
        {
            title:"Name",
            dataIndex: "name",
            key: 'name'
        },
        {
            title:"Type",
            dataIndex: "type",
            key: 'type'
        },
        {
            title:"Strength",
            dataIndex: "strength",
            key: 'strength'
        },
        {
            title:"Agility",
            dataIndex: "agility",
            key: 'agility'
        },
        {
            title:"Intellect",
            dataIndex: "intellect",
            key: 'intellect'
        },
        {
            title:"Will",
            dataIndex: "will",
            key: 'will'
        },
        {
            title:"Luck",
            dataIndex: "luck",
            key: 'luck'
        }
    ];

    const getTypes = (race: any) => {
        let r = ({
            id: race.id,
            key: race.id,
            name: race.name,
            racial_bonus: race.racial_bonus,
            type: '',
            strength: '',
            agility: '',
            intellect: '',
            will: '',
            luck: ''
        });
        // each race has 3 attributes style
        race.attributes.forEach((elt: any) => {
            r.type += elt.type + '\n';
            r.strength += elt.strength + '\n';
            r.agility += elt.agility + '\n';
            r.intellect += elt.intellect + '\n';
            r.will += elt.will + '\n';
            r.luck += elt.luck + '\n';
        });
        return r;
    }
    useEffect( () => {
        axios.get('http://kamibackend/race/')
        .then(res => {
            console.log(res);
            let racesExploded : any = [];
            res.data.forEach( (elt:any) => {
                racesExploded.push(getTypes(elt));
            });
            console.log("expl",racesExploded);
            /*const listRaces = res.data.map( (race: any) => 
                ({key: race.id,  name: race.name})              
            )*/
            setRaces(racesExploded);
        }).catch( error => {
            setRaces([]);
            console.log(error);
        });
    }, [])

    return (
           <Table style={{ whiteSpace: 'pre'}} columns={columns} dataSource={races} pagination={false}/> 
    );
}