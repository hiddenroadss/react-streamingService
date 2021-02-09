import streams from '../apis/streams';
import { 
    SIGN_IN,
    SIGN_OUT,
    STREAM_CREATE,
    STREAM_UPDATE,
    STREAM_DELETE,
    FETCH_STREAMS,
    FETCH_STREAM } from './types';
import history from '../history';


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const streamCreate = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});
    dispatch({type: STREAM_CREATE, payload: response.data});
    history.push('/');
};

export const streamUpdate = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({type: STREAM_UPDATE, payload: response.data});
    history.push('/');
};

export const streamDelete = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({type: STREAM_DELETE, payload: id});
    history.push('/');
};

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data});
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: response.data});
    
};