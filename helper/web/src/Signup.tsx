import * as React from "react";

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
                <div className='signupPrompt'>
                    <div>
                        Welcome to DiceRoller EX, please enter the following to signup:
                    </div>
                    <div className=
                </div>
            )
        }
    }
}