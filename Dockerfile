FROM nginx:alpine

RUN mkdir /build
WORKDIR /build

ENV HUGO_VERSION 0.37.1
ENV HUGO_BINARY hugo_${HUGO_VERSION}_linux-64bit
# Checksum must match HUGO_VERSION
ENV HUGO_CHECKSUM f7b57c4d9e406719e41c84a4a70d6b332826bf356a15615ed02a450134796f81

RUN apk upgrade --update-cache \
  && apk add nodejs \
             yarn

RUN mkdir /usr/local/hugo
ADD https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY}.tar.gz /usr/local/hugo/
RUN echo "$HUGO_CHECKSUM  /usr/local/hugo/$HUGO_BINARY.tar.gz" | sha256sum -c - \
  && tar xzf /usr/local/hugo/${HUGO_BINARY}.tar.gz -C /usr/local/hugo/ \
  && ln -s /usr/local/hugo/hugo /usr/local/bin/hugo \
  && rm /usr/local/hugo/${HUGO_BINARY}.tar.gz

ADD package.json ./package.json
RUN yarn install

ADD . .

RUN yarn run build \
  && mv ./public/* /usr/share/nginx/html

# Remove everything except the build
RUN rm /usr/local/hugo/hugo \
  && apk del nodejs yarn \
  && rm -r *
