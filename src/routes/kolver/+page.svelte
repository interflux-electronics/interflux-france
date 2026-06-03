<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Line from '$lib/components/Line.svelte';
  import Button from '$lib/components/Button.svelte';
  import ProductTile from '$lib/components/ProductTile.svelte';
  import ProductTiles from '$lib/components/ProductTiles.svelte';
  import { PUBLIC_CDN_HOST as cdn } from '$env/static/public';
</script>

<Hero h1="Visseuses électriques de précision pour l'industrie" theme="two" />

<section id="intro">
  <div class="liner">
    <h2 class="h2">Kolver</h2>

    <div class="text">
      <p>
        <strong>Kolver</strong> est une entreprise italienne (Thiene) fondée en 1989. Elle conçoit et
        fabrique des visseuses électriques de précision industrielles avec contrôle de couple mécanique
        ou électronique, et contrôle de couple et d'angle électronique ainsi que des
      </p>
      <p>
        contrôleurs de couple, bras de réaction et accessoires pour l'aménagement des postes de
        travail. Elle est spécialisée dans les applications manuelles et automatisées. Elle elle est
        reconnue pour la qualité de son matériel, elle exporte dans plus de 50 pays.
      </p>
    </div>

    <ProductTiles>
      <ProductTile href="https://kolver.com" src="/img/kolver-logo.png" alt="Kolver" css="white" />
      <ProductTile
        href="https://kolver.com/en/products/kducer-series"
        src="/img/kolver-product-1.jpg"
        h="K-DUCER série"
        p="Plage de couple : 0,05 - 70 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/pluto-mito-nato-series"
        src="/img/kolver-product-2.jpg"
        h="PLUTO, MITO & NATO série"
        p="Plage de couple : 0,02 - 70 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/ca-series"
        src="/img/kolver-product-3.jpg"
        h="CA série"
        p="Plage de couple : 0,015 - 70 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/fab-raf-series"
        src="/img/kolver-product-4.jpg"
        h="FAB & RAF série"
        p="Plage de couple : 0,05 - 5,0 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/kbl-brushless-series"
        src="/img/kolver-product-5.jpg"
        h="KBL BRUSHLESS série"
        p="Plage de couple : 0,04 - 4 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/torque-testers"
        src="/img/kolver-product-6.jpg"
        h="Contrôleurs de couple"
        p="Etendue de mesure de 0.05 - 100 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/reaction-positioning-arms"
        src="/img/kolver-product-7.jpg"
        h="Bras de maintien"
        p="pour visseuses et aménagement des postes de travail"
      />
      <ProductTile
        href="https://kolver.com/en/products/automatic-screw-suppliers"
        src="/img/kolver-product-8.jpg"
        h="Distributeurs automatique de vis"
      />
    </ProductTiles>

    <Button
      size="large"
      theme="primary orange"
      label="www.interflux-vissage.com"
      url="https://www.interflux-vissage.com"
    />
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
        url="{cdn}/documents/catalogs/catalogue-visseuses-électriques-FR.pdf"
      />
    </div>

    <div class="right">
      <img
        src="{cdn}/images/france/screwdriver@839x549.webp"
        alt="visseuse électrique pour le montage d'appareils électroniques"
        width="839"
        height="549"
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
      align-items: center;
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
        width: 419.5px;
      }
      @include desktop {
        width: vw(419.5px);
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
