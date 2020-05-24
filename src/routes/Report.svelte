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
  import Header from './Header.svelte';
  import JavascriptHeap from './JavascriptHeap.svelte';
  import GenericSection from './GenericSection.svelte';
  import { humanize } from './utils';

  export let report;
  
  const sections = Object.entries(report);
  console.log(sections)
  // const header = sections.shift();
  // const javascriptStack = sections.shift();
  // const nativeStack = sections.shift();
</script>

<div class=report>
  {#each sections as [name, data]}
    {#if name === 'header'}
      <Header name={name} data={data} />
    {:else if name === 'javascriptHeap'}
      <JavascriptHeap name={name} data={data} />
    {:else}
      <GenericSection name={name} data={data} />
    {/if}
  {/each}
</div>