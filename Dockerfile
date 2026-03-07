# Use the latest stable Playwright image
FROM mcr.microsoft.com/playwright:v1.58.2-jammy

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies without generating a new lockfile
RUN npm ci

# Copy the rest of the project files
COPY . .

# Run tests using the 4 workers you configured
CMD ["npx", "playwright", "test"]
