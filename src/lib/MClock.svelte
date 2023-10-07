<svelte:options tag="m-clock" />

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { twind, cssom, observe } from '@twind/core';
  import config from '../../twind.config';
  import { formatISO, format, parseISO } from 'date-fns';
  import { colord } from 'colord';

  const sheet = cssom(new CSSStyleSheet());

  const tw = twind(config, sheet);

  const shadowRoot = document.getElementById('m-clock').shadowRoot;
  shadowRoot.adoptedStyleSheets = [sheet.target];

  observe(tw, shadowRoot);

  const timeFormat = $$props['time-format'];
  const zoneString = $$props['zone-string'];
  const dateFormat = $$props['date-format'];

  const bgColor = $$props['bg-color'];
  const bgOpacity = $$props['bg-opacity'];
  const internalBgColor = colord(bgColor).alpha(Number.parseFloat(bgOpacity));
  const internalBgColorStr = internalBgColor.toRgbString().replace(/ /g, '');

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
  <div
    class={`inline-block m-8 px-6 pt-4 pb-6 bg-[${internalBgColorStr}] rounded tracking-widest`}
  >
    <div class="flex items-center mb-1">
      <div class={`text-xl text-[${dateColor}]`}>
        <span class="m-date">{dateString}</span>
      </div>
      <div class={`ml-4 text-sm text-[${zoneColor}]`}>
        <span class="m-zone">( {zoneString} )</span>
      </div>
    </div>

    <div class={`text-[${timeColor}] text-6xl align-middle`}>
      <span class="m-time">{timeString}</span>
    </div>
  </div>
</div>
