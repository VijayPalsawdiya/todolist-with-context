import React, {Component} from 'react';
import { withStore } from '../store/contextStore';

class TestContext extends Component{
    render(){
        return(
            <h1>{this.props.store.todoSubjects}</h1>
        )
    }
}

export default withStore(TestContext)
