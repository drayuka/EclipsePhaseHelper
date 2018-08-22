import * as React from "react";
import '../styles/login.css';
import {Login} from './Login';
import {GameSelect} from './GameSelect';

export type appStatus =
    'login' | 
    'gameSelect' |
    'play' |
    'log' |
    'interactions' |
    'entities';

export class AppRoot extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = { 
            status: 'login' ,
            username: undefined,
            token: undefined
        };
    }
    state: {
        status: appStatus
        username: string | undefined,
        token: string | undefined
    };
    changeState (newState: appStatus) {
        this.setState({
            status: newState
        })
    }
    setUser (username: string, token: string) {
        this.setState({
            username: username,
            token: token
        })
    }
    render() {
        var self = this;
        var username = this.state.username;
        var token = this.state.token;

        if(this.state.status == 'login' || !username || !token) {
            return (
                <Login onChangeStatus={this.changeState.bind(this)}
                        setUser={this.setUser.bind(this)}/>
            )
        } else if(this.state.status == 'gameSelect') {
            return (
                <GameSelect onChangeStatus={this.changeState.bind(this)}
                            username={username}
                            token={token}/>
            )
        }
    }
}
