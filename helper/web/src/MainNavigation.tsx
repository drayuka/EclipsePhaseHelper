import * as React from "react";
import {appStatus} from "./AppRoot";
import * as _ from "lodash";
import '../styles/gameSelect.css';
interface Game {
    id: string,
    owner: string,
    players: string[],
    name: string,
    rulesetid: string,
    rulesName: string
}
interface Ruleset {
    id: string,
    owner: string,
    name: string
}

export class MainNavigation extends React.Component {
    constructor(props: any) {
        super(props);
    }
    props: {
        onEditRules: (gameid: string) => void
        username: string,
        token: string
    }
    editRules (e: React.FormEvent, gameid: string) {
        this.props.onEditRules(gameid);
    }
    render() {
        var self = this;
        var games : Game[] = [
            {
                id: '1',
                owner: 'shockfist',
                players: ['blake','trevor','colby'],
                name: 'The Game',
                rulesetid: '1',
                rulesName: 'Eclipse Phase'
            }
        ];
        var rulesets : Ruleset[] = [
            {
                id: '1',
                owner: 'shockfist',
                name: 'Eclipse Phase'
            }
        ]
        var GameList : any[] = [];
        var RulesetList : any[] = [];
        _.forEach(games, function (game: Game) {
            let players = game.players.join(' ');
            GameList.push(
                <div className='gameItem' data-gameid={game.id} key={game.id}>
                    <dt className='gameName'>
                        {game.name}
                    </dt>
                    <dd className='gamemmaster'>
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
        _.forEach(rulesets, function (ruleset: Ruleset) {
            RulesetList.push(
                <div className='rulesetItme' data-rulesetid={ruleset.id} key={ruleset.id}>
                    <dt className='RulesetName'>
                        {ruleset.name}
                    </dt>
                    <dd className='rulesetCreator'>
                        <span>Ruleset Creator:</span> {ruleset.owner}
                    </dd>
                </div> 
            )
        })
        return (
            <div>
                <div className='topNav'>
                    <div className='createRules button'>
                        Create Ruleset
                    </div>
                    <div className='deleteRules button'>
                        Delete Ruleset
                    </div>
                    <div className='createNewGame button'>
                        Create New Game
                    </div>
                    <div className='deleteGame button'>
                        Delete Selected Game
                    </div>
                </div>
                <dl>{RulesetList}</dl>                
                <dl>{GameList}</dl>
            </div>
        );
    }
} 