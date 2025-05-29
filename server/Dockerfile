# Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy csproj and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the code
COPY . ./
RUN dotnet publish -c Release -o out

# Use the ASP.NET Core runtime to run the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .

# Expose the port your app runs on
EXPOSE 80
ENTRYPOINT ["dotnet", "ProductApi.dll"]