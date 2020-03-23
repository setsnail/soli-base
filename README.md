#Soli starter

## Add your code
Put your HTML in the Views>Secret.handlebars file. This is what protects it from being seen without the password.

This HTML will be inserted into `views/layouts/main.handlebars` in the `{{body}}` section, so if you need to link to assets in the header, place them in the `main.handlebars` file, just don't put any soli-sensitive code there.

If you want to customize the screen where you enter the password, customize the `views/home.handlebars` file. 

Happy coding! Please contact `soli-playground-dogfood@google.com` if you run into any problems
