import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postlCode: ''
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" className={classes.Input} placeholder="Your Name" />
          <input type="email" name="name" className={classes.Input} placeholder="Your Email" />
          <input type="text" name="name" className={classes.Input} placeholder="Street" />
          <input type="text" name="name" className={classes.Input} placeholder="Postal Code" />
          <Button btyType="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;