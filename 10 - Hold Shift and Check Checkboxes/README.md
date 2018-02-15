## Notes from Lesson 10

* The program logic is => Set `click` eventlistener on the checkboxes, set `handleCheck` as callback fn. Declare a variable called `lastChecked` to store last checked input. What `handlecheck()` does: it sets a variable `inBetween` = false. When shifkey is pressed and the box is being checked, then loop over the checkboxes => if the checked box is the current one or lastChecked, then flip the value of `inbetween`.. If `inBetween` is true, set the checkbox to checked. Set the current checked checkbox as `lastChecked`. Rinse and Repeat.
