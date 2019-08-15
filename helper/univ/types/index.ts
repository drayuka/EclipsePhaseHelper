export interface Game {
    id: string,
    name: string,
    owner: string,
    players: string[],
    rulesetid: string,
    rulesName: string,
    state: {
        curState: any,
        prevStates: any[],
        log: Action[]
    }
}

export interface Action {
    id: string,
    changes: {
        context: string,
        value: any
    },
    description: string
}


export interface Ruleset {
    id: string,
    owner: string,
    name: string,
    custom: boolean,
    creator: string,
    rules: string[],
}
