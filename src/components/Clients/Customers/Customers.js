import React, { Component } from "react";
import Item from "../Item/Item";
import PropTypes from "prop-types";
import "./Customers.css";

class Customers extends Component {
  render() {
    return (
      <>
        <ul className="ulStyle">
          <li className="liStyleHeader">Id</li>
          <li className="liStyleHeader">Customer Type</li>
          <li className="liStyleHeader">Email</li>
          <li className="liStyleHeader">Buildings</li>
          <li className="liStyleHeader">Fiscal Address</li>
        </ul>

        {this.props.customers.map((customer, index) => (
          <Item
            key={index}
            customer={customer}
            delCustomer={this.props.delCustomer}
            editCustomer={this.props.editCustomer}
            updateCustomer={this.props.updateCustomer}
          />
        ))}
      </>
    );
  }
}

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
  delCustomer: PropTypes.array.isRequired,
  updateCustomer: PropTypes.array.isRequired,
  editCustomer: PropTypes.array.isRequired,
};

export default Customers;
