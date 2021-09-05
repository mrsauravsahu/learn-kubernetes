subinclude("///pleasings//docker", "///pleasings//k8s")

docker_image(
  name = "image",
  srcs = ["//services/pdf"],
  dockerfile = "Dockerfile",
  base_image = "//common/docker:base"
)

k8s_config(
    name = "k8s",
    srcs = [
      "namespace.yaml",
      "service.yaml",
      "deployment.yaml",
    ],
    containers = ["//services/pdf/k8s:image"],
)