import React from 'react';
import { connect } from 'react-redux';

import { streamCreate } from '../../actions/index';
import StreamForm from './StreamForm';


class StreamCreate extends React.Component {
   

    onSubmit = (inputValues) => {
        this.props.streamCreate(inputValues);
        
    }
    render() {
        return (
            <div>
                <h3>Stream Create</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
           
        );
    }
}


export default connect(null, { streamCreate })(StreamCreate);