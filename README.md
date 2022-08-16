# MERN & Kubernetes Atlas Operator Demo Application 

This repository contains the sample application for the [Application Deployment in Kubernetes with the MongoDB Atlas Operator](https://github.com/mongodb-developer/mern-k8s/blob/main/guide.md) tutorial.

## How To Run

1. You can follow the [Getting Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) guide, to learn how to create a free Atlas account, create your first cluster and get your Connection String to the database. 
Then, set the Atlas URI connection parameter in `src/back/.env` to your Connection String, and assign a port:
```
CONN_STR=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=3000
```

2. Start the Express server:
```
cd src/back
npm install
npm install -g nodemon
nodemon server
```

3. Start the React app:
```
cd src/front
npm install
npm start
```

![TravelDemoVid](https://user-images.githubusercontent.com/54345140/178112503-5ad30e76-301b-4888-9f38-1a67bed8dc15.gif)

## Disclaimer

Use at your own risk; not a supported MongoDB product
