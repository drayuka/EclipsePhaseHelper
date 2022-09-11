import * as React from 'react';
import {appStatus} from './root';

export class Login extends React.Component {
    componentDidMount() {
        if(this.state.usernameRef.current) {
            this.state.usernameRef.current.focus();
        }
    }
    render () {
        let self = this;
        return <form onSubmit={this.handleSubmit}>
            <h3>
            Welcome to Eclipse Phase Helper, please login:
            </h3>
            <div className='form-group'>
                <label htmlFor='username'>username</label>
                <input id='username' onChange={self.handleUserChange} ref={this.state.usernameRef} className='form-control' type='text'/>
            </div>
            <div className='form-group'> 
                <label htmlFor='password'>password</label>   
                <input id='password' onChange={self.handlePassChange} className='form-control' type='password'/>
            </div>
            <input type='submit' value='Login' className='btn btn-primary'/>
        </form>;
    }
    props: {
        onLogin: (newState: appStatus, username: string, token: string) => void,
    }
    state: {
        username: string,
        password: string,
        usernameRef: React.RefObject<HTMLInputElement>
    }
    constructor (props: any) {
        super(props);
        let ref = React.createRef<HTMLInputElement>();
        this.state = {
            username: '',
            password: '',
            usernameRef: ref
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }
    handleUserChange(e: React.ChangeEvent<HTMLInputElement>) {
        let self = this;
        this.setState({username: e.target.value});
    }
    handlePassChange(e: React.ChangeEvent<HTMLInputElement>) {
        let self = this;
        this.setState({password: e.target.value});
    }
    handleSubmit(e: React.FormEvent) {
        var self = this;
        console.log('attempted login with ' + this.state.username + ' and ' + this.state.password);
        //TODO: VERIFY UN/PW
        this.props.onLogin('gameSelect', this.state.username, 'tempToken');
        e.preventDefault();
    }
}