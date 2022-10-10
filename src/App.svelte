<script lang="ts">
  import MClock from './lib/MClock.svelte'
</script>

<main>
  <div>
    <MClock
      time-format="HH:mm:ss"
      zone-string="Asia/Tokyo"
      date-format="MM/dd E"
      date-color="#111827"
      zone-color="#111827"
      time-color="#111827"
    />
  </div>
</main>
