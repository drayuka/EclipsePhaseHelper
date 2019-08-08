import * as React from 'react';
import {appStatus} from './root';

export class NavBar extends React.Component {
    constructor(props: any) {
        super(props);
    }
    props: {
        username: string | undefined
        onNav: (status: appStatus) => void
    }
    render () {
        let self = this;

        let userAccountNav;
        if(self.props.username) {
            userAccountNav = <div className='col'>
                <div>
                    {this.props.username}
                </div>
                <div className='btn-group'>
                    <button onClick={self.props.onNav.bind(self, 'account')} className='btn btn-primary'>
                        Account
                    </button>
                    <button onClick={self.props.onNav.bind(self,'logout')} className='btn btn-secondary'>
                        Logout
                    </button>
                </div>
            </div>
        } else {
            userAccountNav = <div className='col btn-group' role='group'>
                <button onClick={self.props.onNav.bind(self,'signup')} className='btn btn-primary'>
                    Signup
                </button>
                <button onClick={self.props.onNav.bind(self, 'login')} className='btn btn-secondary'>
                    Login
                </button>
            </div>
        }

        // TODO: change this so that games and rulesets are autopopulated and that their links navigate to them

        let games = <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Fart Patrol Alpha</a>
            <a className="dropdown-item" href="#">Sunday Game</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Eclipse Phase Game</a>
        </div>;

        let rulesets = <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Pathfinder</a>
            <a className="dropdown-item" href="#">D&D 5e</a>
            <a className="dropdown-item" href="#">Eclipse Phase</a>
        </div>;



        return <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className='navbar-brand'>
                <img src="static/vial.jpg"></img>
                Dice Roller EX
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Games
                    </a>
                    {games}
                </li>
                <li className="nav-itme dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Rulesets
                    </a>
                    {rulesets}
                </li>
                </ul>
                {userAccountNav}
            </div>
        </header>

    }
}