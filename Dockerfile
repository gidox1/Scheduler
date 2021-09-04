#Using pre-defined node base image
FROM node:14.0.0

WORKDIR /src

# Copy package.json. To take advantage of cached Docker layer
COPY package.json /src

RUN yarn

COPY . /src

# Expose web service
EXPOSE 3020

CMD [ "npm", "run", "start:dev" ]