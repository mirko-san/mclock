<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { tw } from 'twind'
  import { formatISO, format, parseISO } from 'date-fns'

  const timeFormat = $$props['time-format'];
  const zoneString = $$props['zone-string'];
  const dateFormat = $$props['date-format'];

  const dateColor = $$props['date-color'];
  const zoneColor = $$props['zone-color'];
  const timeColor = $$props['time-color'];

  let dateISO = formatISO(new Date());
  let timeString = format(parseISO(dateISO), timeFormat);
  let dateString = format(parseISO(dateISO), dateFormat);
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      dateISO = formatISO(new Date());
      timeString = format(parseISO(dateISO), timeFormat);
      dateString = format(parseISO(dateISO), dateFormat);
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="m-container">
  <div class={tw`inline-block m-8 px-6 pt-4 pb-6 rounded tracking-widest`}>
    <div class={tw`flex items-center mb-1`}>
      <div class={tw`text-xl text-[${dateColor}]`}>
        <span class="m-date">{dateString}</span>
      </div>
      <div class={tw`ml-4 text-sm text-[${zoneColor}]`}>
        <span class="m-zone">( {zoneString} )</span>
      </div>
    </div>

    <div class={tw`text-[${timeColor}] text-6xl align-middle`}>
      <span class="m-time">{timeString}</span>
    </div >
  </div>
</div>
