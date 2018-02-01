# spellingbeeformee

When my daughter brought home a spelling list for school, I thought I'd put together a sort of "audio flash card" app to quiz her on it. The audio is coming from the [Merriam Webster API](http://www.dictionaryapi.com)&mdash;but unfortunately it returns only XHTML, and is not too consistent with its structure. So for any word for which the audio can't be found the app falls back to the [HTML 5 Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

I hope to convert the whole thing to use [Oxford Dictionaries' new beautiful API](https://developer.oxforddictionaries.com). I would also like to replace the current `localStorage` functions with a real back end, with user authentication and the ability to upload custom word lists.