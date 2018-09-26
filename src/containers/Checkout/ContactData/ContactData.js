import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinners/Spinners'
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Raghvdm',
        address: {
          street: 'solution analysts',
          zipCode: '123123',
          country: 'India'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(res => {
        console.log(res);
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err)
        this.setState({ loading: false });
      });
  }

  render() {
    let form = (
      <form>
        <input type="text" name="name" className={classes.Input} placeholder="Your Name" />
        <input type="email" name="name" className={classes.Input} placeholder="Your Email" />
        <input type="text" name="name" className={classes.Input} placeholder="Street" />
        <input type="text" name="name" className={classes.Input} placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;