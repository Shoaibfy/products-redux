import React, { Component } from 'react'
import TransactionForm from './TransactionForm'

class TransactionList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: this.returnList()
        }
    }

    returnList = () => {
        if (localStorage.getItem('transactions') == null)
            localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    onAddorEdit = (data) => {
        var list = this.returnList();
        list.push(data)
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <div>
                <TransactionForm onAddorEdit={this.onAddorEdit} />
                <hr></hr>
                <b> List of Transactions </b>
                <table>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td> {item.name} </td>
                                <td> {item.naccountNo} </td>
                                <td> {item.ifsc} </td>
                                <td> {item.amount} </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TransactionList
