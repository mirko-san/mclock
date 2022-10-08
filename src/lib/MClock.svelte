<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  let date = new Date().toLocaleTimeString();
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      date = new Date().toLocaleTimeString();
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div>
  <span>{date || ""}</span>
</div>

<style>
  div {
    color: black;
  }
</style>
