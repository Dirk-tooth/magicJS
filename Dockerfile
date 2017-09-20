FROM node:boron

# setup src directories
RUN mkdir -p  /usr/src/
WORKDIR /usr/src/
COPY . /usr/src/

#
RUN npm install
RUN npm run prod

EXPOSE 80
CMD npm run serve
