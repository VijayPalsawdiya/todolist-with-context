import { useCallback } from 'react';
import * as actionTypes from './actionTypes';
const initialState={
    inputValue : '',
    isDelete: false,
    isEdit: false,
    todoList: [],
    arrIndex:'',
    inningTypeData: [],
    bowlersTypeData: [],
    wicketsTypesData: []
}

const reducer = (state=initialState, action)=> {

    switch(action.type){
        case actionTypes.ENTER_VALUE:
            return{
                ...state,
                inputValue: action.value
            }
        case actionTypes.CLICK_ADD:
            if(action.inputVal !== '' && state.arrIndex !== ''){
                let newList = [...state.todoList]
                newList[state.arrIndex]= action.inputVal 
                return{
                    ...state,
                    inputValue: action.inputVal,
                    todoList: newList,
                    isEdit: action.edtVal
                }
            }
            if(action.inputVal !== ''){
                return{
                    ...state,
                    inputValue: action.inputVal,
                    todoList: [...state.todoList, action.inputVal],
                    isEdit: action.edtVal
                }
                
            }else{
                return{
                    ...state,
                    inputValue: action.inputVal,
                    isEdit: action.edtVal
                }
            }

        case actionTypes.CLICK_EDIT:
            let newList = [...state.todoList]
            if(action.txtFldVal){
                newList[state.arrIndex] = action.txtFldVal
                newList[action.indx]= ''
            }else{
                newList[action.indx]= ''
            }
            
            return{
                ...state,
                inputValue: state.todoList[action.indx],
                arrIndex: action.indx,
                todoList: newList,
                // isEdit: action.edtVal
            }
        case actionTypes.CLICK_DELETE:
            let newLst = [...state.todoList]
            newLst.splice(action.indx, 1)
            return{
                ...state,
                inputValue: action.inputVal,
                todoList: newLst,
                isDelete: action.deleteVal,
                // isEdit: action.edtVal
            }
        case actionTypes.INNING_TYPE:
            return{
                ...state,
                inningTypeData: [...state.inningTypeData, action.payload]
            }
        case actionTypes.BOWLERS_TYPE:
            return{
                ...state,
                bowlersTypeData: [...state.bowlersTypeData, action.payload]
            }
        case actionTypes.WICKETS_TYPE:
            return{
                ...state,
                wicketsTypesData: [...state.wicketsTypesData, action.payload]
            }    
        default: 
            return state    
    }
}


export default reducer