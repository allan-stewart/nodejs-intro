# nodejs-intro

An introduction to [Node.js](http://nodejs.org/)

[This presentation](https://docs.google.com/presentation/d/1lGXFIljvgNL8TK0xmTkCiovHVNxkJJ8RmmyTio8R09k/edit?usp=sharing)
(including the exmaple code) is geared toward people who have a working knowledge of JavaScript,
and have little-to-no experience with Node.js.
It just scratches the surface; the goal is to give enough info to get someone started.


## Session Abstract

> Come learn the basics of Node.js in a hands-on workshop where we'll create some simple scripts.
> You will be introduced to: npm, CLI usage, file system access, HTTP requests, and some basic unit testing.
> Attendees should install Node.js beforehand and have a working knowledge of JavaScript, but prior experience with Node.js is not required.


## Running the Code Examples

Before running any of the code examples, you will need to install Node.js.
You can always get it from the [official site](http://nodejs.org),
but for OS X and *nix systems, you may try using
[nvm](https://github.com/creationix/nvm) to avoid some permission problems.
(If you use `sudo npm` you may have a bad day...)

All of the examples are meant to be run from a command line interface (CLI) such as a bash shell.
You should `cd` to the directory containing this README.

**Disclaimer:**
> The code files in this repository are just examples.
> They are toy scripts purposely kept very short so they can be presented via slides.
> They are not meant to be resilient to error; their purpose is to demonstrate node.js concepts. 


### first.js

Run the first example by typing: `node first.js`


### files.js

This script will output the number of files and directories in the current working directory.
Try running `node files.js`, and then try it from a different working directory, e.g.:

```
cd ~
node ~/nodejs-intro/files.js
```


### letterCount.js

This script will `require` the `counter.js` file as a module.
Enter `node letterCount.js` to run it.

This example also uses [process.argv](http://nodejs.org/api/process.html#process_process_argv)
to take in optional parameters from the command line.
The usage is like this:

```
node letterCount.js [letter] [string-to-search]
```

Try the following:

```
node letterCount.js e
node letterCount.js q
node letterCount.js m "I am the very model of a modern major general."
```


### weather.js

Before you run this script, you need to either run
`npm install request` (install the dependency explicitly)
or `npm install` (install all dependencies specified in the [package.json](./package.json) file).

Then you can try running `node weather.js`.
This script will make an HTTP request to the JSON REST APIs at http://api.weathermap.org
(via the excellent [request](https://github.com/request/request) module).

You can also specify some other location, e.g. `node weather.js "Denver, CO"`


### Token Creator Tests

This example demonstrates unit testing using [mocha](http://mochajs.org/).
Before you can run it, you will need to run `npm install` to get the necessary dependencies
(which are specified in the [package.json](./package.json) file).

Unlike the other examples, you don't call `node` to run this.
Instead, use `npm test` to invoke mocha via the command specified in the
[package.json](./package.json) file.

Alternatively, you can run the tests via `mocha`
if you've installed it globally (`npm install -g mocha`).
