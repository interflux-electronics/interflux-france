<script lang="ts">
  import Line from '$lib/components/Line.svelte';
  import { page } from '$app/state';

  let showLine = $derived(!['/', '/contact'].includes(page.url.pathname));
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
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(89deg, #163759 -5.74%, #23578c 104.68%);
    @include widescreen {
      height: 80px;
      gap: 30px;
    }
    @include desktop {
      height: vw(80px);
      gap: vw(30px);
    }
    @include tablet {
      height: 10vw;
      gap: 2vw;
    }
    @include mobile {
      flex-direction: column;
      gap: 0.5vw;
      padding: 7vw;
    }
    .left,
    .right {
      width: 100%;
      p {
        color: white;
      }
    }
    .left {
      display: flex;
      align-items: center;
      @include widescreen {
        justify-content: flex-end;
      }
      @include desktop {
        justify-content: flex-end;
      }
      @include tablet {
        justify-content: flex-end;
      }
      @include mobile {
        justify-content: center;
      }
    }
    .center {
      @include mobile {
        order: -1;
      }
      img {
        flex-shrink: 0;
        aspect-ratio: 43/30;
        @include widescreen {
          width: 86px;
          height: 60px;
        }
        @include desktop {
          width: vw(86px);
          height: vw(60px);
        }
        @include tablet {
          width: 8vw;
        }
        @include mobile {
          height: 12vw;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      @include widescreen {
        justify-content: flex-start;
      }
      @include desktop {
        justify-content: flex-start;
      }
      @include tablet {
        justify-content: flex-start;
      }
      @include mobile {
        justify-content: center;
      }
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
        aspect-ratio: 1/1;
        margin-left: 7px;
        @include widescreen {
          width: 20px;
          height: 20px;
          transform: translateY(vw(-4px));
        }
        @include desktop {
          width: vw(20px);
          height: vw(20px);
          transform: translateY(vw(-4px));
        }
        @include tablet {
          width: 2.5vw;
          height: 2.5vw;
        }
        @include mobile {
          width: 5vw;
          height: 5vw;
        }
      }
    }
  }
</style>
