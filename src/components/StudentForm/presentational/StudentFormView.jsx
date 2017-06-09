import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {ButtonView as Button} from '../../Button';


const StudentFormView = ({ showForm, error2, handleSubmit, pristine, submitting }) => {

const errorMessage = () => (
  <div className="errorMessage">
    <h4>Ooops, something went wrong... </h4>
    <p> {error2.toString()} </p>
  </div>
);

const successMessage = (
  <div className="successMessage">
    <h3 className="subTitle">Thank you!</h3>
  </div>
);

const message = () => (
  successMessage
);

// Lägg till required i varje field
const required = value => value ? undefined : 'Required'

return (
  <div>
    {
      showForm ? (
        <div className="formClass">
          <form onSubmit={handleSubmit} className="form studentForm">
            <div className="formField">
              <Field
                className= "form-control"
                name="first_name"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="formField">
              <Field
                className= "form-control"
                name="last_name"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="formField">
              <Field
                className= "form-control"
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="formField">
              <Field
                className= "form-control"
                name="program"
                component="input"
                type="text"
                placeholder="Program"
              />
            </div>
            <div>
              <Button
                type="submit"
                disabled={pristine || submitting}
                styleType={'btn btn-default'}
                label="Sign up"
              />
            </div>
          </form>
        </div>
      ) : message()
    }
    {error2 == null ? null : errorMessage()}
  </div>
)};


StudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

StudentFormView.defaultProps = {
};

export default
  reduxForm({
    form: 'student', // a unique identifier for this form
  })(StudentFormView);
