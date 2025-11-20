# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

![Design preview for the Conference ticket generator coding challenge](./preview.jpg)


### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot solution

![desktop](assets/images/Screenshot%202025-11-20%20alle%2016.37.36.png)
![desktop ticket](assets/images/Screenshot%202025-11-20%20alle%2016.37.56.png)
![mobile](assets/images/Screenshot%202025-11-20%20alle%2016.39.00.png)


### Links

- Solution URL: [github.com](https://github.com/alepacc/conference-ticket-generator)
- Live Site URL: [live site](https://alepacc.github.io/conference-ticket-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I learned how to handle file uploads and validate the file type and size before processing it.

```js
const fileInput = document.getElementById('avatar');
function validateImg() {
	var file = fileInput.files[0];
	var validTypes = ['image/jpeg', 'image/png'];
	const maxSize = 500 * 1024; // 500KB
  ...
}
```

