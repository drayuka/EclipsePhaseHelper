import * as React from "react";
import {appStatus} from "../root";
import {SelectedGame} from './selected';
import * as _ from "lodash";
import '../styles/gameSelect.css';
import { any } from "prop-types";
import { Game } from '../../../univ/types';



interface Ruleset {
    id: string,
    owner: string,
    name: string,
    custom: boolean,
    creator: string,
    rules: string[],
}

var fakeGames : Game[] = [
    {
        id: '1',
        owner: 'shockfist',
        players: ['blake','trevor','colby'],
        name: 'The Game',
        rulesetid: '2',
        rulesName: 'D&D fifth edition',
        state: {
            curState: {},
            prevStates: [],
            log: []
        }
    },
    {
        id: '2',
        owner: 'shockfist',
        players: ['blake'],
        name: 'The Other Game',
        rulesetid: '1',
        rulesName: 'Eclipse Phase',
        state: {
            curState: {},
            prevStates: [],
            log: []
        }
    }
];
var fakeRulesets : Ruleset[] = [
    {
        id: '1',
        owner: 'shockfist',
        name: 'Eclipse Phase',
        rules: [],
        custom: true,
        creator: 'shockfist'
    },
    {
        id: '2',
        owner: 'shockfist',
        name: 'D&D fifth edition',
        rules: [],
        custom: true,
        creator: 'shockfist',
    }
];

export class GamesList extends React.Component {
    state: {
        selectedGame: Game
    }
    constructor(props: any) {
        super(props);
    }
    props: {
        onPlayGame: (gameid: string) => void
        username: string
    }
    playGame (e: React.FormEvent, gameid: string) {
        this.props.onPlayGame(gameid);
    }
    gameSelect (e: React.FormEvent, game: Game) {
        var self = this;
        self.setState({selectedGame: game});
    }
    render() {
        var self = this;

        var gameList : any[] = [];
        var rulesetList : any[] = [];
        fakeGames.forEach(function (game: Game) {
            let players = game.players.join(' ');
            gameList.push(
                <div className='game-item' data-gameid={game.id} key={game.id} onClick={self.playGame.bind(self, game)}>
                    <dt className='game-name'>
                        {game.name}
                    </dt>
                    <dd className='game-master'>
                        <span>Game Master: </span>
                        {game.owner}
                    </dd>
                    <dd className='players'>
                        <span>Players: </span>
                        {players}
                    </dd>
                </div>
            );
        });
        return (
            <div className='main'>    
                <div className='leftNav'>
                    <div className='leftNavOptions'>
                        <div className='createNewGame button'>
                            Create New Game
                        </div>
                        <div className='deleteGame button'>
                            Delete Selected Game
                        </div>
                    </div>        
                    <div className='leftNavList'>{gameList}</div>
                </div>
                <SelectedGame game={self.state.selectedGame}></SelectedGame>
            </div>
        );
    }
} 