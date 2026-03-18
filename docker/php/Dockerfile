FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    zip \
    libicu-dev \
    libzip-dev \
    libonig-dev \
    libxml2-dev \
    gnupg \
    ca-certificates \
    && docker-php-ext-install \
        pdo_mysql \
        intl \
        zip \
        mbstring \
        bcmath

# instalar Node.js (solo una vez)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

RUN a2enmod rewrite

# instalar composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri -e "s!/var/www/html!${APACHE_DOCUMENT_ROOT}!g" \
    /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www/html