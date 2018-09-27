import * as React from "react";
import {appStatus} from "./AppRoot";
import * as _ from "lodash";
import '../styles/gameSelect.css';
interface Game {
    id: string,
    owner: string,
    players: string[],
    name: string
}

export class GameSelect extends React.Component {
    constructor(props: any) {
        super(props);
    }
    props: {
        onChangeStatus: (newState: appStatus) => void
        username: string,
        token: string
    }
    render() {
        var games : Game[] = [
            {
                id: '1',
                owner: 'shockfist',
                players: ['blake','trevor','colby'],
                name: 'The Game'
            }
        ];
        var GameList : any[] = [];
        _.forEach(games, function (game: Game) {
            GameList.push(
                <div className='gameItem' data-gameId={game.id}>
                    <div className='gameName'>
                        {game.name}
                    </div>
                </div>
            )
        });
        return (
            <div></div>
        );
    }
} 