<script lang="ts">
  import { resolve } from '$app/paths';
  import Button from '$lib/components/Button.svelte';
  import { PUBLIC_CDN_HOST as cdn } from '$env/static/public';
</script>

<section>
  <div class="liner">
    <a href={resolve('/interflux')}>
      <h2>Produits de brasage</h2>
      <img src="{cdn}/images/france/products-interflux@688x688.webp" alt="Interflux Electronics" />
      <Button size="medium" theme="primary green" label="en savoir plus" />
    </a>

    <a href={resolve('/kolver')}>
      <h2>Visseuses électriques</h2>
      <img src="{cdn}/images/france/products-kolver@688x688.webp" alt="Kolver" />
      <Button size="medium" theme="primary green" label="en savoir plus" />
    </a>
  </div>
</section>

<style lang="scss">
  section {
    background-color: var(--grey-0);
    height: 100%;
  }
  .liner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  a {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 12px 0 rgba(black, 0.15);
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: var(--ease-out-expo);
    img {
      width: 344px;
      height: 344px;
      aspect-ratio: 1/1;
    }
    &:hover,
    &:focus {
      box-shadow: 0 8px 16px 0 rgba(black, 0.2);
      transform: scale(1.02);
    }
  }
  h2 {
    color: var(--grey-7);
    font-family: var(--regular);
    font-size: 18px;
    line-height: 100%;
  }
</style>
