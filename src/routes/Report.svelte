<style>
  .report {
    flex: 1;

    display: flex;
    flex-direction: column;

    overflow: auto;
    white-space: pre-wrap;
  }

  section {
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px -10px 40px -30px rgba(0, 0, 0, 0.2);
  }
</style>
<script>
  import Stats from './Stats.svelte';
  import { humanize } from './utils';

  export let report;
  
  const section = Object.entries(report);
  // const header = section.shift();
  // const javascriptStack = section.shift();
  // const nativeStack = section.shift();
</script>

<div class=report>
  {#each section as [name, value]}
    <section>
      <h1>{humanize(name)}</h1>
      <Stats context={name} value={value} />
    </section>
  {/each}
</div>