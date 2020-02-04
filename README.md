# Overview

For this assessment, you will build an app using the following concepts:

- State
- Event Handlers
- Fetch
- Conditional Rendering
- Component Library
- For the past couple of assessments, we have been giving you a scaffold project for you to fork and clone, however, you will build this project from scratch using create-react-app.

**See the bottom of the page for the Final Product.**

## Getting Started

### Part 1 - Create a Button with a Basic Event Handler

1. Create an App using create-react-app
2. Spin up your app and view it in the browser to make sure it works
3. Clear out the default content of the render() method of the App Component
4. Render a button element in your App Component
5. Add a handleToggle function to your App Component
   1. Add the handleToggle function to your button's click event
   2. We recommend having the handler console.log() to verify it is hooked up correctly
      At this point, you should have a simple button that will fire a console.log when clicked.

### Part 2 - Get Data from the Github API and Update State

1. Add state to your app with 2 keys: user: {} and active: false

2. In your handleToggle event handler, create a fetch that performs a GET request on this url

   1. https://api.github.com/users/a-github-username

   2. Note: be sure to replace a-github-username with an actual username

3. Update state with the result of this fetch

_At this point, when you click the button it should add the Github information to state. (Use React Dev Tools Chrome Extension to verify)_

### Part 3 - Render Github User Info on the Page

1.  Use conditional rendering to display the Github user information from state once the button is clicked

2.  Specifically Render:

    1. Your profile image using **avatar_url**
    2. Your **name**
    3. At least 2 other pieces of information from the Github user information.

3.  Make sure that when you click your button it toggles between showing the user information and hiding the information.

    1.  hint: this is where state.active could be useful

    _At this point the core functionality of your app should align with the final product video at the bottom of this page. Namely, a button that toggles showing your information on the page._

### Part 4 - Component Library

You must use a component library. You can use any component library you like, however, it should have components that you can actually use for this assessment. The component libraries below are some great options. They have a component called "Card" that you should highly consider using for this assessment. Also, "Button" component is another good one for this assessment.

- Semantic-UI-React -- note: make certain that you are always using the react.semantic-ui.com domain. there is a version of semantic ui that uses only class names at semantic-ui.com which is NOT what we want.
- Material-UI

### Submission

You must submit a deployment url that displays a live running version of your source code. You must also include the url to your repo with your submission.

## Happy Hacking!!

Example Final Product (this example uses Semantic-UI-React components):

https://s3.us-east-2.amazonaws.com/files.kenzie.academy/frontend-q2/github-card.mp4

### Bonus

- Add a new section to the page that contains a form with an input box. The input box should ask for a Github username. After the user types in a Github username and submits the form, then it should display a card (should look the same as the one created in Part 3) with that users information. The form can be resubmitted anytime with a new username and it should continue to display the card but with the new users information. Note: for this bonus feature, you should try to re-use the jsx you already wrote for the card from Part 3. You can easily re-use this jsx by creating a named component containing that jsx. A possible name could be "GithubCard".
