FROM node:20-alpine

# Set the working directory
WORKDIR /app/frontend

# Copy frontend code
COPY ./package*.json ./
RUN npm install
COPY . ./




EXPOSE 5173

CMD ["sh", "-c", "npm run dev"]