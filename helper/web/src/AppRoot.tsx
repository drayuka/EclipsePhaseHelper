import * as React from "react";
import '../styles/login.css';
import {Login} from './Login';
import {MainNavigation} from './MainNavigation';
import {InteractionsEdit} from './InteractionsEdit';

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
            token: undefined,
            gameid: undefined
        };
    }
    state: {
        status: appStatus
        username: string | undefined,
        token: string | undefined,
        gameid: string | undefined
    };
    changeState (newState: appStatus) {
        this.setState({
            status: newState
        })
    }
    onLogin (newState: appStatus, username: string, token: string) {
        this.setState({
            status: newState,
            username: username,
            token: token
        })
    }
    onEditRules (gameid: string) {
        this.setState({
            status: 'interactions',
            gameid: gameid
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
        var gameid = this.state.gameid;

        if(this.state.status == 'login' || !username || !token) {
            return (
                <Login onLogin={this.onLogin.bind(this)}/>
            )
        } else if(this.state.status == 'gameSelect' || !gameid) {
            return (
                <MainNavigation onEditRules={this.onEditRules.bind(this)}
                            username={username}
                            token={token}/>
            )
        } else if(this.state.status == 'interactions' && gameid) {
            return (
                <InteractionsEdit gameid={gameid}
                                    onFinish={this.changeState}/>
            )
        }
    }
}
