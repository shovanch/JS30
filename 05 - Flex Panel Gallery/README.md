## Notes from Lesson 05

* The flow of the code works likes this => User clicks on a panel, the click eventlistener adds 'open' class to it which causes the text font-size and panel flex property to grow bigger. While it's transitioning another event listener looks if the `transitionend` property includes the word `flex`. If yes, then it also applies the 'active' class which causes text to appear from top and bottom.
* `flex: 1` means take up all the available space and distribute equally among each other. While applying `flex: 2` on an element means take up twice the amount of available space than other elements proportionally.
