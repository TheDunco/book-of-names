# payload-character-sheet

This project was created using create-payload-app using the blank template.

This project is meant to use Payload CMS to provide a database (using Mongo), API, and admin UI, and authentication/user role system for managing characters, campagins, and more for various TTRPGs (tabletop role playing games).

# The Real Purpose

I wanted to be able to support any and many frontends for different types of character sheets and campaigns and such, so this is meant to build one unified API for all of them.
This way, I or anywone can use the API to build a frontend in whatever manner they like!

I plan to use Svelte to build the 5e character sheet, and potentially the Kids on Brooms character sheet and One D&D sheet in the future.

# Things to Do

In no particular order...
- [ ] Add Advanced 5e Character sheet support
- [x] Figure out sign up
- [ ] Work on more granular and fine tuned access control
- [ ] Develop 5e frontend
- [ ] Develop KoB frontend
- [ ] Make and expose API methods for common operations such as taking damage/healing, leveling up, etc. that do the required calculatinos for you.
- [x] Figure out how to get this up and running on Railway (not sure why it's not working but I keep getting a 503 error).
- [ ] Add initiative/turn order to campaigns
- [ ] Add status effects/active effects
- [ ] (5e) Add system for keeping track of things you have advantage/disadvantage on
- [ ] (5e) Add personality traits, ideals, bonds, flaws to character description
- [ ] Convert to turporepo monorepo
- [ ] Figure out a way to do modular things in the FE
- [X] Design FE in Figma
- [ ] Add Quests: NSD

## Design Prototype


https://user-images.githubusercontent.com/44826828/225926588-bac7220d-1802-4d76-85fc-9f9488717e45.mov



## How to Use

`npm run dev` will start up your application and reload on any changes.
