FROM node:trixie-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --no-audit --no-fund

COPY . .

EXPOSE 4173

CMD ["npm", "run", "preview"]