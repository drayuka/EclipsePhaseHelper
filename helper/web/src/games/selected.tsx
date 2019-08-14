import * as React from 'react';
import { Game } from '../../../univ/types';
import { LogDisplay } from '../play/log'

export class SelectedGame extends React.Component {
    constructor(props: any) {
        super(props);
    }
    props: {
        game: Game,
        playGame: (gameId: string) => void
    }
    playGame(e: Event) {
        let self = this;
        self.props.playGame(self.props.game.id);
    }
    render() {
        let self = this;
        let players = '';
        let playersList = <ul className='list-group'>
            {self.props.game.players.map((player) => {
                return <li className='list-group-item'>{player}</li>
            })}
        </ul>
        return <div className='col-8'>
            <h1>{self.props.game.name}</h1>
            {playersList}
            <LogDisplay game={self.props.game}></LogDisplay>
            <button type="button" className='btn btn-primary' onClick={self.playGame.bind(self)}>Play Game</button>
        </div>
    }
}