# website-2

Portfolio website

## My Personal Projects Portfolio.

I created this single-page application to showcase a couple of the most recent projects.

- I have an AWS S3 bucket and EC2 instance for storage and deployment.
- Changes in state and rendering are implemented through React.
- A MongoDB database stores data for the website.
- Projects and bio are editable from my IP address

## Installation

Be sure MongoBD is installed and running

Install node packages

```bash
  npm install
```

To be able to edit projects run this code 👇🏼

```bash
  echo "export default 'PUT_YOUR_IP_ADDRESS';" >> client/mattsIpAddress.js
```

Add a bio after starting the server: localhost/graphql

```bash
mutation {
  createBio(input: {
    bio: "BIO"
  }) {
    id
    bio
  }
}
```

..then click on project descriptions or bio to edit

## Run

Node

```bash
  npm start
```

Nodemon

```bash
  npm run dev
```

PM2

```bash
  npm run-script start:pm2
  npm run-script stop:pm2
```

## Test

```bash
  npm test
```

## Webpack

```bash
  npm run build
```
