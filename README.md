# Source code for xtreamwayz.netlify.com

[![Docs Status](https://github.com/xtreamwayz/website/workflows/github-pages/badge.svg)](https://github.com/xtreamwayz/website/actions)

## Development

```bash
hugo mod init website
hugo server
```

For local development of package documentation, add this to `go.mod`

```golang
require github.com/xtreamwayz/<project> -> /path/to/project/source/
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
    - "docs/**"

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
https://xtreamwayz.netlify.com/

## Contributing

***BEFORE you start work on a feature or fix***, please read & follow the
[contributing guidelines](https://github.com/xtreamwayz/.github/blob/master/CONTRIBUTING.md#contributing)
to help avoid any wasted or duplicate effort.

## Copyright and license

Code released under the [MIT License](https://github.com/xtreamwayz/.github/blob/master/LICENSE.md).
Documentation distributed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
