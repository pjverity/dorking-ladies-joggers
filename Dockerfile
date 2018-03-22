FROM nginx

EXPOSE 80

COPY site /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d