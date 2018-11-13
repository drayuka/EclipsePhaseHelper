import * as React from "react";
import '../styles/login.css';
import {Login} from './Login';
import {MainNavigation} from './MainNavigation';
import {InteractionsEdit} from './InteractionsEdit';
import {Signup} from './Signup';
import {NavBar} from './NavBar';

export type appStatus =
    'signup' |
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
    onLogin (newState: appStatus, username: string) {
        this.setState({
            status: newState,
            username: username
        })
    }
    onSignup (username: string) {
        this.setState({
            status: 'login',
        });
    }
    onEditRules (gameid: string) {
        this.setState({
            status: 'interactions',
            gameid: gameid
        })
    }
    setUser (username: string) {
        this.setState({
            username: username
        })
    }
    onNav (status: appStatus) {
        this.setState({
            status: status
        })
    }
    render() {
        var self = this;
        var username = this.state.username;
        var gameid = this.state.gameid;
        let current;

        if(this.state.status == 'login' || !username) {
            current = 
                <Login onLogin={this.onLogin.bind(this)}/>
        } else if (this.state.status == 'signup') {
            current = 
                <Signup onSignup={this.onSignup.bind(this)}/>
        }else if((this.state.status == 'gameSelect' || !gameid) && username) {
            current = 
                <MainNavigation onEditRules={this.onEditRules.bind(this)}
                            username={username}
                            />
        } else if(this.state.status == 'interactions' && gameid) {
            current = 
                <InteractionsEdit gameid={gameid}
                                    onFinish={this.changeState}/>
        }
        return <div>
            <NavBar username={username} onNav={this.onNav.bind(this)}></NavBar>
            <div className="contianer-fluid main">
                {current}
            </div>
            <footer className="container-fluid footer">
                content to come
            </footer>
        </div>
    }
}
