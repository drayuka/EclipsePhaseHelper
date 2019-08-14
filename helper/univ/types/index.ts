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