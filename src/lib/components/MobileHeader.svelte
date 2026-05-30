<script lang="ts">
  import { header } from '$lib/state/header.svelte';
  import { scroll } from '$lib/state/scroll.svelte';
  import { mobile, tablet } from '$lib/state/media.svelte';
  import { innerHeight } from 'svelte/reactivity/window';
  import { resolve } from '$app/paths';
  import Svg from '$lib/components/Svg.svelte';

  let expanded = $state(false);

  let topHeight = $state(0);
  let mainHeight = $state(0);
  let midHeight = $derived.by(() => {
    if (!expanded) {
      return topHeight;
    }

    return 0;
  });

  let navHeight = $derived.by(() => {
    if (!expanded) {
      return topHeight;
    }

    return Math.max(topHeight + midHeight, innerHeight.current || 0);
  });

  let nearTop = $derived(scroll.currentY < 100);

  let topBarTitle = $derived(header.title);

  let classes = $derived([
    expanded ? 'expanded' : 'collapsed',
    nearTop ? 'near-top' : 'not-near-top',
    scroll.goingDown ? 'scrolling-down' : 'scrolling-up'
  ]);
</script>

{#if mobile.current || tablet.current}
  <header id="mobile" class={classes}>
    <nav style:height={`${navHeight}px`}>
      <div id="top" bind:offsetHeight={topHeight}>
        <div class="left">
          <a id="logo" href={resolve('/')} onclick={() => (expanded = false)}>
            <div class="clip">
              <Svg name="primary-interflux-france-logo" />
            </div>
          </a>
        </div>

        <div class="center">
          <h1>{topBarTitle}</h1>
        </div>

        <div class="right">
          <button
            id="hamburger"
            class="square {expanded ? 'expanded' : 'collapsed'}"
            onclick={() => (expanded = !expanded)}
          >
            <div class="icon">
              <Svg name="hamburger" />
            </div>
          </button>
        </div>
      </div>

      <div id="mid">
        <div id="main" class="menu" bind:offsetHeight={mainHeight}>
          <a href={resolve('/interflux')} onclick={() => (expanded = false)} class="full-width">
            Produits de brasage
          </a>

          <a href={resolve('/kolver')} onclick={() => (expanded = false)} class="full-width">
            Visseuses électriques
          </a>

          <a href={resolve('/assistance')} onclick={() => (expanded = false)} class="full-width">
            Assistance technique
          </a>

          <a href={resolve('/contact')} onclick={() => (expanded = false)} class="full-width">
            Contactez-nous
          </a>

          <div class="spacer"></div>
        </div>
      </div>
    </nav>

    <div class="placeholder"></div>
  </header>
{/if}

<style lang="scss">
  .placeholder {
    background-color: var(--blue-5);
    @include tablet {
      height: 14vw;
    }
    @include mobile {
      height: 18vw;
    }
  }

  // z-index: 1 is for #page
  // z-index: 2 is for header#mobile
  // z-index: 3 is for #modal
  header#mobile {
    position: relative;
    z-index: 2;

    &.collapsed {
      &.scrolling-down.not-near-top {
        nav {
          transform: translateY(-21vw);
        }
      }

      nav {
        position: fixed;
        background: linear-gradient(90deg, #163759 -5.74%, #23578c 104.68%);
        opacity: 0.95;
        #mid {
          .menu {
            opacity: 0;
            transform: translateY(-10vw);
          }
        }
      }
    }

    &.expanded {
      nav {
        position: relative;
        opacity: 1;
        background: linear-gradient(180deg, #163759 -5.74%, #23578c 104.68%);
      }

      #logo {
        .clip {
          @include tablet {
            top: 16vw;
            left: 27vw;
            width: 46vw;
            height: 14vw;
          }
          @include mobile {
            top: 22vw;
            left: 13vw;
            width: 70vw;
            height: 19vw;
          }
          :global {
            svg {
              @include tablet {
                width: 48vw;
                transform: translate(-0.8vw, -0.5vw);
              }
              @include mobile {
                width: 71vw;
                transform: translate(-0.7vw, -1.8vw);
              }
            }
          }
        }
      }

      button#hamburger {
        :global {
          path:nth-child(1) {
            transform: rotate(45deg) translate(0%, 30%);
          }
          path:nth-child(2) {
            transform: scale(1.2, 0);
            opacity: 0;
          }
          path:nth-child(3) {
            transform: rotate(-45deg) translate(0%, -30%);
          }
        }
      }

      #mid {
        .menu {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }

  nav {
    transition: all var(--ease-out-expo) 800ms;
    width: 100vw;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 10; // max

    @include tablet {
      min-height: 9vw;
    }
    @include mobile {
      min-height: 18vw;
    }

    #top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all var(--ease-out-expo) 800ms;
      transition-property: background-color, transform;
      position: relative;
      z-index: 1; // to raise the logo on top #mid

      .left,
      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        @include tablet {
          width: 9vw;
          height: 9vw;
        }
        @include mobile {
          width: 18vw;
          height: 18vw;
        }
      }
      .center {
        width: 100%;
      }

      #logo {
        position: absolute;
        transition: all var(--ease-out-expo) 800ms;
        @include tablet {
          margin: 0;
          width: 9vw;
          height: 9vw;
        }
        @include mobile {
          width: 17vw;
          height: 17vw;
        }
        .clip {
          position: absolute;
          overflow: hidden;
          background: white;
          z-index: 1;
          transition: all var(--ease-out-expo) 800ms;
          top: 0;
          left: 0;
          background-color: var(--blue-3);
          @include tablet {
            width: 9vw;
            height: 9vw;
          }
          @include mobile {
            width: 17vw;
            height: 17vw;
          }
          :global {
            svg {
              height: auto;
              transition: all var(--ease-out-expo) 800ms;
              @include tablet {
                width: 48vw;
                transform: translate(-7.8vw, -1.7vw);
              }
              @include mobile {
                width: 94vw;
                transform: translate(-16.5vw, -3.7vw);
              }
            }
          }
        }
      }

      h1 {
        font-family: var(--extra-bold);
        color: white;
        line-height: 120%;
        text-align: center;
        overflow: hidden;
        @include tablet {
          font-size: 3.2vw;
          max-height: calc(3.625vw * 1.3 * 2); // max 2 lines
        }
        @include mobile {
          font-size: 5.625vw;
          max-height: calc(5.625vw * 1.3 * 2); // max 2 lines
        }
      }
    }

    #mid {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;

      .menu {
        position: absolute;
        top: 0;
        width: 100vw;
        display: flex;
        flex-direction: column;
        transition: all var(--ease-out-expo) 800ms;
        &#main {
          padding-top: 30vw; // to allow logo to show
        }
        .spacer {
          height: 30vw;
        }
      }
    }
  }

  // For the mobile chevron navigation buttons
  // For the mobile hamburger button
  button.square {
    align-items: center;
    background: none;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    outline: 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    color: white;
    transition: background-color var(--ease-out-expo) 300ms;

    @include tablet {
      width: 6vw;
      height: 6vw;
      border: 0.325vw solid rgba(white, 0.2);
      border-radius: 0.6vw;
    }
    @include mobile {
      width: 12vw;
      height: 12vw;
      border: 0.625vw solid rgba(white, 0.2);
      border-radius: 1vw;
    }

    &:hover,
    &:focus {
      box-shadow: 0 0 0 1px white;
      background: rgba(white, 0.1);
      border-color: white;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      :global {
        svg {
          width: auto;
          height: 100%;
        }
      }
    }

    &#hamburger {
      :global {
        path {
          transition: all 300ms ease;
          transition-property: transform, opacity;
          transform-origin: center;
        }
      }
    }

    :global {
      svg {
        &.hamburger {
          @include tablet {
            height: 3.2vw;
          }
          @include mobile {
            height: 6.5vw;
          }
          width: auto;
        }
        [fill] {
          fill: white;
        }
      }
    }
  }

  a.full-width {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    width: 100vw;
    color: white;
    transition: all var(--ease-out-expo) 400ms;
    border-top: 1px solid rgba(white, 0.2);
    border-radius: 0;

    @include tablet {
      font-size: 3vw;
      border-radius: 0.4vw;
      padding: 6vw 2vw;
    }
    @include mobile {
      font-size: 5.6vw;
      border-radius: 0.8vw;
      padding: 8vw 3vw;
    }

    &:last-of-type {
      border-bottom: 1px solid rgba(white, 0.2);
    }

    &:hover,
    &:focus {
      box-shadow: inset 0 0 0 2px white;
      background: rgba(white, 0.1);
    }

    :global {
      svg {
        @include tablet {
          max-width: 5vw;
          max-height: 5vw;
          margin-right: 3vw;
        }
        @include mobile {
          max-width: 8vw;
          max-height: 8vw;
          margin-right: 4vw;
        }
        [fill] {
          fill: white;
        }
      }
    }
  }
</style>
