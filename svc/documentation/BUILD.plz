subinclude("///pleasings//docker")

docker_image(
  name = "documentation",
  srcs = glob(["*"], ["node_modules", "dist"]),
  dockerfile = "Dockerfile",
  visibility = ["//svc/documentation/..."]
)
