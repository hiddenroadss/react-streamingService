import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import StreamForm from './StreamForm';
import { streamUpdate, fetchStream } from '../../actions';


const StreamEdit = (props) => {
    const streamId = props.match.params.id;
    useEffect(() => {
        props.fetchStream(streamId);
    }, [])
    const onSubmit = (formValues) => {
        props.streamUpdate(streamId, formValues);
    }
    return (
        <div>
            <h3>Edit Stream</h3>
            <StreamForm onSubmit={onSubmit} initialValues={_.pick(props.stream, 'title', 'description')} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { streamUpdate, fetchStream })(StreamEdit);