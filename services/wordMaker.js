/* Will this service be called once for every word in the list submission?
Or will it be passed the whole array of words?
The latter.
So that means...
There will be one HTTP POST request. With one req and one res.
This here wordMaker will iterate through all the elements in, I dunno, req.body.words,
THEN send the response. But does that wordsController.js's "res"s are just discarded?
What about the ability to update the view to reflect each individual word getting saved?
Do I actually want after all to just make a separate HTTP request for each word, just so there's a separate "res"?
*/