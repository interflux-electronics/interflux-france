<script lang="ts">
  import Svg from '$lib/components/Svg.svelte';
  import type { Snippet } from 'svelte';
  import type { Icon } from '$lib/types/Icon';

  interface Props {
    label?: string;
    size?: 'small' | 'medium' | 'large' | 'no-size';
    theme?:
      | 'primary green'
      | 'primary orange'
      | 'secondary ghost'
      | 'tertiary ghost'
      | 'full-width'
      | 'no-theme';
    icon?: Icon;
    iconPosition?: 'left' | 'right';
    url?: string;
    onClick?: (event: MouseEvent) => void;
    id?: string;
    class?: string;
    isBusy?: boolean;
    children?: Snippet;
  }

  let {
    label,
    size = 'no-size',
    theme = 'no-theme',
    icon,
    iconPosition = 'left',
    url,
    onClick,
    id,
    class: classNamePassedIn = '',
    isBusy,
    children
  }: Props = $props();

  let classNames = $derived(
    [
      'button',
      size,
      theme,
      icon ? `has-icon icon-${iconPosition} ${icon}` : 'no-icon',
      isBusy ? 'busy' : 'idle',
      classNamePassedIn
    ].join(' ')
  );

  let rel = $derived(url && url.startsWith('/') ? undefined : 'external noopener noreferrer');
  let target = $derived(url && url.startsWith('/') ? undefined : '_blank');
</script>

{#if url}
  <!-- eslint-disable svelte/no-navigation-without-resolve  -->
  <a href={url} {id} class={classNames} {rel} {target} onclick={onClick}>
    {#if icon}
      <div class="icon">
        <Svg name={icon} />
      </div>
    {/if}

    {#if children}
      {@render children()}
    {/if}

    {#if label}
      <span>{label}</span>
    {/if}
  </a>
{:else}
  <button {id} onclick={onClick} class={classNames}>
    {#if icon}
      <div class="icon">
        <Svg name={icon} />
      </div>
    {/if}

    {#if children}
      {@render children()}
    {/if}

    {#if label}
      <span>{label}</span>
    {/if}
  </button>
{/if}

<style lang="scss">
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: none;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;

    // We generally avoid animations on buttons because they need to respond and feel snappy.
    // The exception is the box shadow.
    transition: box-shadow 200ms var(--ease-out-expo);

    // All buttons slightly compress when clicked
    &:active {
      transform: scale(0.98);
    }

    &.icon-left {
      flex-direction: row;
    }

    &.icon-right {
      flex-direction: row-reverse;
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

    // Sizes

    &.large {
      font-family: var(--bold);
      border: 1px solid transparent;

      @include widescreen {
        font-size: 18px;
        line-height: 46px;
        height: 46px;
        border-radius: 4px;
        padding: 0 22px;
      }
      @include desktop {
        font-size: vw(18px);
        line-height: vw(46px);
        height: vw(46px);
        border-radius: vw(4px);
        padding: 0 vw(22px);
      }
      @include tablet {
        font-size: vw-tablet(18px);
        line-height: vw-tablet(46px);
        height: vw-tablet(46px);
        border-radius: vw-tablet(4px);
        padding: 0 vw-tablet(22px);
      }
      @include mobile {
        font-size: vw-mobile(18px); // TODO: review
        line-height: vw-mobile(46px); // TODO: review
        height: vw-mobile(46px); // TODO: review
        border-radius: vw-mobile(4px); // TODO: review
        padding: 0 vw-mobile(22px); // TODO: review
      }

      .icon {
        @include widescreen {
          height: 18px;
        }
        @include desktop {
          height: vw(18px);
        }
        @include tablet {
          height: vw-tablet(18px);
        }
        @include mobile {
          height: vw-mobile(18px); // TODO: review
        }
      }

      &.has-icon {
        @include widescreen {
          gap: 12px;
        }
        @include desktop {
          gap: vw(12px);
        }
        @include tablet {
          gap: vw-tablet(12px);
        }
        @include mobile {
          gap: vw-mobile(12px); // TODO: review
        }
      }
    }

    &.medium {
      font-family: var(--semi-bold);
      border: 1px solid transparent;

      @include widescreen {
        font-size: 16px;
        line-height: 34px;
        height: 34px;
        border-radius: 3px;
        padding: 0 16px;
      }
      @include desktop {
        font-size: vw(16px);
        line-height: vw(34px);
        height: vw(34px);
        border-radius: vw(3px);
        padding: 0 vw(16px);
      }
      @include tablet {
        font-size: vw-tablet(16px);
        line-height: vw-tablet(34px);
        height: vw-tablet(34px);
        border-radius: vw-tablet(3px);
        padding: 0 vw-tablet(16px);
      }
      @include mobile {
        font-size: vw-mobile(16px);
        line-height: vw-mobile(34px);
        height: vw-mobile(34px);
        border-radius: vw-mobile(3px);
        padding: 0 vw-mobile(16px);
      }

      .icon {
        @include widescreen {
          height: 16px;
        }
        @include desktop {
          height: vw(16px);
        }
        @include tablet {
          height: vw-tablet(16px);
        }
        @include mobile {
          height: vw-mobile(16px); // TODO: review
        }
      }

      &.has-icon {
        @include widescreen {
          gap: 10px;
        }
        @include desktop {
          gap: vw(10px);
        }
        @include tablet {
          gap: vw-tablet(10px);
        }
        @include mobile {
          gap: vw-mobile(10px); // TODO: review
        }
      }
    }

    // Styles

    &.primary {
      color: white;

      &.green {
        background: var(--green-1);
        border-color: var(--green-2);

        &:hover,
        &:focus {
          background: var(--green-2);
          border-color: var(--green-3);
          box-shadow:
            0 0 0 1px var(--green-3),
            0 3px 6px rgba(black, 0.2);
        }
      }

      &.orange {
        background: var(--orange-1);
        border-color: var(--orange-3);

        &:hover,
        &:focus {
          background: var(--orange-2);
          border-color: var(--orange-4);
          box-shadow:
            0 0 0 1px var(--orange-4),
            0 3px 6px rgba(black, 0.2);
        }
      }

      :global {
        svg {
          [fill] {
            fill: white;
          }
        }
      }
    }

    &.secondary {
      background: white;
      border-color: var(--grey-2);
      color: var(--grey-6);

      &:hover,
      &:focus {
        color: var(--blue-0);
        border-color: var(--blue-0);
        box-shadow:
          0 0 0 1px var(--blue-0),
          0 3px 6px rgba(black, 0.2);
      }

      &.ghost {
        color: white;
        border-radius: 3px;
        background-color: hsl(var(--blue-5-rgb) / 0.8);
        border: 2px solid var(--blue-3);
        &:hover,
        &:focus {
          background: rgba(white, 0.2);
          border-color: white;
          :global {
            svg {
              [fill] {
                fill: white;
              }
            }
          }
        }

        :global {
          svg {
            [fill] {
              fill: white;
            }
          }
        }
      }
    }

    &.tertiary {
      padding: 0;
      transition: padding 300ms var(--ease-out-expo);

      &.ghost {
        color: white;

        &:hover,
        &:focus {
          background: rgba(white, 0.1);

          &.medium {
            @include widescreen {
              padding: 0 10px;
            }
            @include desktop {
              padding: 0 vw(10px);
            }
            @include tablet {
              padding: 0 vw-tablet(10px);
            }
            @include mobile {
              padding: 0 vw-mobile(10px); // TODO: review
            }
          }
        }

        :global {
          svg {
            [fill] {
              fill: white;
            }
          }
        }
      }
    }
  }
</style>
