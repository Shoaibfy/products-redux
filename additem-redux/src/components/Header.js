import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '1300px', padding: '10px', margin: '10px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>

                    <Card.Body>
                        <Card.Title variant='warning'> Buy Products Online </Card.Title>
                        <hr></hr>
                        <Button variant="primary"  >Many Happy Customers</Button>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}


export default Header;
