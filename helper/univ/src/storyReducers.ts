import * as _ from 'lodash';
import { any } from 'prop-types';

const initalState : State = {
    
}

export type State = {

};

export type StoryActionType = 'STORY_ACTION';

export type StoryAction = {
    type: StoryActionType,
    changes: {
        location: string,
        newValue: any
    }[]
};

export function storyReducer(prevState: State = initalState, action: StoryAction) {
    if(action.type !== 'STORY_ACTION') {
        throw new Error('action was not a story action ' + JSON.stringify(action));
    }
    action.changes.forEach((change) => {
        
    });

}