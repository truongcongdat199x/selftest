
# FROM  node:16-alpine3.18
FROM  910760619310.dkr.ecr.ap-northeast-1.amazonaws.com/demoapp:base

#create app directory
WORKDIR /app

# install dependencies 
# A Wildcard to make sure that we will copy both package.json and package-lock.json
COPY package*.json /app/

RUN npm install

# Bundle app source
COPY . . 

EXPOSE 8080
CMD ["npm", "start"]