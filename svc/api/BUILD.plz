subinclude("///pleasings//docker")

docker_image(
  name = "api",
  srcs = glob(["*"], ["node_modules", "dist"]),
  dockerfile = "Dockerfile",
  visibility = ["//svc/api/..."]
)
