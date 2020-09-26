# Source code for xtreamwayz.netlify.app

[![Docs Status](https://github.com/xtreamwayz/website/workflows/github-pages/badge.svg)](https://xtreamwayz.netlify.app/)

## Development

```bash
# init
docker run --rm --volume $(pwd):/src xtreamwayz/hugo npm install
docker run --rm --volume $(pwd):/src xtreamwayz/hugo hugo mod init site

# server
docker-compose up -d

# build
docker run --rm --volume $(pwd):/src xtreamwayz/hugo hugo --gc --minify --enableGitInfo --environment production
```

For local development of package documentation, add one of these to `go.mod`

```golang
replace github.com/xtreamwayz/<project> => ../<project>
replace github.com/xtreamwayz/<project> => /Users/username/projects/<project>
```

## GitHub pages integration

Add this file to a repository to trigger new builds if a file changed in the
docs path. The `NETLIFY_DOCS_BUILD_HOOK` secret must also be set.

```yaml
# .github/workflows/build-docs.yml
name: build-docs

on:
  push:
    branches:
      - master
    paths:
      - 'docs/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger build webhook on Netlify
        run: curl -s -X POST "https://api.netlify.com/build_hooks/${TOKEN}"
        env:
          TOKEN: ${{ secrets.NETLIFY_DOCS_BUILD_HOOK }}
```

## Documentation

All project documentation is located in the [./docs](./docs) folder. If you would like to contribute
to the documentation, please submit a pull request. You can read the docs online:
https://xtreamwayz.netlify.app/

## Contributing

**_BEFORE you start work on a feature or fix_**, please read & follow the
[contributing guidelines](https://github.com/xtreamwayz/.github/blob/master/CONTRIBUTING.md#contributing)
to help avoid any wasted or duplicate effort.

## Copyright and license

Code released under the [MIT License](https://github.com/xtreamwayz/.github/blob/master/LICENSE.md).
Documentation distributed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
