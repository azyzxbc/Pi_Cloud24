FROM nginx:alpine

COPY dist/test-ang/browser /usr/share/nginx/html
#COPY dist/basics/server /usr/share/nginx/html/server
#COPY dist/basics/prerendered-routes.json /usr/share/nginx/html/prerendered-routes.json

# Copy custom Nginx configuration if needed
COPY dist/test-ang/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]