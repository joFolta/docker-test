# docker-test
Test app created for [Docker Crash Course for Absolute Beginners [NEW]](https://www.youtube.com/watch?v=pg19Z8LL06w) by TechWorld with Nana

![Screen Shot 2023-08-01 at 2 10 04 PM](https://github.com/joFolta/docker-test/assets/40876495/a66316dc-95e1-4913-9274-3843462ed2b7)

[Download Docker Desktop](https://www.docker.com/products/docker-desktop/)

(To run app locally (VS in a Docker container) `node src/server.js`)

----------------

## DOCKERFILE COMMANDS
- Dockerfile is the definition of the Docker container

### FROM 
- e.g. `FROM node:19-alpine`
- build from this base image
- get base images from DockerHub: https://hub.docker.com/
- "Set the baseImage to use for subsequent instructions. FROM must be the first instruction in a Dockerfile.
    - FROM baseImage
    - FROM baseImage:tag
    - FROM baseImage@digest"

### COPY
- e.g. `COPY src /app/`
- COPY <src from our machine> <dest inside the container>
- NOTE: final slash means 'create folder if doesn't exis in the container'
- "Copy files or folders from source to the dest path in the image's filesystem.
    - COPY hello.txt /absolute/path
    - COPY hello.txt relative/to/workdir"

### WORKDIR
- e.g. `WORKDIR /app`
- ~`cd` (change directory)
- e.g. WORKDIR /app
- "Set the working directory for any subsequent ADD, COPY, CMD, ENTRYPOINT, or RUN instructions that follow it in the Dockerfile.
    - WORKDIR /path/to/workdir
    - WORKDIR relative/path"

### RUN
- e.g. `RUN npm install`
- executes any shell command inside the container environment
- "Set the working directory for any subsequent ADD, COPY, CMD, ENTRYPOINT, or RUN instructions that follow it in the Dockerfile.
    - WORKDIR /path/to/workdir
    - WORKDIR relative/path"

### CMD
- e.g. `CMD ["node", "server.js"]`
- last command in the Dockerfile
- starts the application
- only 1 per Dockerfile
- "Provide defaults for an executing container. If an executable is not specified, then ENTRYPOINT must be specified as well. There can only be one CMD instruction in a Dockerfile.
    - CMD [ "/bin/ls", "-l" ]"

----------------

## BUILD THE DOCKER IMAGE
- `docker build -t node-app:0.01 .`
    - -t or --tag = sets the image's name and optionally a tag in the "name:tag" format
    - . = location of the Dockerfile (. means current directory)

----------------

## RUN A DOCKER CONTAINER
- `docker images` in the terminal to see the newly built "node-app" image
- `docker run --name myContainer01 -d -p 3000:3000 node-app:0.01`
    - -d = detached mode so that terminal is not blocked on the running container's logs (can no longer type commands)
    - -p = port binding; e.g. 3000:3000 => <localhost port>:<container port> 
    - --name = custom name for container
- `docker ps` to see running containers
- http://localhost:3000 in the browser should bring up the app running from the Docker container

----------------

## MISC
- `docker logs <container_id>` to see a containers' logs
- `docker ps` to see running containers
  - `docker ps -a` for ALL containers (running OR STOPPED)
- `docker pull nginx:1.23` pulls img from DockerHub
- `docker stop <container_id>` to stop container vs `docker run`
- ".dockerignore" is important similar to ".gitignore"