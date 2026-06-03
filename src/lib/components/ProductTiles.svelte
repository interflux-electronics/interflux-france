<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="product-tiles">
  {@render children()}
</div>

<style lang="scss">
  .product-tiles {
    list-style: none;
    display: grid;
    align-items: start;

    @include widescreen {
      grid-template-columns: repeat(3, 1fr);
      width: 800px;
      gap: 22px;
    }
    @include desktop {
      grid-template-columns: repeat(3, 1fr);
      width: vw(800px);
      gap: vw(22px);
    }
    @include tablet {
      grid-template-columns: repeat(3, 1fr);
      width: 80vw;
      gap: 2vw;
    }
    @include mobile {
      grid-template-columns: repeat(1, 1fr);
      gap: 3vw;
    }

    :global {
      a {
        &.blue {
          background-color: var(--blue-3);
          border-color: var(--blue-4);

          img {
            aspect-ratio: 1 / 1;

            @include widescreen {
              width: 250px;
              height: 250px;
            }
            @include desktop {
              width: vw(250px);
              height: vw(250px);
            }
            @include tablet {
              width: 25vw;
              height: 25vw;
            }
            @include mobile {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }
</style>
