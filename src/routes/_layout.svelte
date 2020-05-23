<style>
	main {
		display: flex;
		flex: 1;
		background-color: white;
	}

	:global(html) {
		display: flex;
		height: 100vh;
		background-color: red;
	}

	:global(body, #sapper) {
		flex: 1;
		display: flex;
	}

</style>

<main>
	<slot></slot>
</main>