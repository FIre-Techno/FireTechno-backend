FROM node:latest
# Create WORKDIR
WORKDIR /usr/src/app
# COPY APP to WORKDIR
COPY . .

# RUN npm install

# RUN npm ci --only=production


EXPOSE 3000

CMD ["node", "./bin/www"]