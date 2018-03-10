import {GET_DETAIL_INCOMING_ITEMS_SUCCESS} from "../utils/Constants";

const initialGetUserId = {
    status: false,
    status_get : false,
    data : ''
}

export function redGetUserId(state = initialGetUserId, action){
    // console.log(action.type)
    switch (action.type){
        case 'GET_DETAIL_INCOMING_ITEMS_SUCCESS' :
            return {
                status:true,
                status_get: action.status_get,
                data : action.data
            };
        default : return state
    }
}