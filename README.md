This is the source code for https://setthearena.com, built by [The Academy for Coaching Excellence](https://acecoachtraining.com/).

## Initial set up

- Clone the repository to your machine: `git clone https://github.com/blanchardjeremy/arena-react.git`
- Run `npm install` to set up the project.
- Run `npm start` to start a local server [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deploying

- Run `cp .env.template .env` to copy the FTP configuration file.
- Edit `.env` to have the username, password, and serve of the FTP serve you want to deploy to.
- Run `source .env` to configure your local environment variables.
- Run `npm run build` to generate the latest build.
- Run `npm run deploy` to deploy to a server environment using FTP.
