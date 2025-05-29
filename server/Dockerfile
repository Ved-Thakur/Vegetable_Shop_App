# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy everything
COPY . .

# Go into the project subfolder
WORKDIR /src/ProductApi

# Restore dependencies
RUN dotnet restore

# Build and publish
RUN dotnet publish -c Release -o /app/out

# Stage 2: Run
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Set port binding for Render (IMPORTANT!)
ENV ASPNETCORE_URLS=http://+:8080

# Copy published files
COPY --from=build /app/out .

# Expose port 8080 
EXPOSE 8080

# Run the app
ENTRYPOINT ["dotnet", "ProductApi.dll"]
