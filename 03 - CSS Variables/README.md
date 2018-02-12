## Notes from this lesson 3

* Difference between Sass and CSS native variables: Sass vars get defined in compile time, can't be updated later. Whereas CSS variables can updated using JS.
* We can define the CSS variables like

  ```css
  :root {
    --varname: value;
  }
  ```

  which can be later used like

  ```css
  img {
    padding: var(--varname);
  }
  ```

* We can call the root element of the document using `documentELement`, then setvalue of a property using `setproperty`. Like,

  ```js
  document.documentELement.style.setProperty(prop, value);
  ```

* Differnce between array and nodelist : Array and nodelist can behave same. But array has different methods on it like map, reduce, While nodelist has methods, but they are far few in number.

* **dataset** is an object that is returned containing all the data attributes from a specific element. Then the attributes can be used like
  `dataset.attrName`
