import * as React from 'react';
import {appStatus} from './root';

export class Login extends React.Component {
    render () {
        return <div className='loginPrompt'>
            <div>
            Hello, please Login:
            </div>
            <div className='loginBlock'>
                <div>
                    username:
                    <input type='text' className='loginEntry' id='username' onKeyPress={this.handleKeyPress.bind(this)} onChange={this.handleUsernameChange.bind(this)}/>
                </div>
                <div> 
                    password:   
                    <input type='password' className='loginEntry' id='password' onKeyPress={this.handleKeyPress.bind(this)} onChange={this.handlePasswordChange.bind(this)}/>
                </div>
            </div>
            <div className='loginButton button' onSubmit={this.handleKeyPress.bind(this)}>
                Login
            </div>
        </div>;
    }
    props: {
        onLogin: (newState: appStatus, username: string, token: string) => void,
    }
    state: {
        username: string,
        password: string
    }
    constructor (props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    handleKeyPress(e: KeyboardEvent) {
        var self = this;
        if(e.key == 'Enter') {
            console.log('attempted login with ' + this.state.username + ' and ' + this.state.password);
            //TODO: VERIFY UN/PW
            this.props.onLogin('gameSelect', this.state.username, 'tempToken');
        }
    }
    handleUsernameChange(e: React.ChangeEvent) {
        var self = this;
        this.setState({
            username: (e.target as HTMLInputElement).value
        });
    }
    handlePasswordChange(e: React.ChangeEvent) {
        var self = this;
        this.setState({
            password: (e.target as HTMLInputElement).value
        })
    }
}