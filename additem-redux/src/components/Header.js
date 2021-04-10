import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeFromCart } from '../Redux/Actions/actions'

class Header extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '1300px', padding: '10px', margin: '10px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>

                    <Card.Body>
                        <Card.Title variant='warning'> Buy Products Online </Card.Title>
                        <hr></hr>
                        <Button variant="primary"  >Many Happy Customers</Button>
                        <Button onClick={() => this.removeFromCartHandler({ age: 30 })}> {this.props.age} </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => (
    { cartData: state.cartItems.cartData },
    { age: state.cartItems.age })


const mapDispatchToProps = dispatch => ({
    removeFromCartHandler: data => dispatch(removeFromCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
