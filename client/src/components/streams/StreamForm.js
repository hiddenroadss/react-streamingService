import React from 'react';
import {Field, reduxForm} from 'redux-form';


class StreamForm extends React.Component {
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
            
        );
    }

    renderError = ({touched, error}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    {error}
                </div>
            );
        }
    }

    onSubmit = (inputValues) => {
        this.props.onSubmit(inputValues);
        
    }
    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter description"/>
                <button className="ui button">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter description';
    }
    return errors;
}

export default  reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
