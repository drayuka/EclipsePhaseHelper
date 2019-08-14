import * as React from "react";
import { format } from "url";

type signupStatus = 'notSigned' | 'emailSent';

export class Signup extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            status: 'notSigned',
            username: '',
            emailAddress: ''
        }
    }
    state: {
        status: signupStatus,
        username: string,
        emailAddress: string
    }
    render () {
        var self = this;

        if(this.state.status == 'notSigned' || !this.state.username || !this.state.emailAddress) {
            return (
                <div className='container'>
                    <h1>
                        Welcome to DiceRoller EX, please enter the following to signup:
                    </h1>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='userInput'>Username</label>
                            <input type='text' className='form-control' id='userInput' aria-describedby='usernameHelp' placeholder='Enter Username'></input>
                            <small id='usernameHelp' className='form-text text-muted'>Username you'll use to login</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='emailInput'>Email address</label>
                            <input type='email' className='form-control' id='emailInput' aria-describedby='emailHelp' placeholder='Enter Email'></input>
                            <small id='emailHelp' className='form-text text-muted'>We will never share your email address with anyone else.</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='passwordInput'>Password</label>
                            <input type='password' className='form-control' id='passwordInput' aria-describedby='passwordHelp' placeholder='Password'></input>
                            <small id='passwordHelp' className='form-text text-muted'>must be at least 5 characters</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='userInput'>Re-enter Password</label>
                            <input type='text' className='form-control' id='userInput' placeholder='Password'></input>
                        </div>
                    </form>
                </div>
            )
        }
    }
}