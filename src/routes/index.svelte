<style>
	.main {
		display: flex;
		flex: 1;
	}

	h1 {
		margin: 20px auto 0;
	}
</style>

<script>
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
</script>

<svelte:head>
	<title>Report Viewer</title>
</svelte:head>

<div class="main"	class:over={isOver} on:dragenter={handleDragEnter} on:dragleave={handleDragLeave}	on:drop={handleDragDrop} bind:this={main} ondragover="return false">
	{#if report}
		<pre style="overflow-y: scroll;">
			{JSON.stringify(report, undefined, '  ')}
		</pre>
	{:else}
		<h1>Drag your report</h1>
	{/if}
</div>
