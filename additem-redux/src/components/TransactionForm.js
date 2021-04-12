import React, { Component } from 'react'

class TransactionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            accountNo: '',
            ifsc: '',
            amount: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddorEdit(this.state)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete='off'>
                <input name='name' placeholder='name..' value={this.state.name} onChange={this.handleChange} />
                <input name='accountNo' placeholder='accountNoA/C..' value={this.state.accountNo} onChange={this.handleChange} />
                <input name='ifsc' placeholder='ifscNo..' value={this.state.ifsc} onChange={this.handleChange} />
                <input name='amount' placeholder='amount..' value={this.state.amount} onChange={this.handleChange} />
                <button type='submit' >Submit</button>
            </form>
        )
    }
}


export default TransactionForm
