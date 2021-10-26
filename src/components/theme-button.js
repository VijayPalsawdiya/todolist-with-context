import React,{Component} from 'react';
import { ThemeContext } from './theme-context';

class ThemeButton extends Component{
    debugger
    render(){
        let props = this.props;
        let theme = this.context;
        return(
            <button {...props} style={{backgroundColor: theme.background}}/>
        )
    }
}

ThemeButton.contextType = ThemeContext;

export default ThemeButton 