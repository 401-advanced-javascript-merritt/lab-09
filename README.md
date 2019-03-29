![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 9
### Chris Merritt
### Links and Resources
* [PR]()

[![Build Status](https://www.travis-ci.com/401-advanced-javascript-merritt/lab-09.svg?branch=master)](https://www.travis-ci.com/401-advanced-javascript-merritt/lab-09)

* [heroku]()

#### Documentation

* [swagger](https://lab9-merritt.herokuapp.com/api/v1/doc/)

* [jsdoc](https://lab9-merritt.herokuapp.com/docs/index.html)
### Modules
#### `modulename.js`
##### Exported Values and Methods
###### `foo(thing) -> string`
<!-- If you finished everything, you should be able to copy/paste the lab requirements and put them in present tense. -->
Usage Notes or examples
###### `bar(array) -> array`
Usage Notes or examples
### Setup
#### `.env` requirements
* `npm i`

#### Running the app
* `nodemon`
* Endpoint: `/`
* Endpoint: GET `api/v1/categories`
  * Returns a JSON object with all categories in it.
* Endpoint: POST `api/v1/categories/id`
  * Create a JSON object as a category.
* Endpoint: GET `api/v1/categories/id`
  * Get a JSON category at that id.
* Endpoint: Delete `api/v1/categories/id`
  * Returns a JSON object with all categories in it.

* Endpoint: GET `api/v1/player`
  * Returns a JSON object with all players in it.
* Endpoint: POST `api/v1/player/id`
  * Create a JSON object as a player.
* Endpoint: GET `api/v1/player/id`
  * Get a JSON player at that id.
* Endpoint: Delete `api/v1/player/id`
  * Returns a JSON object with all player in it.


#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
* Need to make sure that the requests to the database are correct.
* Need to make sure that incorrect routes are handled.
* Need to make sure server errors are handled/
* Need to test validation of data.

#### UML
![UML](./assets/lab-09-UML.JPG)