import React, { Component } from "react";
import styles from "./AddCustomer.module.css";
import PropTypes from "prop-types";
import { addCustomer as addCustomerAction } from "../../../redux/actions/customerAction";
import { connect } from "react-redux";
import shortid from "shortid";

const AddCustomer = (props) => {
  const [customer, setNewCustomer] = useState({
    customerType: "",
    email: "",
    buildings: "",
    fiscal_address: "",
  });

  const onChange = (e) =>
    setNewCustomer({ ...customer, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addCustomer(customer);

    setNewCustomer({
      customerType: "",
      email: "",
      buildings: "",
      fiscal_address: "",
    });
  };

  return (
    <>
      <form className={styles.addForm} onSubmit={onSubmit}>
        <input
          className={styles.inputStyle}
          type="text"
          name="customerType"
          placeholder="Particular or Business"
          defaultValue={customer.customerType}
          onChange={onChange}
          required
        />
        <input
          className={styles.inputStyle}
          type="email"
          name="email"
          placeholder="ramiro@hotmail.com"
          defaultValue={customer.email}
          onChange={onChange}
          required
        />

        <input
          className={styles.inputStyle}
          type="text"
          name="buildings"
          placeholder="Add how many buildings you have"
          defaultValue={customer.buildings}
          onChange={onChange}
          required
        />
        <input
          className={styles.inputStyle}
          type="text"
          name="fiscal_address"
          placeholder="Cordoba 2020"
          defaultValue={customer.fiscal_address}
          onChange={onChange}
          required
        />

        <input
          className={styles.btnSubmit}
          type="submit"
          value="Add new customer"
        />
      </form>
    </>
  );
};

AddCustomer.propTypes = {
  addCustomer: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCustomer: (content) => dispatch(addCustomerAction(content)),
  };
};

const mapStateToProps = (state) => {
  return {
    customer: state.customers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
