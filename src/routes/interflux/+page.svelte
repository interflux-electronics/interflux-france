<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Line from '$lib/components/Line.svelte';
  import Link from '$lib/components/Link.svelte';
  import ProductTile from '$lib/components/ProductTile.svelte';
  import ProductTiles from '$lib/components/ProductTiles.svelte';
  import { PUBLIC_CDN_HOST as cdn } from '$env/static/public';
</script>

<Hero h1="Produits de brasage pour l'industrie électronique" theme="one" />

<section id="intro">
  <div class="liner">
    <h2 class="h2">Interflux Electronics</h2>

    <div class="text">
      <p>
        <strong>Interflux Electronics</strong>
        est une entreprise belge (Gand) fondée en 1980. Elle fournit à l'industrie électronique ses produits
        de brasage dans plus de 80 pays via 14 sociétés à travers le monde. Elle est spécialisée dans
        la recherche, le développement et la fabrication de produits chimiques de brasage de haute qualité
        pour l'industrie électronique : flux de brasage, crèmes à braser, fils à braser, alliages de brasage
        et systèmes d'application de flux.
      </p>

      <p>
        Interflux Electronics est réputée pour son innovation, ses flux sans nettoyage, ses flux
        totalement exempts d'halogénures, ses alliages sans plomb à bas point de fusion et ses 40
        années d'expertise technique dans la résolution des difficultés éventuelles liées à la
        fabrication électronique.
      </p>

      <p>Vers le site web: <Link url="https://interflux.fr" label="www.interflux.fr" /></p>
    </div>

    <div class="product-tiles">
      <ProductTiles>
        <ProductTile
          href="https://interflux.fr"
          src="https://cdn.interflux.com/images/logos/secondary-interflux-electronics-logo-2.svg"
          alt="Interflux Electronics"
          css="blue"
        />

        <ProductTile
          href="https://interflux.fr/product/IF-2005M"
          src="https://cdn.interflux.com/images/products/IF-2005M/IF-2005M-10L-angle@600x600.webp"
          h="IF 2005M"
          p="Flux de brasage à base de solvants"
        />

        <ProductTile
          href="https://interflux.fr/product/IF-2005C"
          src="https://cdn.interflux.com/images/products/IF-2005C/IF-2005C-1L@600x600.webp"
          h="IF 2005C"
          p="Flux de brasage à base de solvants"
        />

        <ProductTile
          href="https://interflux.fr/product/DP-5505"
          src="https://cdn.interflux.com/images/products/DP-5505/DP-5505-solder-paste-SnAgCu-500g@600x600.webp"
          h="DP 5505"
          p="Crème à braser avec plomb et sans plomb"
        />

        <ProductTile
          href="https://interflux.fr/product/LMPA-Q7"
          src="https://cdn.interflux.com/images/products/LMPA-Q7/LMPA-Q7-500g@600x600.webp"
          h="LMPA Q7"
          p="Crème à braser sans plomb à bas point de fusion"
        />

        <ProductTile
          href="https://interflux.fr/product/IF-14"
          src="https://cdn.interflux.com/images/products/IF-14/IF-14-SnQ-500g@600x600.webp"
          h="IF 14"
          p="Fil à braser avec plomb et sans plomb"
        />

        <ProductTile
          href="https://interflux.fr/product/Purgel"
          src="https://cdn.interflux.com/images/products/Purgel/Purgel-3@600x600.webp"
          h="Purgel"
          p="Nettoyant pour les systèmes de dosage"
        />

        <ProductTile
          href="https://interflux.fr/product/Solder-Bars"
          src="https://cdn.interflux.com/images/products/Solder-Bars/Solder-Bars-15@600x600.webp"
          h="Alliage en barres"
          p="Alliage sans plomb à bas point de fusion LMPA-Q"
        />

        <ProductTile href="https://interflux.fr" css="orange">
          <p>vers le site web</p>
          <p><em>www.interflux.fr</em></p>
        </ProductTile>
      </ProductTiles>
    </div>
  </div>
</section>

<Line />

<section id="catalog">
  <div class="liner">
    <div class="left">
      <h2 class="h2">Voyez notre catalogue</h2>
      <p>
        Pour obtenir des informations détaillées sur les produits et les variantes que nous
        proposons en France, veuillez télécharger notre catalogue.
      </p>
      <Button
        size="medium"
        theme="primary green"
        label="Téléchargez le catalogue"
        url="{cdn}/documents/catalogs/catalogue-produits-de-brasage-Interflux-FR.pdf"
      />
    </div>

    <div class="right">
      <img
        src="{cdn}/images/france/circuit-board@857x535.webp"
        alt="homme regardant des appareils électroniques et utilisant un vissuese"
        width="857"
        height="535"
      />
    </div>
  </div>
</section>

<style lang="scss">
  .liner {
    max-width: 800px;
    padding: 100px 0;
    display: flex;

    @include widescreen {
      max-width: 800px;
      padding: 100px 0;
    }
    @include desktop {
      max-width: vw(800px);
      padding: vw(100px) 0;
    }
    @include tablet {
      max-width: 80vw;
    }
    @include mobile {
      padding: 10vw;
      box-sizing: border-box;
    }
  }
  #intro {
    .liner {
      flex-direction: column;
      gap: 40px;
    }
    .text {
      @include widescreen {
        column-count: 2;
        column-gap: 20px;
      }
      @include desktop {
        column-count: 2;
        column-gap: vw(20px);
      }
    }
  }
  #catalog {
    .liner {
      justify-content: center;
      align-items: center;

      @include widescreen {
        flex-direction: row;
        gap: 20px;
      }
      @include desktop {
        flex-direction: row;
        gap: vw(20px);
      }
      @include tablet {
        flex-direction: row;
        gap: 5vw;
        width: 90vw;
      }
      @include mobile {
        flex-direction: column;
        gap: 15vw;
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      @include widescreen {
        width: 390px;
        gap: 20px;
      }
      @include desktop {
        width: vw(390px);
        gap: vw(20px);
      }
      @include tablet {
        flex-shrink: 0;
        width: 33vw;
        gap: 2vw;
      }
      @include mobile {
        gap: 3vw;
      }
    }
    img {
      height: auto;
      @include widescreen {
        width: 428.5px;
      }
      @include desktop {
        width: vw(428.5px);
      }
      @include tablet {
        width: 100%;
      }
      @include mobile {
        width: 90vw;
      }
    }
  }
</style>
