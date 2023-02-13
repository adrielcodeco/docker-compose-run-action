# Docker Compose Run Action

An Github action to run docker compose services.

## Inputs

### `compose-file`

**Optional** The name of the compose file. Default `"./docker-compose.yml"`.

It can be a list of files:

```yml
compose-file: |
  docker-compose.yml
  docker-compose.ci.yml
```

### `service`

**Optional** Just perform `docker-compose run` to one service instead of all of them

### `command`

**Optional** pass a service command

### `run-flags`

**Optional** Used to specify flags to pass to the `docker-compose run`. Default is none. Can be used to pass the `--build` flag, for example, if you want persistent volumes to be deleted as well during cleanup. A full list of flags can be found in the [docker-compose run documentation](https://docs.docker.com/compose/reference/run/).

### `down-flags`

**Optional** Used to specify flags to pass to the `docker-compose down` command during cleanup. Default is none. Can be used to pass the `--volumes` flag, for example, if you want persistent volumes to be deleted as well during cleanup. A full list of flags can be found in the [docker-compose down documentation](https://docs.docker.com/compose/reference/down/).

### `compose-flags`

**Optional** Used to specify flags to pass to the `docker-compose` command. Default is none. A full list of flags can be found in the [docker-compose documentation](https://docs.docker.com/compose/reference/#command-options-overview-and-help).

## Example usage

```yaml
steps:
  # need checkout before using compose-action
  - uses: actions/checkout@v3
  - uses: adrielcodeco/docker-compose-run-action@v1
    with:
      compose-file: './docker-compose.yml'
      service: my-service
```

### Using environment variables

```yaml
steps:
  - uses: actions/checkout@v3
  - uses: adrielcodeco/docker-compose-run-action@v1
    with:
      compose-file: './docker-compose.yml'
    env:
      MY_VARIABLE: 'test'
```
