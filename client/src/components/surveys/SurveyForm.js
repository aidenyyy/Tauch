import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import _ from 'lodash';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(
            formFields, 
            ({ label, name }) => {
                return (
                    <Field component={SurveyField} type="text" label={label} name={name} key={name}/>
                );
            }
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields() }
                    <Link to="/surveys" className="teal lighten-1 btn-flat white-text">
                        CANCEL
                    </Link>
                    <button type="submit" className="teal lighten-1 btn-flat right white-text">
                        SUBMIT
                    </button>
                </form>
            </div>
        );
    }
}

//Param: values: Object {title, subject, body, emails}
function validate(values) {
    //Form is valid if returned errors is empty
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(
        formFields,
        ({ name }) => {
            if(!values[name]) {
                errors[name] = 'This field cannot be empty';
            }
        }
    );

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    //Keep entries after coming back from survey review.
    destroyOnUnmount: false
})(SurveyForm);