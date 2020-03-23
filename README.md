# Soli P5JS Starter

## Hello Dogfooders

Welcome to the starter project! If you're not familiar with glitch, click the name in the top left, and then "remix this project" to create a copy of this to remix. 
**DO NOT EDIT THIS PROJECT DIRECTLY.** Unfortunately Glitch does not support read-only collaboration on private files 😭, but this isn't a part of our core use-case for the public release.

## Set a password
As a protection against leaks, all dogfooding soli playground prototypes have to be password protected.

Remix this project and update the `.env` file to a password of your choice.

## Add your code
Put your HTML in the Views>Secret.handlebars file. This is what protects it from being seen without the password.
Note: in our public release, users will not have to jump through these hurdles, because the site will not be password-protected :)

This HTML will be inserted into `views/layouts/main.handlebars` in the `{{body}}` section, so if you need to link to assets in the header, place them in the `main.handlebars` file, just don't put any soli-sensitive code there.

If you want to customize the screen where you enter the password, customize the `views/home.handlebars` file. 

Happy coding! Please contact `soli-playground-dogfood@google.com` if you run into any problems
