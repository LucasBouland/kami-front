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
        const types: any = [];
        let r = ({
            id: null,
            name: race.name,
            racial_bonus: race.racial_bonus,
            type: null,
            strength: null,
            agility: null,
            intellect: null,
            will: null,
            luck: null
        });
        // each race has 3 attributes style
        race.attributes.forEach((elt: any) => {
            const n = {...r};
            n.id = elt.id;
            n.type = elt.type;
            n.strength = elt.strength;
            n.agility = elt.agility;
            n.intellect = elt.intellect;
            n.will = elt.will;
            n.luck = elt.luck;
            types.push(n);
        });
        return types;
    }
    useEffect( () => {
        axios.get('http://kamibackend/race/')
        .then(res => {
            console.log(res);
            let racesExploded : any = [];
            res.data.forEach( (elt:any) => {
                racesExploded = racesExploded.concat(getTypes(elt));
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
           <Table columns={columns} dataSource={races} pagination={false}/> 
    );
}