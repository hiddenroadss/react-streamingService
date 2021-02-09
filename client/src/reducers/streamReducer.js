import _ from 'lodash';

import { FETCH_STREAMS, FETCH_STREAM, STREAM_CREATE, STREAM_UPDATE, STREAM_DELETE  } from '../actions/types';


const streamReducer = (state={}, action) => {
    switch (action.type) {
        case STREAM_CREATE:
            return {...state, [action.payload.id]: action.payload };
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case STREAM_UPDATE:
            return {...state, [action.payload.id]: action.payload};
        case STREAM_DELETE:
            return {..._.omit(state, action.payload)}
        default:
            return state;
    }
}

export default streamReducer;