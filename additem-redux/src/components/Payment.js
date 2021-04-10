import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';
import Header from './Header';

class Payment extends Component {
    render() {
        return (
            <div>
                <Header />
                <Card style={{ width: '18rem', padding: '10px', margin: '10px' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/1400x400/?sea,water" />
                    <Card.Body>
                        <Card.Title>Item Lists</Card.Title>
                        <Card.Text>
                            <b>  product Name :</b>  Episode -1
                     </Card.Text>
                        <Card.Text>
                            <b>Total Amount:</b>500$
                     </Card.Text>
                        <Card.Text>
                            <b>Address</b>
                            <p>Shoaib Ahmed</p>
                            <p>20/11,kurnool-518001</p>
                            <p>8099214545</p>
                        </Card.Text>

                        <hr></hr>
                        <Button variant="primary"  >Track Shipping</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Payment
