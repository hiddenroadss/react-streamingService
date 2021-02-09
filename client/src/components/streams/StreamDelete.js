import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

import Modal from '../Modal';
import { streamDelete, fetchStream } from '../../actions';
import history from '../../history';



const StreamDelete = (props) => {

    useEffect(() => {
        props.fetchStream(props.match.params.id);
    }, [])

    const renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => props.streamDelete(props.match.params.id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    const renderContent = () => {
        if (!props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete "${props.stream.title}"?`
    }
    if (!props.stream) {
        return <div>Loading...</div>
    }
    return (
            <Modal 
                title="Delete Stream"
                content={renderContent()}
                actions={renderActions()}
                onDismiss={() => history.push("/")}
            />
    );
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { streamDelete, fetchStream })(StreamDelete);