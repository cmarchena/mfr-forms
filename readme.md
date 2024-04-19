# React Forms Exercise

In this exercise, you'll create a simple form that allows users to input their name and email address. The form should have basic validation to ensure that the name field is not empty and the email field contains a valid email address.

## Instructions

1. Create a new React component called `RegistrationForm`.
2. Inside the `RegistrationForm` component, create a state object with two properties: `name` and `email`. Initialize them with empty strings.
3. Create a function to handle form submission. This function should prevent the default form submission behavior and log the current state object to the console.
4. Create a function to handle input changes for the `name` field. This function should update the `name` property in the state object with the new value.
5. Create a function to handle input changes for the `email` field. This function should update the `email` property in the state object with the new value.
6. Implement basic validation for the `name` field. If the `name` field is empty, display an error message.
7. Implement basic validation for the `email` field. If the `email` field does not contain a valid email address (you can use a simple regular expression for this), display an error message.
8. Render the `RegistrationForm` component inside your main `App` component.

## Bonus Tasks

1. Add a checkbox to the form that allows users to sign up for a newsletter.
2. Implement form reset functionality after successful submission.
3. Style the form and error messages using CSS.

## Testing

To test your solution, follow these steps:

1. Run your React application and open it in your web browser.
2. Try submitting the form with an empty name field and an invalid email address. Ensure that the appropriate error messages are displayed.
3. Submit the form with valid input data. Ensure that the state object is logged to the console correctly.
4. If you completed the bonus tasks, test the newsletter checkbox functionality and form reset functionality.

Good luck!