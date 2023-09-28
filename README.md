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

kubectl apply -f mongo-deployment.yaml
kubectl apply -f mongo-service.yaml
kubectl apply -f nodejs-app-deployment.yaml
kubectl apply -f nodejs-app-service.yaml
kubectl apply -f nodejs-app.ingrress.yaml
kubectl apply -f redis-deployement.yaml
kubectl apply -f redis-service.yaml
```
OR
You can create all at once by applying apply command to kubernetes folder
``
kubectl apply -f kubernetes
``
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
Verify Deployment: 
```
kubectl get deployment
kubectl get pods
```
To check the status of services:
```
kubectl get services
```
To check the status of the ingress:
```
kubectl get ingress
```
Cleanup: When you're done with your deployment, you can uninstall the Helm release:
```
helm uninstall my-app-release
```






