#!/bin/bash

docker build -t dwg:latest .
docker run -it --rm --name my-running-script -v "$PWD":/usr/src/myapp -w /usr/src/myapp dwg:latest /bin/bash