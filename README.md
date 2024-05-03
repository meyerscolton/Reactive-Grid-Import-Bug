This repository contains a sample rush monorepo. Inside of it are two packages, once which exports an example of the devexpress reactive grid and the other is a sample application that uses it. 

There is a bug occuring where all the imports from @devexpress/dx-react-grid-material-ui are undefined. I added a console.log with the three imports I have from that package, as well as one from @mui/material. All the devexpress imports are undefined while the mui one is as expected.

To start this project run the following commands: rush update, rush install, rush build. Then use npm start to launch the template-sample package. Upon starting the bug will happen immediately.
