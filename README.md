Angular project with Grunt + Browserify + ocLazyLoad + ui-router-extras + BrowserSync
======


goals
-----

To scaffold a project using AngularJS, Grunt for development tasks, [BrowserifyJS](http://browserify.org/),
[ocLazyLoad](https://oclazyload.readme.io/) for inject modules lazy and [ui-router-extras](http://christopherthielen.github.io/ui-router-extras/#/home)
to manage that and [BrowserSync]http://www.browsersync.io/) to can show and test result for different devices to the same time.

Don't use JQuery!!

Each module, is generated with own js and css file. When you access to each module, this load own js and css file to run.
With this we win optimization and speed to load big projects.

instructions
------------

`npm install && bower install && grunt watch` to run local project and have available the following access:

```
Runing "browserSync:dev" (browserSync) task
[BS] Access URLs:
 -----------------------------------------
       Local: http://localhost:3000/#/
    External: http://192.168.X.XXX:3000/#/
 -----------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.X.XXX:3001
 -----------------------------------------
```
http://localhost:3000/#/` It will open automatically on your default browser.

On others devices, set external IP http://192.168.X.XXX:3000 and try to navigate.


other thoughts
--------------

Browserify seems like a very elegant way to organize the app.

While this is certainly cool, I'm not sure that it's necessary to lazy load our Angular controller/template code. It comes with certain disadvantages:

1. it breaks a number of the convenience methods of the router, because all we can tell is that a route tree will be loaded, but we don't know the names of the sub-routes in advance.
- there's lag when moving between portions of the app
- it's a solution in search of a problem. Except for the `.config()` and `.run()` blocks of individual modules, code is only executed when its needed (controllers, directives, services, etc)
- we could still lazy-load vendor code that's only used in certain parts of the app
- there are challenges about the interaction between Angular's Dependency Injection when loading modules asynchronously. For example, it's easy to overwrite modules that have already been registered, which leads to unusual results.


tests
-----

[...]


dependencies
------------

...