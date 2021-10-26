import React, { Component, useCallback, useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import * as action from '../store/actions';
import {withStore} from '../store/contextStore';
import TestContext from './testContext';
// // import { mapStateToProps, mapDispatchToProps } from './mapStateDispatch';
// var todoList = []
// var arrIndex
// class TodoEnter extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // inputValue : '',
//       // isDelete: false,
//       // isEdit: false,
//       // arrIndex: '',
//       // todoList: []
//     }
//   }

//   onHandleChange = (event) => {
//     // this.setState({
//     //     [event.target.name]: event.target.value
//     // })
//     this.props.onInputChange(event.target.value)
//   }
//   onHandleAdd = () => {
//     if (!this.props.isEdit) {
//       // todoList.push(this.state.inputValue)

//       // this.setState(prevState => ({
//       //     todoList: [...prevState.todoList, this.state.inputValue]
//       // }))

//       this.props.onClickAdd(this.props.inputVal, false)
//     } else {
//       // todoList.forEach((val,indx) => {
//       //     return(todoList[indx] === '' ? todoList[indx] = this.state.inputValue : '')
//       // })
//       // todoList[arrIndex] = this.state.inputValue

//       // let newList = [...this.state.todoList]
//       // newList[this.state.arrIndex] = this.state.inputValue
//       // this.setState({todoList: newList})
//       this.props.onClickAdd(this.props.inputVal, false)
//     }
//     // this.setState({ inputValue: '', isEdit: false})
//     this.props.onClickAdd('', false)

//     // debugger
//     // if(!this.props.isEdit){
//     //     todoList.push(this.props.inputVal)
//     // }else{
//     //     todoList.forEach((val,indx) => {
//     //         return(todoList[indx] === '' ? todoList[indx] = this.props.inputVal : '')
//     //     })
//     // }
//     // this.props.onClickAdd('',false)    
//   }
//   onHandleEdit = (indx) => {
//     // this.setState({inputValue: this.state.todoList[indx]})
//     // let newList = [...this.state.todoList]
//     // newList[indx] = this.state.inputValue
//     // // todoList[indx] = this.state.inputValue
//     // this.setState({todoList:newList,  arrIndex: indx, isEdit: true})
//     this.props.onClickEdit(indx, true, this.props.inputVal)

//     // this.props.onClickEdit(todoList[indx], true)
//     // todoList[indx] = this.props.inputVal
//   }
//   onHandleDelete = (index) => {
//     // todoList.splice(index, 1)
//     // this.setState({isDelete: true})
//     // let newList = [...this.state.todoList]
//     // newList.splice(index, 1)
//     // this.setState({todoList: newList,inputValue: '', isDelete: true, isEdit: false})

//     this.props.onClickDelete(index, '', true, false)

//     // this.props.onClickDelete('',true,false)
//   }
//   render() {
//     // const {inputValue} = this.state
//     const inputValue = this.props.inputVal
//     return (
//       <div >
//         <input type="text" name="inputValue" value={inputValue} onChange={this.onHandleChange} placeholder="Enter value" />
//         <button type="submit" onClick={this.onHandleAdd}>Add</button>
//         <div>{this.props.todoList !== [] ? this.props.todoList.map((val, index) => {
//           return (
//             <p>{val} <button type="edit" disabled={this.props.isEdit} onClick={(event) => this.onHandleEdit(index)}>Edit</button><button type="delete" onClick={(event) => this.onHandleDelete(index)}>Delete</button></p>
//             // <p>{val} <button type="edit" disabled={this.state.isEdit} onClick={(event)=>this.onHandleEdit(index)}>Edit</button><button type="delete" onClick={(event) => this.onHandleDelete(index)}>Delete</button></p>
//           )
//         }) : null}
//         </div>
//       </div>

//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     inputVal: state.inputValue,
//     isEdit: state.isEdit,
//     isDelete: state.isDelete,
//     todoList: state.todoList,
//     arrIndex: state.arrIndex
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onInputChange: (value) => dispatch(action.inputValue(value)),
//     onClickAdd: (inputVal, edtVal) => dispatch(action.addValue(inputVal, edtVal)),
//     // onClickEdit: (inputVal, edtVal) => dispatch(action.editValue(inputVal, edtVal)),
//     onClickEdit: (indx, edtVal, val) => dispatch(action.editValue(indx, edtVal, val)),
//     // onClickDelete: (inputVal, deleteVal, edtVal) => dispatch(action.deleteValue(inputVal, deleteVal, edtVal))
//     onClickDelete: (indx, inputVal, deleteVal, edtVal) => dispatch(action.deleteValue(indx, inputVal, deleteVal, edtVal))
//   }
// }
// // export default TodoEnter;
// export default connect(mapStateToProps, mapDispatchToProps)(TodoEnter);

// ------------------------ByUsing Context------------------------
class TodoEnter extends Component {
  state = {
    todoData: [],
    dd: [],
    isEditClick: false
  }
  
  componentDidMount(){
    this.props.store.set('name', 'Todo App')
  }
  
  handleChange = (e) => {
    this.props.store.set('inputTodoSub', e.target.value)
    }

  handleSubmit = () => {
    if(this.state.isEditClick){
      let todoDataState = this.state.todoData
      todoDataState[this.props.store.todosIndex] = this.props.store.inputTodoSub
      this.props.store.set('todoSubjects', todoDataState)
      this.setState({isEditClick: false})
    }else{
      const inputVal = this.props.store.inputTodoSub
      let todoDataState = this.state.todoData
      todoDataState.push(inputVal)
      this.props.store.set('todoSubjects', todoDataState)
    }
    this.props.store.set('inputTodoSub', '')
  }

  handleEdit = (item, index) => {
    this.setState({isEditClick: true})
    this.props.store.set("inputTodoSub", item)
    this.props.store.set('todosIndex', index )
  }

  handleDelete = (index) => {
    let todoDataState = this.state.todoData
    todoDataState.splice(index, 1)
    this.props.store.set("todoSubjects", todoDataState)
    this.props.store.set('inputTodoSub', '')
    this.setState({isEditClick: false})
  }

  render(){
    return(
      <div>
        <h1>{this.props.store.name}</h1>
        <input type='text' value={this.props.store.inputTodoSub} placeholder="Enter Subject" onChange={(e)=> this.handleChange(e)} onKeyUp = {(e)=> e.keyCode === 13 && this.handleSubmit()} />
        <button onClick = {this.handleSubmit}>
          Add Sub
        </button>
        {this.props.store.todoSubjects && this.props.store.todoSubjects.map((item, index) => <div>{item}<button onClick={()=> this.handleEdit(item, index)}>Edit</button><button onClick={()=> this.handleDelete(index)}> Delete </button></div>)}
        <TestContext />
      </div>
    )
  }
}

export default withStore(TodoEnter)



// export function CallBack(){
//   const history = useHistory()
//   const [input, setInput] = useState('')
  
//   useEffect(() =>{
//     console.log("UsEffect")
//   }) 
  
//   const timeSlotOne = {
//     "Morning":{
//      key:"Morning",
//      start:"12:00:00 ",
//      end:"02:00:00"},
//    "Night":{
//      key:"Night",
//      start:"06:00:00",
//      end:"09:00:00"
//    }
//    }
//    var list=[{
//      start:"12:00:00",
//      end:"02:00:00"
//    },{
//      start:"12:00:00",
//      end:"02:00:00"
//    },{
//      start:"06:00:00",
//      end:"09:00:00"
//    }]
   
//    let morning = list.filter((item) =>{ return (item.start.includes(timeSlotOne.Morning.start) && item.end.includes(timeSlotOne.Morning.end))})
//    let nigth = list.filter((item) => {return item.start.includes(timeSlotOne.Night.start)  && item.end.includes(timeSlotOne.Night.end)})
   
   
//    //[{morning:[], nigtht:[]}]
//   //  console.log("Morning----", morning)
//   //  console.log("Nigth----",nigth)
  
  
//   return(
//     <div>
//       <h1>Input Field</h1>
//       <input type='text' onChange={(e)=>setInput(e.target.value)}/>
//       <button onClick={()=> {history.push('/todoApp')}}>Navigate</button>
//       <div>
//         <iframe src="/pageview.html">
//           <a onclick="javascript:window.parent.location.href='http://www.google.com'; return false;">lincfsdfdsfk</a>
//         </iframe>
//       </div>
//     </div>
//   )
// }

