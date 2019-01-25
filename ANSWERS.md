- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to inform other developers working on the code, the types of props that a specific component takes in and which are required. This saves the other developer from having to traverse and figure it out on their own. It as well allows for warning messages to come up when a required prototype isn't given, or if a wrong type is passed through.


- [ ] Describe a life-cycle event in React?

A life-cycle event in React describes the changes that occur to a component over its lifecycle. Things like ComponentDidMount and ComponentDidUnmount describe its introduction and destruction in the application, where setState and similar functions describe it being updated.


- [ ] Explain the details of a Higher Order Component?

A higher order component is similar to a higher order function, as they both take in as "arguments" other things, components in this case. This allows it to pass through and conditionally render one component instead of another based upon a condition often defined in state.


- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

You can style components in React in three different ways. The most basic is vanilla css, which has the advantage of being the simplest, and a highly used format that is found in other areas outside React. Another one is ReactStrap which is a library like bootstrap which allows you to cry and paste previously styled components into your app. This is quick and easy however, difficult to override certain styles. Finally, there is styled-components which allows you to create variables which you can assign a styled element too and use in JSX. This is very convenient as you do not necessarily need classNames anymore and keeps styles from bleeding.