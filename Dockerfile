# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /app

ARG PORT=3000
ENV PORT=${PORT}

ARG MONGOSERVERURL
ENV MONGOSERVERURL=${MONGOSERVERURL}

ARG DBNAME
ENV DBNAME=${DBNAME}

ARG CookieSecret
ENV CookieSecret=${CookieSecret}

# Copy package.json and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Bundle app source
COPY . .

# # Command to run the app
CMD ["npm", "start"]

EXPOSE ${PORT}
