# learn-kubernetes

this is a sample app I'm using to learn K8S. 

Currently has a gateway service. The frontend app needs to be updated to be SSR.

## macOS
I use [Rancher Desktop](https://github.com/rancher-sandbox/rancher-desktop) to run the app locally.
## create services
to deploy the app, create the service

```
kim build -t learn-kubernetes/api:0.0.1 -f api/dockerfile ./api/
```

### deploy to kubernetes
```
kubectl apply -f .cicd/init.yml -f api/.cicd/manifest.yml
```

## linux
I'll update this section to run the app in [MicroK8S](https://microk8s.io/).