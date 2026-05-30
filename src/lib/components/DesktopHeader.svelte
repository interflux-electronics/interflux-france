<script lang="ts">
  import { PUBLIC_CDN_HOST as cdn } from '$env/static/public';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import Button from '$lib/components/Button.svelte';

  let overlap = $derived(page.url.pathname != '/');
</script>

<header id="desktop" class:overlap>
  <nav>
    <div class="left">
      <a href={resolve('/')} id="logo">
        <img
          src="{cdn}/images/logos/interflux-france-logo-white.svg"
          width="396"
          height="100"
          alt="Interflux Electronics"
        />
      </a>
    </div>

    <ul class="center">
      <li id="brasage">
        <a href={resolve('/interflux')}>
          <span>Produits de brasage</span>
        </a>
      </li>

      <li id="visseuses">
        <a href={resolve('/kolver')}>
          <span>Visseuses électriques</span>
        </a>
      </li>

      <li id="docs">
        <a href={resolve('/assistance')}>
          <span>Assistance technique</span>
        </a>
      </li>
    </ul>

    <div class="right">
      <Button
        url={resolve('/contact')}
        label="Contactez-nous"
        icon="email-1"
        theme="primary orange"
        size="medium"
      />
    </div>
  </nav>
</header>

<style lang="scss">
  @use 'sass:color';

  header {
    position: relative;
    z-index: 3;
    background: linear-gradient(90deg, rgba(23, 56, 90, 1) 0.41%, rgba(35, 87, 140, 1) 100%);

    &.overlap {
      background: linear-gradient(90deg, rgba(23, 56, 90, 0.9) 0.41%, rgba(35, 87, 140, 0.9) 100%);

      @include widescreen {
        margin-bottom: -80px;
      }
      @include desktop {
        margin-bottom: vw(-80px);
      }
    }

    @include widescreen {
      height: 80px;
      box-shadow: 0 2px 2px rgba(black, 0.1);
    }

    @include desktop {
      height: vw(80px);
      box-shadow: 0 vw(2px) vw(2px) rgba(black, 0.1);
    }

    nav {
      display: flex;
      justify-content: space-between;
      height: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      max-width: 1200px;
      @include widescreen {
        padding: 0 0 0 36px;
      }
      @include desktop {
        padding: 0 0 0 vw(36px);
      }
    }

    .left {
      a#logo {
        display: flex;
        align-items: center;
        height: 100%;
        transition: transform 400ms var(--ease-out-expo);
        &:focus,
        &:hover {
          transform: scale(1.1);
        }
        img {
          width: auto; // don't make height auto or Safari will explode
          @include widescreen {
            width: 220px;
          }
          @include desktop {
            width: vw(220px);
          }
        }
      }
    }

    ul.center {
      display: flex;
      align-items: center;
      list-style: none;
      & > li {
        height: 100%;
        & > a {
          height: 100%;
          color: white;
          font-family: var(--bold);
          display: flex;
          align-items: center;
          // display: inline-block;

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
          @include widescreen {
            font-size: 16px;
            padding: 0 16px;
          }
          @include desktop {
            font-size: vw(16px);
            padding: 0 vw(16px);
          }
          &:hover,
          &:focus {
            span {
              &:after {
                transform: scaleX(1);
              }
            }
          }
          span {
            position: relative;
            &:after {
              content: '';
              background: white;
              position: absolute;
              transition: transform 400ms var(--ease-out-expo);
              transform: scaleX(0);
              @include widescreen {
                width: calc(100% + 10px);
                height: 2px;
                left: -5px;
                bottom: -15px;
              }
              @include desktop {
                width: calc(100% + vw(10px));
                height: vw(2px);
                left: vw(-5px);
                bottom: vw(-15px);
              }
            }
          }
        }
      }
    }

    .right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding-right: 40px;
    }
  }
</style>
