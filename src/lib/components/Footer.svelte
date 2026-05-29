<script lang="ts">
  import Line from '$lib/components/Line.svelte';
  import { page } from '$app/state';

  let showLine = $derived(page.url.pathname != '/contact');
</script>

<footer>
  {#if showLine}
    <Line />
  {/if}

  <div class="blue-area">
    <div class="left">
      <p>À votre service depuis 1993</p>
    </div>

    <div class="center">
      <img
        src="https://cdn.interflux.com/images/logos/interflux-symbol-white.svg"
        alt="Interflux symbol"
      />
    </div>

    <div class="right">
      <p>
        Membre du <a href="https://interflux.group" target="_blank">Groupe Interflux</a>
      </p>
      <img
        src="https://cdn.interflux.com/images/logos/secondary-interflux-electronics-symbol-1-blue-0.svg"
        alt="Interflux symbol"
      />
    </div>
  </div>
</footer>

<style lang="scss">
  .blue-area {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: linear-gradient(89deg, #163759 -5.74%, #23578c 104.68%);
    .left,
    .right {
      width: 100%;
      p {
        color: white;
      }
    }
    .left {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .center {
      img {
        flex-shrink: 0;
        width: 86px;
        height: 60px;
        aspect-ratio: 43/30;
      }
    }
    .right {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      a {
        background-color: transparent;
        color: white;
        text-decoration: none;
        font-family: var(--semi-bold);
        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }
      img {
        width: 20px;
        height: 20px;
        aspect-ratio: 1/1;
        margin-left: 7px;
        transform: translateY(-4px);
      }
    }
  }
</style>
