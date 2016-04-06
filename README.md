## Website Performance Optimization portfolio project

The project source code resides in the src folder. The production ready code is copied to the dist folder.
I used Gulp as the build tool.

####Part 1: Building the project
1. Check out the repository.
1. Run the following command to minimise source files, optimise images and inline CSS.

    ```
    $>cd /path/to/your-project-folder
    $>gulp

    ```
1. To clean your dist folder, run the following command.

    ```
    $>cd /path/to/your-project-folder
    $>gulp clean

    ```
    
####Part 2: Optimize PageSpeed Insights score for index.html

To run the application:

1. Check out the repository
1. Run a local server

  ```bash
  $> cd /path/to/your-project-folder/dist
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080 OR
1. Download and install [ngrok](http://jmariaselvam.github.io) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-ngrok-executable
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights!

####Part 3: Optimise Frames per Second in pizza.html

You can access the optimised pizza page at localhost:8080/views/pizza.html

####Part 4: Optimised Site

A publicly available optimised site is available at [Optimised Portfolio](http://448df3e9.ngrok.io).
