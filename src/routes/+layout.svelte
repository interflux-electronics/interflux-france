<script lang="ts">
  import { PUBLIC_CDN_HOST } from '$env/static/public';
  import Page from '$lib/components/Page.svelte';
  import type { Snippet } from 'svelte';

  import '$lib/styles/app.scss';

  const mode = import.meta.env.MODE;
  const gitBranch = import.meta.env.BUILD_GIT_BRANCH;
  const gitRevision = import.meta.env.BUILD_GIT_COMMIT;
  const buildTime = import.meta.env.BUILD_TIME;

  let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <!-- Build -->
  <meta name="environment" content={mode} />
  <meta name="git-branch" content={gitBranch} />
  <meta name="git-revision" content={gitRevision} />
  <meta name="build-time" content={buildTime} />
  <meta name="built-with" content="Svelte Kit 5 - https://svelte.dev/" />
  <meta name="built-by" content="Jan Werkhoven - jw@interflux.au" />
  <meta name="copyright" content="© since 1993 by Interflux France ®" />

  <!-- Favicon -->
  <link
    rel="icon"
    type="image/svg+xml"
    href="{PUBLIC_CDN_HOST}/images/logos/secondary-interflux-electronics-symbol-1.svg"
    sizes="any"
  />

  <!-- SEO -->
  <!-- Sensible fallbacks -->
  <!-- Each route should set their own -->
  <title>Interflux France</title>
  <meta
    name="description"
    content="Interflux France est le distributeur agréé d'Interflux Electronics et de Kolver en France. Nous représentons ces deux marques car elles sont réputées pour la qualité de leurs produits et leurs fabrications Européenne."
  />
  <meta name="robots" content="index, follow" />

  <!-- Browser theme -->
  <meta name="theme-color" content="#23578c" />
</svelte:head>

<Page>
  {@render children()}
</Page>
