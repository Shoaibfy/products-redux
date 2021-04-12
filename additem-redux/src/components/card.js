
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { Button, Card, } from 'react-bootstrap';



import Header from './Header';

class CardItem extends Component {
    constructor(props) {
        super(props)
        console.warn('card data', this.props.data)
        this.state = {
            persons: [],
            text: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.setState({
                persons: res.data
            }))

    }

    inputValue = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Header />
                <p>Enter item, to select from the below list</p>
                <input type='text' placeholder='Enter item name...' className='m-5' value={this.state.text} onChange={this.inputValue} />
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, flexWrap: 'wrap' }}>

                    {this.state.persons.filter((val) => {
                        if (this.state.text === "") {
                            return val
                        } else if (val.name.toLowerCase().includes(this.state.text.toLowerCase())) {
                            return val
                        }
                    }).map((persons, id) =>


                        <div style={{ width: '30%', marginRight: 20, marginLeft: 20, marginBottom: 10 }}>
                            <Card style={{ width: '18rem' }} key={id}  >
                                <Card.Img variant="top" src="https://source.unsplash.com/1400x400/?sea,water" />
                                <Card.Body>
                                    <Card.Title>{id + 1}  {persons.name}</Card.Title>
                                    <Card.Text>
                                        {persons.address.street}, {persons.address.suite}
                                        {persons.address.zipcode}
                                    </Card.Text>
                                    <Link to='/details' >  <Button variant="primary"  >Add to cart</Button>  </Link>


                                </Card.Body>
                            </Card>

                        </div>


                    )}

                </div>
            </div>


        )
    }
}



export default CardItem;