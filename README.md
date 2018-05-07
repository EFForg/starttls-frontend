# STARTTLS Everywhere Front End

## Development

### Install

1. [Install Hugo](https://gohugo.io/getting-started/installing/), eg. `sudo apt install hugo`.
2. Install yarn and Node.
3. `yarn install`

### Run

`yarn run build` builds the site to `/public` once.

`yarn run serve` watches for changes and serves the site from memory at `localhost:1313`.

`yarn run lint` runs the sass linter.

### Docker

This Dockerfile exists primarily for deploys. However, it can be run with
```
docker build -t starttls-frontend .
docker run --rm --name starttls-frontend-nginx -d -p 8080:80 starttls-frontend
```
