FROM node:carbon

WORKDIR /vol/app
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir -p /data/uploads
ENV PATH=$PATH:/vol/app/bin:/usr/local/bin
EXPOSE 9000 35729 5858
CMD npm run build:start