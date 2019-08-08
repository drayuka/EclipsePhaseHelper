import * as React from 'react';
import { Game } from '../../../univ/types';
import { LogDisplay } from './play/log'

export class SelectedGame extends React.Component {
    constructor(props: any) {
        super(props);
    }
    props: {
        game: Game
    }
    render() {
        var self = this;
        return <div className='mainViewRight'>
            <LogDisplay game={self.props.game}></LogDisplay>

        </div>
    }
}