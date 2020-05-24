<style>
 section {
   display: flex;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px -10px 40px -30px rgba(0, 0, 0, 0.2);
  }

  h2 { margin: 0; }

  .error {
    padding: 1px 3px;
    color: rgb(200, 20, 20);
    background-color: rgb(249, 135, 135);
    border: 1px solid rgb(200, 20, 20);
    border-radius: 4px;
  }

  .number {
    font-family: monospace;
  }
</style>

<script>
  import { humanize } from './utils';
  import Group from './Group.svelte';

  export let name;
  export let data;

  function formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return '0 B';

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function humanizeNumber (value, name) {
    if (name.includes('Memory')) return formatBytes(value, 2);
    if (name.includes('Bytes')) return formatBytes(value, 2);
    return value;
  }

  function pad (num, minLength) {
    return `${num}`.padStart(minLength);
  }
</script>

<section>
  <div style="flex: 1; margin-right: 20px">
    <h2>Report</h2>
    <div>Report {data.filename} version {data.reportVersion} generate by <span class="error">{data.trigger}</span> due to a "{data.event}" on {new Date(data.dumpEventTime).toLocaleDateString()}</div>
    <h2>Process</h2>
    <div>PID {data.processId}, executed with "{data.commandLine.join(' ')}" in path "{data.cwd}" with node {data.nodejsVersion}<br>Components version:<br>{Object.entries(data.componentVersions).map(component => component.join(': ')).join(', ')}</div>
    <h2>Computer</h2>
    <div>OS: {data.osName} {data.osMachine} {data.osRelease} {data.platform}</div>
    <div>OS version: {data.osVersion}</div>
    <div>Host: {data.host}</div>
  </div>
  <div>
    <h2>CPU</h2>
    <div>Model: {data.cpus[0].model} (x{data.cpus.length})</div>
    {#each data.cpus as cpu}
      <div>speed {cpu.speed}, User <span class="number">{pad(cpu.user, 8)}</span>, System <span class="number">{pad(cpu.sys, 8)}</span>, Idle <span class="number">{pad(cpu.idle, 8)}</span>, Nice {cpu.nice}, IRQ {cpu.irq}</div>
    {/each}
  </div>
</section>
