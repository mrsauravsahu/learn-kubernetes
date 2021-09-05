# learn-kubernetes

this is a sample app I'm using to learn K8S. 

Currently has a gateway service. The frontend app needs to be updated to be SSR.

## macOS
I use [Rancher Desktop](https://github.com/rancher-sandbox/rancher-desktop) to run the app locally.

## inject secrets
```bash
. ./template.envrc
```
## create services
to deploy the app, create the service

```bash
for i in `ls -1 services`; do kim build -t $K8S_NAMESPACE/$i:0.0.1 -f services/$i/dockerfile services/$i; done
```

### deploy to kubernetes
```
kubectl apply -f ./.cicd -f services/api/.cicd -f services/documentation/.cicd 
```

### access the documentation site
use this command to get the port for documentation site.
```bash
kubectl describe service/documentation -n $K8S_NAMESPACE | grep NodePort:
# NodePort:                 <unset>  30813/TCP
```

you can navigate to `http://localhost:<PORT>`

## linux
I'll update this section to run the app in [MicroK8S](https://microk8s.io/).