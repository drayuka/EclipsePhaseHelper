import * as React from 'react';
import {appStatus} from './AppRoot';

export class InteractionsEdit extends React.Component {
    render () {
        return <div></div>
    }
    props: {
        gameid: string,
        onFinish: (newState: appStatus) => void
    }
}