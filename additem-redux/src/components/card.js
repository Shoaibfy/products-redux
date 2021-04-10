import { connect } from 'react-redux'
import { addToCart } from '../Redux/Actions/actions'

import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <p>Select items from list</p>
                <input type='text' placeholder='Search...' className='m-5' value={this.state.text} onChange={this.inputValue} />
                <div >

                    {this.state.persons.filter((val) => {
                        if (this.state.text === "") {
                            return val
                        } else if (val.name.toLowerCase().includes(this.state.text.toLowerCase())) {
                            return val
                        }
                    }).map((persons, id) =>

                        <div className='fluid-container'>
                            <div className='row'>
                                <div className='col-md-3 m-2'  >
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
                                <div className='col-md-3 m-2' key={id} >
                                    <Card style={{ width: '18rem' }} key={id}  >
                                        <Card.Img variant="top" src="https://source.unsplash.com/1400x400/?sea,fish" />
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
                                <div className='col-md-3 m-2' key={id} >
                                    <Card style={{ width: '18rem' }} key={id}  >
                                        <Card.Img variant="top" src="https://source.unsplash.com/1400x400/?sea,tree" />
                                        <Card.Body>
                                            <Card.Title>{id + 1}  {persons.name}</Card.Title>
                                            <Card.Text>
                                                {persons.address.street}, {persons.address.suite}
                                                {persons.address.zipcode}
                                            </Card.Text>
                                            <Link to='/details' >  <Button variant="primary"  >Add to cart</Button>  </Link>
                                            <Button variant='dark' onClick={() => this.props.addToCartHandler({ price: 1000, name: 'iphone', users: 100 })} >Redux Button</Button>
                                            <Button>     {this.props.cartData.name}</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>


        )
    }
}

const mapStateToProps = state => ({
    cartData: state.cartItems.cartData

})


const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(CardItem)
