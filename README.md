1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
 Ans: getElementById()            Selects one element by its unique id, id must be unique in an HTML document
   getElementsByClassName()         selrct all the classes by getElementByClassName()
   querySelector()                  Selects the first element that matches a CSS selector. select a single class or id
    querySelectorAll                Selects all element that matches a CSS selector. select a all class or id


2. How do you **create and insert a new element into the DOM**?

   ans::          document.createElement():

   3. What is **Event Bubbling** and how does it work?
ans::            the event travels upward in the DOM tree.


4. What is **Event Delegation** in JavaScript? Why is it useful?
ans ::: the event starts at the child and bubbles up to the parent, where we can “catch” it.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans ::Stops the default browser action of an event.

      Stops the event from bubbling up (or capturing down).
