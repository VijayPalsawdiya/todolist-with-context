import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from './store/actions'

// import  Route  from 'react-router';
import TodoEnter from './components/todoEnter';
import {CallBack} from './components/todoEnter';
import {createStore} from './store/contextStore';



function App(props) {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Route exact path='/' component={CallBack}/>
        <Route exact path='/todoApp' component={TodoEnter}/>
      </BrowserRouter>   */}
      <TodoEnter />
    </div>
  );
}

export default createStore(App);


// import React,{Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import TodoEnter from './components/todoEnter';
// import {createStore} from './store/contextStore';
// import {ThemeContext, themes} from './components/theme-context';
// import ThemeButton from './components/theme-button';

// function Toolbar(props){
//   debugger
//   return(
//     <ThemeButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemeButton>
//   )
// }

// class App extends Component{
  
//   constructor(props){
//     super(props);
//     this.state = {
//       theme: themes.light
//     };
//     this.toggleTheme = () => {
//       debugger
//       this.setState(state => ({
//         theme: state.theme === themes.dark ? themes.light : themes.dark
//       }))
//     }
//   }
//   render(){
//     return(
//       <div className="App">
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme}/>
//         </ThemeContext.Provider> 
//         <ThemeButton /> 
//       {/* <TodoEnter /> */}
//     </div>
//     )
//   }
//   // return (
//   //   <div className="App">
//   //     <Toolbar />
//   //     {/* <TodoEnter /> */}
//   //   </div>
//   // );
// }

// export default App;
// // export default createStore(App);

