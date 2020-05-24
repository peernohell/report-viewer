<style>
  .report {
    flex: 1;

    display: flex;
    flex-direction: column;

    overflow: auto;
    white-space: pre-wrap;
  }

</style>
<script>
  import JavascriptHeap from './JavascriptHeap.svelte';
  import GenericSection from './GenericSection.svelte';
  import { humanize } from './utils';

  export let report;
  
  const sections = Object.entries(report);
  // const header = sections.shift();
  // const javascriptStack = sections.shift();
  // const nativeStack = sections.shift();
</script>

<div class=report>
  {#each sections as [name, data]}
    {#if name === 'javascriptHeap'}
      <JavascriptHeap name={name} data={data} />
    {:else}
      <GenericSection name={name} data={data} />
    {/if}
  {/each}
</div>