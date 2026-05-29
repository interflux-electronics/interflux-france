<script lang="ts">
  import { PUBLIC_CDN_HOST as cdnHost } from '$env/static/public';
  import { downcase } from '$lib/helpers/downcase';
  import type { Country } from '$lib/types/Country';

  interface Props {
    country: Country;
    size?: 'medium' | 'large';
  }

  let { country, size = 'medium' }: Props = $props();
</script>

<img
  src="{cdnHost}/images/flags/{country.id}.svg"
  alt="{country.nameNative} ({country.nameEnglish})"
  class="flag {downcase(country.id)} {size}"
  width="32"
  height="24"
/>

<style lang="scss">
  img.flag {
    height: auto;
    &.medium {
      @include widescreen {
        width: 24px;
      }
      @include desktop {
        width: vw(24px);
      }
      @include tablet {
        width: vw-tablet(24px);
      }
      @include mobile {
        width: vw-mobile(24px);
      }
    }
    &.large {
      @include widescreen {
        width: 32px;
      }
      @include desktop {
        width: vw(32px);
      }
      @include tablet {
        width: vw-tablet(32px);
      }
      @include mobile {
        width: vw-mobile(32px);
      }
    }
    &.at,
    &.bg,
    &.ca,
    &.cz,
    &.fi,
    &.fr,
    &.id,
    &.it,
    &.kr,
    &.ph,
    &.pk,
    &.pl,
    &.mx,
    &.nl,
    &.rs,
    &.ru,
    &.sg,
    &.si {
      outline: 1px solid var(--grey-1);
    }
  }
</style>
