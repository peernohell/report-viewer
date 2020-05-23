<style>
	.main {
		width: 100vw;
		height: 100vh;
		flex: 1;

		display: flex;
	}

	h1 {
		margin: 20px auto 0;
	}
</style>

<script>
	import Report from './Report.svelte';
	let main;
	let isOver = false;
	let report;
	function handleDragEnter () {
		if (event.target !== main) return;
		console.log("TODO DRAG enter", event.target)
		isOver = true;
	}

	function handleDragLeave (event) {
		if (event.target !== main) return;
		console.log("TODO DRAG Leave", event.target, event.currentTarget)
	}

	async function handleDragDrop(event) {
		console.log('drop')
		event.preventDefault();
		isOver = false;
		const json = await event.dataTransfer.files[0].text();
		report = JSON.parse(json);
	}

	async function autoload () {
		if (!globalThis.fetch) return;

		const res = await globalThis.fetch(`/report.json`);
		try {
			report = await res.json();
		} catch (err) {
			console.log('failed to load report', err);
		}
	}

	autoload();
</script>

<svelte:head>
	<title>Report Viewer</title>
</svelte:head>

<div class="main"	class:over={isOver} on:dragenter={handleDragEnter} on:dragleave={handleDragLeave}	on:drop={handleDragDrop} bind:this={main} ondragover="return false">
	{#if report}
		<Report report={report} />
	{:else}
		<h1>Drag your report</h1>
	{/if}
</div>
