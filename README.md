Rapidpro - BongoLive
--------------------

[![Greenkeeper badge](https://badges.greenkeeper.io/CodeForAfrica/rapidpro-bongolive.svg)](https://greenkeeper.io/)

Thin middleware to route SMSs from BongoLive to Rapidpro.

To get started, simply set the following ENV Variables and deploy:

```
RP_HOSTNAME=textit.in
RP_PATH_MOYO=/c/ex/.../receive
```

### Deployment

With Dokku, deployment steps would go something like so:

```
dokku apps:create rp-bongolive

dokku domains:add rp-bongolive example.com

dokku config:set rp-bongolive \
  BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs.git#v133

dokku config:set rp-bongolive \
  RP_HOSTNAME=textit.in \
  RP_PATH_MOYO=/c/ex/.../receive
```

On local machine now:
```
git remote add dokku dokku@example.com:rp-bongolive
git push dokku
```

A little SSL too with Letsencrypt:
```
dokku config:set --no-restart rp-bongolive DOKKU_LETSENCRYPT_EMAIL=hello@example.com
dokku letsencrypt rp-bongolive
```


## License 

Rapidpro - BongoLive is a tiny express.js app to serve SMSs from BongoLive to Rapidpro.

Copyright (C) 2018  Code for Africa

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
