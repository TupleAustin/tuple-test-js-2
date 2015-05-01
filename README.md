

### Tuple JS Test

#### Purpose

This is Tuple Labs' abbreviated JavaScript test project `v2.0.2`. We use this test to provide a basic screening mechanism for JavaScript engineers, but chances are, if you're already taking this test, we simply intend to use it to have something to talk about when you come in and interview with us in person.

#### Expected Duration

The sweet spot for this exercise is two hours of focused work. Rarely is the two hours enough time to finish, so we use however far you got as a way to have a good conversation when you come in.  
If you find yourself going over 2 hours 30 minutes, you are taking too much time. Should you approach this length of time, simply clean up any pieces that are already complete, send your work over, note that you went over on time, and be prepared to talk about what you were able to complete when we see you on-site.   
You will not be penalized for completing only a subset of the requirements, if the completed portions function properly. The only people who finish are ones that heavily leverage the right kinds of libraries - you may try this approach, or show off more vanilla JS skills with the understanding that you may not finish in two hours.

#### Overall Requirements (or lack thereof)

- You do not need to write any kind of automated tests.
- Please make sure that any code you write works in the latest normal release of Chrome or Node.js
- Do not worry about other platforms or browsers given the time constraint.
- Do not use other people for your work.
- *Do* feel free to use any reference materials you want, Google, Stack Overflow...
- *Do* feed free to use any libraries or frameworks (Angular, jQuery, Express...)
- You may write in ECMA6 if you like, provided it is turned in transpiled or with a transpiler step for use with ECMA5 for browsers, or note that we should run Node code with the `--harmony` flag.
- You are not penalized for bad CSS styling. Horrible is fine. We do not expect this to be pretty at all, and it can look straight out of 1999 due to time constraints.
- Your code cleanliness *does* matter.
- Your markup must be valid, or at least be a reasonable, browser-interpretable superset of normal HTML (custom tags are fine, etc).
- The start script must be `node server` from the repository root (we did this already for you).
- The URL to view must be `localhost:8000` (we did this already for you).

#### The Project

We will be building a three view web application. It is a simple to-do list. You will use Node for the backend, and a single-page JavaScript front-end. It just needs to *work*, not look pretty.  
We have provided a very basic server that sends an empty HTML document with an empty script tag and empty CSS link to the front-end. Feel free to rewrite anything but the `fake_db` described below. You may inline all the front-end JS if you like, since you should not waste time making a static file server from scratch.

##### The Database

We wrote a *very* simple in-memory CRUD-able structure in Node to store these objects. Please treat the `fake_db` as a black box - do not modify anything within it. It is an intentionally custom object to ensure you can generally interface with black box structures.  
The documentation + sample usage for this module is [HERE](https://github.com/andrew-templeton/tuple-test-js-2/blob/master/seed.js), and the source is [HERE](https://github.com/andrew-templeton/tuple-test-js-2/blob/master/fake_db.js).  
This module transacts in plain JS object, so you do not need to waste time serializing and deserializing objects from Node<=>datastore.

##### The Business Objects

There is only one business object, the to-do. A to-do should have these properties...:
- `String name` *required*
- `Number|null due` *optional* (Perhaps use a "Unix ms since epoch" timestamp, from Date.now())
- `String|null description` *optional*

##### The Views

- List todos
  - Be able to sort by `name` or `due`, ascending or descending.
  - Be able to click an X or similar to delete a to-do
  - You do *not* need to show the `description` on this page.
  - You do *not* need to allow pagination.
- Create a todo
  - Require a name before creation.
  - After creation, I should be taken to the "view a to-do" page for the to-do.
- View a to-do
  - Be able to delete the to-do. This should return you to the list view. You do not need to ask for a confirmation.
  - Be able to update the to-do. Should stay on the same view and provide some sort of cue telling the user the update is done (or failed).
  - The description should be visible.
  - A "return to list view" button should be visible.

##### Other Requirements and Bonuses

Bonuses are just that - you will absolutely not be penalized if you choose to do none of the bonuses.

- The front-end should not need to page refresh for any action or navigation. *(required)*
- You do *not* need to create AJAX deep links, routing, or back-button behavior on the front-end (bonus points if you do). The page should begin at the list view otherwise.
- Lots of bonus points if you do this without any libraries/tools on the front-end, back-end, or both.
- If you have time, anything else you want to show off.


