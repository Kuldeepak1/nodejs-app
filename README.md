To start container with docker-compose
```
docker-compose up
```
Access the Nodejs application:
```
http://localhost:3000
```
To create Deployments,Service and ingress from manifest files.
```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml

```
Create Helm charts for your kubernetes based deployment
```
helm create my-app-chart
cd my-app-chart
```
Copy below files in /template folder
```
mongo-deployment.yaml
mongo-service.yaml
nodejs-app-deployment.yaml
nodejs-app-service.yaml
nodejs-app.ingress.yaml
redis-deployement.yaml
redis-service.yaml
```
Add values in values.yaml file:
```
mongodb:
  image: mongo
  rootUsername: root
  rootPassword: example

nodejsApp:
  image: kdphad/nodejs-app
  port: 3000

redis:
  image: redis

ingress:
  host: nodejs-app.com
```

Reference above values from values.yaml to to manifest files present in /template.
for example:
```
port: {{ .Values.nodejsApp.port }}
```
To deploy nodejs-app with helm:
```
cd path/to/my-app-chart
helm install my-app-release .
```






