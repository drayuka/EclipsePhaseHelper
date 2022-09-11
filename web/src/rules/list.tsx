import * as React from 'react';
import {appStatus} from '../root';

export class RuleSetsList extends React.Component {
    render () {
        var self = this;
        return <div>
            
        </div>
    }
    props: {
        gameid: string,
        onFinish: (newState: appStatus) => void
    }
}