## Notes from Lesson 12

* We use `keyup` event to get keypress user and then, push the correspondent into an array. Working like a keylogger.
* This line of code maintains the array length same as the secret length. (Like a queue data structure) ```pressed.splice(-secret.length - 1, pressed.length - secret.length);```
