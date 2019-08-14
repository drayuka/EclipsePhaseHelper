# Eclipse Phase Helper
This is a side project to make running [Eclipse Phase](http://www.eclipsephase.com/) easier.

# Rationale

After playing around a bit with [Roll20](http://www.roll20.net) I realized that I wanted a more interactive tabletopping solution, I thought about other features I would add into a tabletop modeling system, given the chance:
* I wanted to add smart search features which would know the ruleset for you, no more exiting to google, search in the app.  As this would neccesarily run into difficulties with Intellectual Property,  and because I don't enjoy rigid tabletopping rule structures, part of my desire was to have a data powered rule system that was freely editable by (rule expert) users, (i.e. my friends).
* I wanted to have these rules perform actions on game data directly.  Rather than performing minor calculations and informing the users of the output of simple functions, (which is largely what roll20 does), I wanted a system that did the bookeeping for me.
* I wanted to have a ledger with these changes so that confusion during play (something that happens often) would allow easy rollback of changes, and would display all recent changes if human memory would not suffice.

These desires had a couple of downsides known from the outset:
* a specific game is only as robust (and helpful) as it's ruleset.
* carrying rulesets between games either requires versioning or golden masters or something of this nature, due to the liquidity of rules.
* Coding for ease of use in rule defintion could get complicated and time consuming as tabletop game designers occasionally have a penchant for one-off or overly complex interactions.

Even given these downsides, I set off to create this application so that I could enjoy playing this game with my friends, and to learn a bit more about web technologies that I had not been using at the time.

## Proposed features

* Ability to store interactions (rules) in an editable format
* players initate interactions directly by searching for related terms
* at any point players can opt out and edit game data directly if desired.
* interactions modify game data directly.
* all edits to game data (automated or otherwise) are stored to a ledger and can be rolled back on request.


## Technologies used
* react as a frontend framework
* typescript for type checking
* redis for data storage and pub/sub
* webpack for bundling
* express.js backend


## Future possible features
* ability to incorporate a grid system
* implement more than just Eclipse Phase rules and types.
* allow directly scripting rules in javascript for more complex or non-standard ruleset
