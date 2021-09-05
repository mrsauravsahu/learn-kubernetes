<script context="module">
	export async function preload() {
		const services = ['http://api-svc.learn-kubernetes'];

		const requestPromises = services.map(
			(serviceUrl) =>
				new Promise(async (resolve) => {
					const response = await this.fetch(serviceUrl);
					const responseJson = await response.json();
					console.log(responseJson);
					resolve({
						code: response.status,
						body: responseJson,
					});
				})
		);

		return { serviceData: await Promise.allSettled(requestPromises) };
	}
</script>

<script>
	export let serviceData;
</script>

<h1>Learning Kubernetes</h1>

<h2>Connected Services</h2>
<ul>
	{#each serviceData as service}
		<li>
			<div>{service.value.body.name}</div>
			<div>Status: {service.value.code}</div>
		</li>
	{/each}
</ul>
