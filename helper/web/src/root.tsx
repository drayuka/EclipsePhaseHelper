import * as React from "react";
import '../styles/login.css';
import {Login} from './login';
import {GamesList} from './games/list';
import {RuleSetsEdit} from './rules/edit';
import {Signup} from './signup';
import {NavBar} from './navigation';

export type appStatus =
    'signup' |
    'login' | 
    'play' |
    'gameSelect' |
    'ruleset';

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
    changeStatus (status: appStatus) {
        this.setState({
            status: status
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
            //no header or footer if you are logging in
            return <div>
                <div className="container-fluid main">
                    <Login onLogin={this.onLogin.bind(this)}/>
                </div>
            </div>
        } else if (this.state.status == 'signup') {
            current = 
                <Signup />
        }else if((this.state.status == 'gameSelect' || !gameid) && username) {
            current = 
                <GamesList onPlayGame={this.onEditRules.bind(this)}
                            username={username}
                            />
        } else if(this.state.status == 'ruleset' && gameid) {
            current = 
                <RuleSetsEdit gameid={gameid}
                                    onFinish={this.changeStatus}/>
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
