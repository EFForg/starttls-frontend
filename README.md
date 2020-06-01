**Note**: The STARTTLS Everywhere project is not currently being maintained. See [this post](https://www.eff.org/deeplinks/2020/04/winding-down-starttls-everywhere-project-and-future-secure-email) for more information, and check out [this post](https://www.eff.org/deeplinks/2020/04/technical-deep-dive-winding-down-starttls-policy-list) if you may be impacted by this.

-----

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

This Dockerfile relies on a private docker repository and is built for internal use only.
