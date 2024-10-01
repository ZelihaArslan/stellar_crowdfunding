<h3 left="center">Crowdfunding Platform</h3>
This project is a crowdfunding platform where users can create projects and provide funding for these projects. The platform includes core features such as project creation, funding, and automatic transfer upon reaching the funding goal. Additionally, it offers optional extra features to enhance the user experience.

<h4 left="center">Features</h4>
Core Features:
Project Creation: Users can create new projects by setting a title, description, funding goal, and time limit.
Fund Projects: Users can provide funding for projects they are interested in.
Automatic Transfer Upon Goal Achievement: When a project reaches its funding goal, the funds are automatically transferred to the project owner.
<h4 left="center">Setup</h4>
Follow these steps to run the project locally:

<h4 left="center">Prerequisites</h4>

**__ Ensure you have Node.js and npm installed:__**

`$ node -v $ npm -v`

<h4 left="center">Install Dependencies</h4>

`npm install stellar-sdk`

<h4 left="center">Set Environment Variables</h4>

Create a .env file and configure the following variables:

`STELLAR_NETWORK=testnet`

`STELLAR_SECRET_KEY=YOUR_SECRET_KEY`

 `STELLAR_PUBLIC_KEY=YOUR_PUBLIC_KEY`
 
 `DATABASE_URL=YOUR_DATABASE_URL`
 
<h4 left="center">Run the Application</h4>

 `npm run start`

 <h4 left="center">Usage</h4>
 
**__ Create a Project: Users can click the "Create Project" button to create a new project, entering a title, description, funding goal, and time limit.: __**

Fund a Project: Users can view and fund projects using the Stellar testnet.

Automatic Transfers and Refunds:
If a project meets its funding goal, the funds are automatically transferred to the project owner.
If the project does not meet its goal within the time limit, the funds are refunded to the backers.

<h4 left="center">Tests</h4>

`npm run test`
