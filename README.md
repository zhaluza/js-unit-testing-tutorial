# An Introduction to JavaScript Unit Testing With Mocha & Chai

## Summary

This readme is a simple walkthrough and reference for anyone interested in
learning the basics of creating unit tests for JavaScript using Mocha and Chai.

The files in this repo also correspond to this guide.

(Note: most of the code in this repo is adapted from the Unit Testing section of Shaun Wassel's [JavaScript: Test-Driven
Development
(ES6)](https://www.lynda.com/JavaScript-tutorials/JavaScript-Test-Driven-Development-ES6/5035830-2.html)
course on Lynda!)

### Why Mocha & Chai?

In terms of technology, successful JS testing requires three things:

- Testing environment/test runner
- Testing framework
- Assertion library
  Different frameworks assume different combinations of these roles. Possible combinations include…
- Mocha JS (testing environment & framework) + Chai (assertion library)
- Jest (all-in-one)
- Jasmine (all-in-one)

This guide will use a combination of Mocha and Chai. However, these kinds of
tests can also be run with other testing solutions like Jest. The approach is
identical.

### What's Test-Driven Development?

Test-driven development (or TDD) is a form of development in which developers
write tests for their code before they actually write the code.

TDD utilizes "red-green testing": you initially write a test that will fail
(red), then write and adjust your code so that the test passes (green).

Here are some of the benefits of TDD:

- It’s more efficient
  - You don’t have to write new tests or rewrite tests after making changes — because you’ve already written tests to anticipate the nature of your code
- You write better code
  - Since you plan everything out beforehand, your code is better organized
  - It’s more testable — you don’t have to rewrite or refactor anything for tests
  - Fewer bugs — you’ll catch them sooner, and you’ll also have regression testing built in (all the tests you’ve ever run will get re-run when you make a change)
- You’ll have great code coverage
  - Your tests are written to cover the general breadth of your code

## Unit Testing Walkthrough

### Intro

In the guide below, you'll conduct some basic unit tests. Unit tests focus on
individual parts of the code, and they're likely the most common types of tests
you'll perform as a developer.

They're different from integration tests, which test whether a program or app
functions properly as a whole.

### Let's Get Started!

#### Setting up Mocha & Chai

First, set up a package.json file and import all needed dependencies.

```javascript
npm init -y
npm i mocha chai --save-dev
```

Next, install Babel to make sure all JS is backwards compatible.

```javascript
npm i @babel/core @babel/preset-env @babel/register --save-dev
```

Create a Babel file: .babelrc
This will make sure that Babel functions correctly.

```javascript
{
    "presets": ["@babel/preset-env"]
}
```

#### Setting Up Our Tests

Create a src folder. Inside it, create two files:

- .js file: This will contain the JavaScript we want to test
- test.js file: This will contain our tests

Following TDD principles, the .js folder will be blank. Create a basic test
inside the test.js folder:

```javascript
import { expect } from 'chai';
import { getLetterCount } from './letter-count';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  });
});
```

#### Running Our Tests

Now run the test. First set up the testing script in the package.json file.

```javascript
...
"scripts": {
"test": "npx mocha \"src/\*_/_.test.js\" --recursive --require @babel/register"
},
...
```

Next, run the test.

```javascript
npm test

// or “npm run test”
```

Now, set up a function in the .js file that will make the test pass.

```javascript
export const getLetterCount = string => ({});
```

#### Refining Our Tests

Now we need to add tests until we see failure again.

```javascript
import { expect } from 'chai';
import { getLetterCount } from './letter-count';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  });
  it('return correct letter count for a word with only one of each letter', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected);
  });
});
```

Now let’s build out our function so it passes:

```javascript
export const getLetterCount = string => {
  const letters = string.split('');
  let letterCount = {};
  letters.forEach(letter => {
    letterCount[letter]
      ? (letterCount[letter] += 1)
      : (letterCount[letter] = 1);
  });
  return letterCount;
};
```

This is good, but let’s make sure our test passes when we use more complex words, i.e. words with more than one of a certain letter.

```javascript
import { expect } from 'chai';
import { getLetterCount } from './letter-count';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  });
  it('return correct letter count for a word with only one of each letter', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected);
  });

  it('return correct letter count for words with more than one of a certain letter', () => {
    const expected = { m: 1, i: 4, s: 4, p: 2 };
    const actual = getLetterCount('mississippi');
    expect(actual).to.deep.equal(expected);
  });
});
```

#### More Practice: isPalindrome

Now test and create a function called isPalindrome. It should take two arguments and return “true” if the arguments are palindromes of one another. As a bonus, have the function return “true” even if…

- the arguments contain spaces
- the arguments utilize differing capitalization (e.g. “listen” & “SILENT”)

Practice utilizing the principles described above to build out tests that cover any and all relevant use cases, including edge cases. Reference the repo files if you need a hint — note that your solution and test cases may differ depending on your approach (e.g. a much simpler solution would be to utilize Lodash).
