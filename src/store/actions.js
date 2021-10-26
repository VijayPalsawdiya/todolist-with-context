import * as actionTypes from './actionTypes';

export const inputValue=(value)=>{
    return{
        type: actionTypes.ENTER_VALUE,
        value: value
    }
}

export const addValue = (inptVal, editValue) => {
    return{
        type: actionTypes.CLICK_ADD,
        inputVal: inptVal,
        edtVal: editValue
    }
} 

export const editValue = (indx, editValue, textFieldValue) => {
    debugger
    return{
        type: actionTypes.CLICK_EDIT,
        indx: indx,
        edtVal: editValue,
        txtFldVal: textFieldValue
    }
}

export const deleteValue = (indx, inputValue, deleteVal, edtVal) => {
    return{
        type: actionTypes.CLICK_DELETE,
        indx: indx,
        inputVal: inputValue,
        deleteVal: deleteVal,
        edtVal: edtVal

    }
}

export const  addBolwerType = (value) => {
    return{
        type: actionTypes?.BOWLERS_TYPE,
        payload: value
    }
} 

export const addInningType = (value) => {
    return{
        type: actionTypes?.INNING_TYPE,
        payload: value 
    }
}

export const addWicketType = (value) => {
    return{
        type: actionTypes.WICKETS_TYPE,
        payload: value
    }
}


