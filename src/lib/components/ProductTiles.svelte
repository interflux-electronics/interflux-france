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
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    align-items: start;
    width: 800px;

    :global {
      a {
        &.blue {
          background-color: var(--blue-3);
          border-color: var(--blue-4);

          img {
            width: 250px;
            height: 250px;
          }
        }

        &.orange {
          background-color: var(--orange-3);
          border-color: var(--orange-4);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;

          &:hover,
          &:focus {
            em {
              text-decoration: underline;
            }
          }

          a {
            width: 100%;
            height: 100%;
          }

          p {
            font-size: 26px;
            color: white;

            em {
              font-style: normal;
              font-family: 'Nunito Sans Bold', sans-serif;
            }
          }
        }
      }
    }
  }
</style>
