<script lang="ts">
  import { header } from '$lib/state/header.svelte';
  import { footer } from '$lib/state/footer.svelte';
  import { page } from '$lib/state/page.svelte';
  import { mobile, tablet } from '$lib/state/media.svelte';
  import MobileHeader from '$lib/components/MobileHeader.svelte';
  import DesktopHeader from '$lib/components/DesktopHeader.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { browser } from '$app/environment';
  import type { Device } from '$lib/types/Device';
  import type { Snippet } from 'svelte';

  let { device, children }: { device?: Device; children: Snippet } = $props();

  // During SSR, use the user agent to detect mobile / desktop
  // During CSR, use screen width to detect mobile / desktop
  let isMobile = $derived(browser ? mobile.current : device?.type === 'mobile');
  let isTablet = $derived(browser ? tablet.current : device?.type === 'tablet');
  let narrowView = $derived(isMobile || isTablet);
</script>

{#if header.visible && narrowView}
  <MobileHeader />
{/if}

<div
  id="page"
  class={page.frozen ? 'frozen' : 'scrollable'}
  style:top={page.frozen ? `-${page.lastScroll}px` : undefined}
>
  {#if header.visible && !narrowView}
    <DesktopHeader />
  {/if}

  <main>
    {@render children()}
  </main>

  {#if footer.visible}
    <div class="spacer"></div>
    <Footer />
  {/if}
</div>

<style lang="scss">
  #page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;
    &.scrollable {
      position: relative;
    }
    &.frozen {
      position: fixed;
      width: 100%;
      z-index: 1;
    }
    :global {
      header,
      main,
      footer {
        flex-shrink: 0;
      }
    }
    main {
      // This prevents the blue footer from appearing when pages are loading.
      // header = 80px high
      // footer = 90px high
      // min-height: calc(100vh - 80px - 90px);
      min-height: 100vh;
    }
    .spacer {
      // Take up all remaining space instead of sticking the <footer> against the <header>
      height: 100%;
    }
  }
</style>
