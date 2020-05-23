<style>
  .stats-group {
    flex: 1;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .stats-group.column { flex-direction: column; }

  .stats {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    white-space: nowrap;
    /* padding: 5px; */
    /* background-color: rgba(0, 0, 0, 0.1); */
  }

  .stats-group:not(.column) .stats { margin: 0 10px; }
  .stats:first-of-type { margin-left: 0; }
  .stats:last-of-type { margin-right: 0; }

  .name {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .full-name {
    font-size: 10px;
    font-weight: 100;
  }

  .value {
    font-size: 22px;
    font-weight: 200;
  }

  .stats.string {
    flex-direction: row;
    text-align: left;
  }

  .stats.string .name {
    font-size: 14px;
    font-weight: 700;
  }
  .stats.string .name:after { content: ':'; margin-right: 4px; }

  .stats.string .value {
    font-size: 14px;
    font-weight: normal;
    white-space: break-spaces;
    word-break: break-word;
  }


  .sub-group {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }

  .sub-group h2 {
    border-bottom: 2px solid #fafafa;
    padding-bottom: 10px;
  }
</style>

<script>
  import { humanize } from './utils';
  export let value;
  export let context;

  const direction = ['header', 'environmentVariables', 'sharedObjects'].includes(context) ? 'column' : 'raw';

  function formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return '0 B';

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function humanizeNumber (value, name) {
    if (context.includes('Heap')) return formatBytes(value, 2);
    if (name.includes('Memory')) return formatBytes(value, 2);
    if (name.includes('Bytes')) return formatBytes(value, 2);
    return value;
  }

</script>

<div class="stats-group {direction}">
  {#each Object.entries(value) as [name, value]}
    {#if ['number', 'string'].includes(typeof value)}
      <div class="stats {typeof value}">
        <div class="name">{humanize(name.replace(/memory/i, ''))}</div>
        <!-- <div class="full-name">{humanize(name)}</div> -->
        <div class="value">{humanizeNumber(value, name)}</div>
      </div>
    {:else if value instanceof Array}
      {#each value as val}
        <svelte:self context={context} value={({[name]: val })} />
      {/each}
    {:else}
      <div class="sub-group">
        <h2>{humanize(name)}</h2>
        <svelte:self context={context} value={value} />
      </div>
    {/if}
  {/each}
</div>