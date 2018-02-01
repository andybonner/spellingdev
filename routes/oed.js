// Route to fetch word data from external Oxford English Dictionary API

// 1. Client side submits a form containing word. Just a string. Just the word.
// 2. Data must be harvested from OED
// 3. Schema instance and DB entry are created and saved.

// server-side chain of events re words:
// 1. Client makes a PUT request to "/api/words"
// 2. All routing goes to routes/index.js.
// 3. Routes starting with "/api" proceed to routes/api/index.js
// 4. Routes with "/api/words" are sent to routes/api/words.js
// 5. Routes containing nothing further, and with HTTP action "PUT", invoke wordsController.create
// 6. wordsController.create invokes the "create" method of the model
// SO... 
// when do we call OED and add in the data--all data aside from the naked word?
// We know it's not on the client end, before the request is even sent, because OED doesn't accept client-side requests.
// wordsController.js is expecting a "req.query".
// Perhaps it should be intercepted during routes/api/words.js. Instead of calling wordsController right away, it can
// call the oed route, and then bundle up the resulting data to call wordsController and therefore the db.
// Should wordsController still refer to a req.body then? It should definitely still have a "res"...
// EUREKA!!
// 1. HTTP "PUT" request gets as far as routes/api/words.js. It then calls OED.
// 2. On OED's response, words.js makes a call of its own to ...no, wait.
// 1 again. It will just have to use a promise. words.js recieves the request...
// 2. It calls OED; on OED's response it ".then" calls wordsController.create(), passing the new data as an argument.
// 3. wordsController.create is a function, and first parameter is req, so as long as that data object has a "body" property, it should work...
// does it know where to send the response?
