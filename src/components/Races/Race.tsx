import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export function Race(props: any) {
    
    const name = props.data.name;
    const type = props.data.type;
    const timing = props.data.timing;
    const reach = props.data.reach;
    const target = props.data.target;
    const cost = props.data.cost;
    const effect = props.data.effect;
    const reference = props.data.reference;
    return (
        <Card style={{ minWidth:'25rem', maxWidth:'50%'}}>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
            <ListGroup horizontal>
                <ListGroupItem style={{ 'width':'50%'}}><b>Timing: </b>{timing}</ListGroupItem>
                <ListGroupItem style={{ 'width':'50%'}}>Range: {reach}</ListGroupItem>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroupItem style={{ 'width':'50%'}}>Target: {target}</ListGroupItem>
                <ListGroupItem style={{ 'width':'50%'}}>Cost: {cost}</ListGroupItem>
            </ListGroup>
            <Card.Text>{effect}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">ref:{reference}</Card.Footer>
        </Card>
);
}