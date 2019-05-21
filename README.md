# STARTTLS Everywhere Front End

## Development

### Install

1. [Install Hugo](https://gohugo.io/getting-started/installing/), eg. `sudo apt install hugo`.
2. Install npm and Node.
3. `npm install`

### Run

`npm run build` builds the site to `/public` once.

`npm run lint` runs the sass linter.

`npm run serve` watches for changes and serves the site from memory at `localhost:1313`.

#### Developing with the STARTTLS Scanner API
1. Clone https://github.com/EFForg/starttls-scanner and follow the Docker setup instructions.
2. Edit the `.env` file for that project and set `ALLOWED_ORIGINS=http://localhost:1313`.

### Docker

This Dockerfile exists primarily for deploys. However, it can be run with
```
docker build -t starttls-frontend .
docker run --rm --name starttls-frontend-nginx -d -p 8080:80 starttls-frontend
```
