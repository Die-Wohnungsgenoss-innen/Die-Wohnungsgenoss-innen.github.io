FROM php:7.4-cli

RUN apt-get update \
     && apt-get install -y libzip-dev \
     && docker-php-ext-install zip

RUN apt-get update && apt-get install -y libzip-dev zlib1g-dev chromium && docker-php-ext-install zip
ENV PANTHER_NO_SANDBOX 1