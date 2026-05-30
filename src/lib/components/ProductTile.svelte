<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href?: string;
    src?: string;
    alt?: string;
    h?: string;
    p?: string;
    css?: string;
    children?: Snippet;
  }

  let { href, src, alt, h, p, css, children }: Props = $props();
</script>

<a {href} rel="external noopener noreferrer" target="_blank" class="product-tile {css}">
  {#if src}
    <div class="image">
      <img {src} alt={h || alt} />
    </div>
  {/if}

  {#if h}
    <h3>{h}</h3>
  {/if}

  {#if p}
    <p>{p}</p>
  {/if}

  {#if children}
    {@render children()}
  {/if}
</a>

<style lang="scss">
  a {
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid var(--grey-1);

    @include widescreen {
      min-height: 250px;
    }
    @include desktop {
      min-height: vw(250px);
    }
    @include tablet {
      min-height: 25vw;
    }
    @include mobile {
      width: 80vw;
      min-height: 80vw;
    }

    &:hover,
    &:focus {
      border-color: var(--grey-2);
      box-shadow: 0 3px 6px rgba(black, 0.15);

      img {
        transform: scale(1.05);
      }
    }

    .image {
      overflow: hidden;

      @include widescreen {
        width: 250px;
        height: 250px;
      }
      @include desktop {
        width: vw(250px);
        height: vw(250px);
      }
      @include tablet {
        // TODO
      }
      @include mobile {
        width: 80vw;
        height: 80vw;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition-property: transform;
        transition-duration: 300ms;
        transition-timing-function: var(--ease-out-expo);
      }

      & + h3 {
        margin-top: 10px;

        &:last-child,
        & + p {
          margin-bottom: 10px;
        }
      }
    }

    h3 {
      font-size: 16px;
      line-height: 140%;
      color: var(--grey-7);
      text-align: center;
      padding: 0 10px;
    }

    p {
      font-size: 16px;
      line-height: 140%;
      color: var(--grey-7);
      text-align: center;
      padding: 0 10px;
    }
  }
</style>
