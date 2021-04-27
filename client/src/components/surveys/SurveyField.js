//SurveyField contains logic to render a single label and text input
import React from 'react'; //eslint-disable-line

const SurveyField =  ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px', fontSize: 12 }}>
                {touched && error}
            </div>
        </div>
    );
};

export default SurveyField;