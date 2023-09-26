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
package your Helm chart:
```
package nodejs-app
```



