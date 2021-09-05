# learn-kubernetes

This is a sample app I'm using to learn K8S. Currently has an api service & a frontend app which uses SSR.

## deps

You'll need to have [please.build](https://please.build/) installed.

## macOS
I use [Docker Desktop](https://docs.docker.com/desktop/mac/install/) to run the app locally.

## inject secrets
```bash
. ./template.envrc
```

## create services
to deploy the app, create the services

```bash
plz build //services/...
plz run parallel //services/api //services/documentation
```

### deploy to kubernetes
```
kubectl apply -f ./.cicd # --> creates the kubernetes namespace

plz run parallel //services/api/k8s:k8s_push //services/documentation/k8s:k8s_push
```

### cleanup
```
plz run parallel //services/api/k8s:k8s_cleanup //services/documentation/k8s:k8s_cleanup

kubectl delete -f .cicd
```

### access the documentation site
use this command to forward the port from the documentation service
```bash
kubectl port-forward service/documentation-svc -n $K8S_NAMESPACE 3000:80
```

you can navigate to `http://localhost:8080`

## linux
I'll update this section to run the app in [MicroK8S](https://microk8s.io/).