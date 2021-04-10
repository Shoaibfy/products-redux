import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header';

class CardDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            price: 100,
            quantity: 1
        }
    }

    increaseQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    decreaseQuantity = () => {
        this.setState({
            quantity: this.state.quantity - 1
        })
    }


    render() {
        return (
            <div>
                <Header />
                <Card style={{ width: '18rem', padding: '10px', margin: '10px' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/1400x400/?sea,water" />
                    <Card.Body>
                        <Card.Title>Episode-1</Card.Title>
                        <Card.Text>
                            Price: <b> {this.state.price * this.state.quantity} $</b>
                        </Card.Text>
                        <Card.Text>
                            Total Quantity: <b> {this.state.quantity} </b>
                        </Card.Text>

                        <Link to='/card'>  <Button variant="danger"  >Remove</Button>  </Link>
                        <hr></hr>
                        <Button variant="dark" onClick={this.increaseQuantity}  >+</Button> <Link to='/pay'>  <Button variant="primary"  >Pay</Button>  </Link>    <Button variant="dark" onClick={this.decreaseQuantity}  >-</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CardDetails
