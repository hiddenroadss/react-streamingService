import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';


class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUser.userId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui primary button">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            );
        } else {
            return null;
        }
    }
    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                     {this.renderAdmin(stream)}
                    <i className="large camera middle aligned icon" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        })
    }

    renderCreate = () => {
        if (this.props.currentUser.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui primary button" style={{textAlign: 'right'}}>
                        Create Stream
                    </Link>
                </div>
               
            );
        }
    }
    render(){
        if (!this.props.streams) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Stream List</h3>
                <div className="ui relaxed divided list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams), currentUser: state.auth};
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);