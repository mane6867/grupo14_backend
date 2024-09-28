# Usa una imagen base de Ruby
FROM ruby:3.1.0

# Instala dependencias necesarias
RUN apt-get update -qq && apt-get install -y \
  build-essential \
  libpq-dev \
  nodejs \
  postgresql-client

# Crea un directorio para la aplicación
WORKDIR /mqtt-client

# Copia el Gemfile y el Gemfile.lock
COPY Gemfile /mqtt-client/Gemfile
COPY Gemfile.lock /mqtt-client/Gemfile.lock

# Instala Bundler y las gemas
RUN gem install bundler -v '2.3.3'
RUN bundle install

# Copia el archivo Ruby que necesita ejecutarse
COPY mqtt.rb /mqtt-client/mqtt.rb

# Comando para ejecutar el script
CMD ["ruby", "mqtt.rb"]
