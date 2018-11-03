# Front End Developer Course
---
#### _MyReads Project_

## Project Overview: Stage 1

For the **Book Tracking App** project, I have created a web application that allows you to select and categorize books you have read, are currently reading, or want to read using React.

## Resources accessed to get this done

### Mozilla Dev network
Referenced resources on [.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), [.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), and [.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

### [Project 6 My-Reads Walk Through video](https://www.youtube.com/watch?v=bpKI3R0nf7E)
Referenced the walk through video, mostly following along, handling a couple things differently (routing for instance), but overall working in the same way.

### [ReactJS.org Documentation](https://reactjs.org/docs/getting-started.html)
Reference ReachJS.org's documentation pages, especially components and props.


## How to run this project

### Fork it!
To run the project, fork it on [Github](https://github.com/anthonyCarton/reactnd-project-myreads-starter).

### Pull it!
Once you've forked the project, pull it.
```
git pull https://github.com/{your github profile}/reactnd-project-myreads-starter.git
```

### CD into it!
Now that you've pulled it down to your computer, change directories (CD) into the directory.
```
cd reactnd-project-myreads-starter
```

### Install npm
```
npm install
```

### Serve it up
Start the development serviceWorker
```
npm started
```

### Open it!
In your favorite browser (Netscape! j/k) navigate to localhost:3000


## BooksAPI

This repository uses a provided backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is a Udacity student project. Therefore, we most likely will not accept pull requests.
