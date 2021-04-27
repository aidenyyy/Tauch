import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import formFields from "./formFields";
import { withRouter} from "react-router-dom";
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields =_.map(
            formFields, 
            ({name, label}) => {
                return (
                    <div key={name}>
                        <label>{label}</label>
                        <div>
                            {formValues[name]}
                        </div>
                    </div>
                );
            }
        );


    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button 
                className="teal lighten-1 btn-flat white-text"
                onClick={onCancel}
            >
                BACK
            </button>
            <button
                onClick={() => submitSurvey(formValues, history)}
                className="teal lighten-1 right btn-flat white-text"
            >
                SEND
                <i className="material-icons right" style={{ marginLeft: '2px' }}>email</i>
            </button>
        </div> 
    );
};

function mapStateToProps(state) {
    
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));