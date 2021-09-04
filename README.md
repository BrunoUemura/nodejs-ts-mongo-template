# Node.js TypeScript MongoDB RESTAPI Teamplate

A REST API template built in Node.js using TypeScript and MongoDB

## Setup

- Install the dependencies:

  ```bash
  npm install
  ```

  Or

  ```bash
  yarn install
  ```

---

- Create .env file in root directory and insert the following data:

  ```
  MONGO_URL=mongodb://host.docker.internal:27017
  MONGO_USER=root
  MONGO_PASS=rootpassword
  ```

---

- Run the project (Development):

  ```bash
  npm run dev
  ```

  Or

  ```bash
  yarn dev
  ```

---

- Build the project in Docker:

  ```bash
  npm run docker
  ```

  Or

  ```bash
  yarn docker
  ```
