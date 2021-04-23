# website-2

Portfolio website

## My Personal Projects Portfolio.

I created this single-page application to showcase a couple of the most recent projects.

- I have an AWS S3 bucket and EC2 instance for storage and deployment.
- Changes in state and rendering are implemented through React.
- A MongoDB database stores data for the website.

## Installation

```bash
  npm install
```

To be able to edit projects

```bash

  echo "export default 'YOUR_IP_ADDRESS';" >> client/mattsIpAddress.js

```

## Run

Node

```bash
  npm start
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
  npm run dev
```
