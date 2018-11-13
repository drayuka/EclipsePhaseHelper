import * as React from 'react';
import {appStatus} from './AppRoot';

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
                <button onClick={self.props.onNav.bind(self, 'account')} className='btn btn-primary'>
                    Account
                </button>
                <button onClick={self.props.onNav.bind(self,'logout')} className='btn btn-secondary'>
                    Logout
                </button>
            </div>
        } else {
            userAccountNav = <div className='col'>
                <button onClick={self.props.onNav.bind(self,'signup')} className='btn btn-primary'>
                    Signup
                </button>
                <button onClick={self.props.onNav.bind(self, 'login')} className='btn btn-secondary'>
                    Login
                </button>
            </div>
        }
        return <header className="container-fluid header">
            <div className='row justify-content-between'>
                <div className='col'>
                    <div className='header-icon'>
                        <img src="vial.jpg"></img>
                    </div>
                    <div className='header-nav'>
                        some navigation
                    </div>
                </div>
                {userAccountNav}
            </div>
        </header>

    }
}