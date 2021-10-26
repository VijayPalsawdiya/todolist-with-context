import * as action from '../store/actions'
export const mapStateToProps = (state) => {
    return {
      inputVal: state.inputValue,
      isEdit: state.isEdit,
      isDelete: state.isDelete,
      todoList: state.todoList,
      arrIndex: state.arrIndex,
      inningTypeDetails: state.inningTypeData,
      bowlersTypeDetails: state.bowlersTypeData,
      wicketsTypesDetails: state.wicketsTypesData
    }
  }
  
export const mapDispatchToProps = (dispatch) => {
    return {
      onInputChange: (value) => dispatch(action.inputValue(value)),
      onClickAdd: (inputVal, edtVal) => dispatch(action.addValue(inputVal, edtVal)),
      // onClickEdit: (inputVal, edtVal) => dispatch(action.editValue(inputVal, edtVal)),
      onClickEdit: (indx, edtVal) => dispatch(action.editValue(indx, edtVal)),
      // onClickDelete: (inputVal, deleteVal, edtVal) => dispatch(action.deleteValue(inputVal, deleteVal, edtVal))
      onClickDelete: (indx, inputVal, deleteVal, edtVal) => dispatch(action.deleteValue(indx, inputVal, deleteVal, edtVal)),
      onAddBolwerType: (value)=> dispatch(action.addBolwerType(value)),
      onAddInningType: (value) => dispatch(action.addInningType (value)),
      onAddWicketType: (value) => dispatch(action.addWicketType(value)) 
    }
  }