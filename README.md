# template-monorepo

This is how I'd organize a cross-language monorepo which handles all CI/CD concerns and enables developers to focus on the business solution. This currently has an api service (nestjs on node) & a frontend app (svelte + sapper) which uses SSR.

## deps

You'll need to have [please.build](https://please.build/) installed.

---

## platforms

### macOS
I use [Docker Desktop](https://docs.docker.com/desktop/mac/install/) to run the app locally.

### linux

I use [MicroK8S](https://microk8s.io/) to run the app on Linux.

You'll need to install it and also enable the built-in registry to run the app, which can be done with `microk8s enable registry`

---

### inject secrets
```bash
. ./template.envrc
```

### create services
to deploy the app, create the services

```bash
plz build //services/...
plz run parallel //services/api //services/documentation
```

### [extra step for linux] push images to docker registry
Because the images need to be on the microk8s docker registry for this to work, we need to push the images manually. (need to try and automate this later)
```
plz run parallel //services/api:api_push //services/documentation:documentation_push
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

#### on macos

use this command to forward the port from the documentation service
```bash
kubectl port-forward service/documentation-svc -n $K8S_NAMESPACE 3000:80
```
you can navigate to `http://localhost:8080`

#### on linux
with microk8s on Linux, the services will directly be available on the NodePort so, no need to use port-forward.

You can get the port with 
```
kubectl -n learn-kubernetes describe svc/documentation-svc | grep NodePort
```
