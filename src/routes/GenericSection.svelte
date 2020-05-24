<style>

  section {
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px -10px 40px -30px rgba(0, 0, 0, 0.2);
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
  import Group from './Group.svelte';

  export let name;
  export let data;
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

<section>
  <h1>{humanize(name)}</h1>
  <Group sectionName={name} group={data} />
</section>

