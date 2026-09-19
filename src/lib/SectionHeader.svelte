<!-- lib/SectionHeader.svelte -->
<script>
  export let title;
</script>

<section class="p-4 bg-base-200">
  <h1 class="flex justify-center text-6xl font-bold font-header py-5">{title}</h1>
  <slot />
</section>