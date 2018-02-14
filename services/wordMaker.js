/* Will this service be called once for every word in the list submission?
Or will it be passed the whole array of words?
The latter.
So that means...
There will be one HTTP POST request. With one req and one res.
This here wordMaker will iterate through all the elements in, I dunno, req.body.words,
THEN send the response. But does that wordsController.js's "res"s are just discarded?
What about the ability to update the view to reflect each individual word getting saved?
Do I actually want after all to just make a separate HTTP request for each word, just so there's a separate "res"?

OK, thinking about this logically.
IF--if--I want anything to happen clientside as a recognition of word creation, THEN I need to have a res for each word.
One req, one res. There's no such thing as one req with a bunch of res-s.
THEREFORE I want multiple reqs. So sure, make a separate request for each word.

Con: if any word save fails, list is saved incomplete
Pro: if any word save fails, list is saved incomplete

Now I COULD just save the whole list at once; then, on whole list saved, display all the words because they're in the res object.
If the save takes a while, I'd still need some kind of animation.
I couldn't (I think) do an accurate progressive linear loader, not knowing until I'm done how big the batch is...

OK, current plan as of 2/14/18:
1) create list
2) res from list creation contains ID. UX continues to a "You are editing _____ list. Enter words for this list" textarea.
3) entire array of words in textarea are sent to /api/words/ GET, under req.body.words
4) wordMaker (here) iterates through the array, calling oedBundle and ultimately wordsController.create for each word
5) when all are done, res contains number of words added (maybe documents of all words? maybe not...)
*/