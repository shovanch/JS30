## Notes from Lesson 1

* We can use **custom data attributes** by prefixing 'data-' keyword before. We can use it hook two elements. Like styling using class and IDs.
* Data attirbutes can selected in JS using attribute selector .


    ```javascript
    const audio = document.querySelector(`audio[data-key=10]`);
    ```

* When we have nodelist of elements using `querySelectorAll`. We cannot attach event listener to all of them directly. We need to loop over the list using `forEach` and attach the event listeners one by one.

  Example Code:

  ```javascript
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  ```

* **Transition-end event**: The properties listed in `transition` work their changes. When they complete transitioning phase, it generates a `transitionend` event for each property after it has been transitioned.
