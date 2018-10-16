# Eclipse Phase Helper
This is a side project to make running [Eclipse Phase](http://www.eclipsephase.com/) easier.

# Rationale

After playing around a bit with [Roll20](http://www.roll20.net) I realized that I wanted a more interactive tabletopping solution, I thought about other features I would add into a game, given the chance:
* I wanted to add smart search features which would know the ruleset for you, no more exiting to google, search in the app.  As this would neccesarily run into difficulties with Intellectual Property,  and because I don't enjoy rigid tabletopping rule structures, part of my desire was to have a data powered rule system that was freely editable by (rule expert) users, (i.e. my friends).
* I wanted to have these rules perform actions on game data directly, rather than performing minor calculations and informing the users of the output of simple functions, so that they could make the neccesary changes to game data, which is largely what roll20 does.
* I wanted to have a ledger with these changes so that confusion during play (something that happens often) could be backtracked easily if desired. I.E. bob says he attacks the elf, like his friends, but the GM realizes that the elf has been dead for the last 3 turns.  With this system it should be a simple task to roll game data back to the point the GM realizes the elf was dead, and re-start play from there.

These desires had a couple of downsides known from the outset:
* a specific game is only as robust (and helpful) as it's ruleset.
* coding for ease of use in rule defintion (called interactions in the codebase) means writing code which realizes the numerous ways in which rulesets can interact with gamedata. This may neccestiate writing some sort of DSL down the line, but this should be avoided if at all possible, for ease of use reasons.

Even given these downsides, I set off to create this application so that I could enjoy playing this game with my friends, and to learn a bit more about web technologies that I had not been using at the time.

## Proposed features

* Ability to store interactions (rules) in an editable format
* players initate interactions directly by searching for related terms
* at any point players can opt out and edit game data directly if desired
* interactions modify game data directly (i.e. button press which performs an attack by bob lowers elf's health in the game data by 5 points, rather than just posting that information in a channel somewhere, and leaving this up to the players).
* all edits to game data (automated or otherwise) are stored to a ledger and can be rolled back on request.


## Technologies used
* react as a frontend framework
* typescript for type checking
* redis for data storage and pub/sub
* webpack for bundling
* (nominal) totaljs backend


## Future possible features
* ability to incorporate a grid system
* implement more than just Eclipse Phase rules and types.
