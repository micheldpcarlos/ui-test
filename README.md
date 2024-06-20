# Rule of Thumb - Formula.Monks UI Coding Test

This project implements the coding challenge proposed [here](https://github.com/zemoga/ui-test).

The deployed version is available [here](https://micheldpcarlos.github.io/ui-test/) and persists data in Local Storage.

## Stack

- Vue 3 - Composition API
- JavaScript
- Pinia
- vue-router
- vue-use
- date-fns

## Requirements

- Node.js 20+

## How to Run Locally

1.  Clone this project and navigate to the folder.
2.  Install the dependencies with `npm install`.
3.  Run the dev server with the command `npm run dev`.

## Conclusion

I was able to meet all the requirements with relative ease. To me, this project was not particularly challenging in terms of testing my skills; it was primarily time-consuming due to the need for responsiveness across three resolutions.

Overall, it was a satisfactory experience. It was enjoyable to make it work and look exactly like the design, meeting all the requirements.

There is ample room for improvements and additional feature implementations if this were a real project. Unfortunately, this test is very time-consuming, and I considered not even starting it several times before finding some free time. It's not that I'm not excited by the opportunity, but there are certainly better ways to test my skills without taking up so much of my limited free time.

**Note:** When this test was created, Figma Dev Mode was free, but now it's paid. As a result, I had to use Figma without Dev Mode, which made obtaining some spacing and design data more difficult.

I hope this demonstrates my skills and how I work when there is existing styling and organization in place.
Look forward to hearing from you soon.
Thank you for the opportunity!

### Acceptance Criteria

Below my check list against the requirements in the instructions ✅

1. [x] The interactive component should meet the design criteria, which you can find below in the different required resolutions.

2. [x] In mobile version, cards **should only** be displayed as a list of cards, with horizontal scrolling and overflow.

3. [x] In tablet and desktop versions, user **should be able to switch views** between _list view_ and _grid view_, using the dropdown menu, which should be located at the top right section of the component.

   1. [x] If the _list view_ is selected, all cards should be stacked vertically, according to the design specs.
   2. [x] If the _grid view_ is selected, all cards should be positioned as a grid of elements, according to the design specs.

4. [x] Each card should contain a **gauge bar** at the bottom, which will display the distribution of positive and negative votes **as a percentage**. (See `assets/data.json` for reference).

5. [x] Each card should contain three buttons: a **"thumbs down" (yellow)**, a **"thumbs up" (teal)** and a "Vote now" button **which should be disabled** by default.

   1. [x] If either "thumbs up" or "thumbs down" button is pressed, it should **toggle the selected state of that button** (denoted as a white border, see design specs for reference), and enable the "Vote Now" button.
   2. [x] If "Vote Now" button is pressed, **that vote should be posted**, and three other things should happen:
      1. [x] Eyebrow text should change to the copy "Thank you for your vote!"
      2. [x] "Vote now" text should change to the copy "Vote Again"
      3. [x] The **gauge bar** below should reflect the changes in the registered data and **percentage should be updated**.
   3. [x] If "Vote Again" button is pressed, all buttons should return to the initial state, and all modified copy texts should be reverted to their original state. The gauge bar, however, should persist the votes already posted.

6. [x] **All posted votes should be persisted** by any means, and should be exactly the same count, even if the page is refreshed. Use _any_ persistance mechanisms you prefer: LocalStorage, Cookies, IndexedDB, URL params, a Back End service (Firebase, DynamoDB, Redis, etc).
   > Data is persisted in LocalStorage. I started to create a DynamoDB + serverless setup to store data, but I had no more time/energy to spend on this test.

### Going above and beyond 🚀

Unfortunatelly I had no time to make it a really nice and well polished project implementing all the possibilities, please find bellow some comments about each of them.

- Implement any sort of _state management solution_, that deals with data updates in a coherent manner.

  > Pinia is implemented to deal with global state in the application.

- Write some tests. Unit, Integration, E2E, anything that ensures that your code is unbreakable.

  > We have PlayWright and Cypress configured, but I had no time to write tests.

- Do you know any back end language? Does _serverless_ ring a bell? Build some basic back end that deals with persistance.
  > Yes, I know and even started to create some functions to run on AWS Lambda + AWS DynamoDB, but the time started to get short and I decided to just go Local Storage for this project.
- Implement some level of accessibility for impaired people reviewing your code.
  > Once again, had no time to implement it, this is possible easily as I'm using css variables in the styling
- _Containerize_ the entire website and make it run flawlessly on any machine.
  > Nope, only configured CI/CD to GitHub Action deploy it
- Cleanup your commit history and show us your thought process with atomic commits.
  > Not considered
- Document your code. Use any format you know of to generate documentation that allow us to peek under the hood.
  > No effort spent on this
- Include any SEO strategy, and show off your score in any popular tool.

  > No effort spent on this

- Create configuration for different environments, and optimize your code for production usage.
  > Didn't do anything custom, vite already provides optimizations for prod code.
