# Step 1: Use the Node.js image to build the app
FROM node:22 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Set environment variable for the API key at build time
ARG REACT_APP_TMDB_API_KEY
ENV REACT_APP_TMDB_API_KEY=$REACT_APP_TMDB_API_KEY

# Build the React app for production
RUN npm run build

# Step 2: Use Nginx to serve the production build
FROM nginx:alpine

# Copy the build folder from the previous stage to the Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
