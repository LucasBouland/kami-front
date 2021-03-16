import React, { CSSProperties } from 'react';
import { Card } from 'antd';
export function Talent(props : any) {
    
    const name = props.data.name;
    const type = props.data.type;
    const timing = props.data.timing;
    const reach = props.data.reach;
    const target = props.data.target;
    const cost = props.data.cost;
    const effect = props.data.effect;
    const reference = props.data.reference;
    const gridStyle : CSSProperties = {
        width: '50%',
        textAlign: 'center',
      };
    const bold : CSSProperties = {
        fontWeight: 'bold' 
    }
    return (
        <Card title={name}>
            <Card.Grid style={gridStyle}>
                <span style={bold}>Timing: </span><span>{timing}</span>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <span style={bold}>Range: </span><span> {reach}</span>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <span style={bold}>Target: </span><span>{target}</span>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <span style={bold}>Cost: </span><span>{cost}</span>
            </Card.Grid>
                {effect}
        </Card>
);
}