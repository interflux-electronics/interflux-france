<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Line from '$lib/components/Line.svelte';
  import Button from '$lib/components/Button.svelte';
  import ProductTile from '$lib/components/ProductTile.svelte';
  import ProductTiles from '$lib/components/ProductTiles.svelte';
  import { PUBLIC_CDN_HOST as cdnHost } from '$env/static/public';
</script>

<Hero h1="Visseuses électriques de précision pour l'industrie" theme="screwdriver" />

<section id="products">
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
        h="K-DUCER Series"
        p="Plage de couple : 0,05 - 70 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/pluto-mito-nato-series"
        src="/img/kolver-product-2.jpg"
        h="PLUTO, MITO & NATO Series"
        p="Plage de couple : 0,02 - 70 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/ca-series"
        src="/img/kolver-product-3.jpg"
        h="CA Series"
        p="Plage de couple : 0,015 - 70 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/fab-raf-series"
        src="/img/kolver-product-4.jpg"
        h="FAB & RAF Series"
        p="Plage de couple : 0,05 - 5,0 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/kbl-brushless-series"
        src="/img/kolver-product-5.jpg"
        h="KBL BRUSHLESS Series"
        p="Plage de couple : 0,04 - 4 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/torque-testers"
        src="/img/kolver-product-6.jpg"
        h="Torque testers"
        p="Plage de couple : ,05 - 100 Nm"
      />
      <ProductTile
        href="https://kolver.com/en/products/reaction-positioning-arms"
        src="/img/kolver-product-7.jpg"
        h="Reaction & positioning arms"
      />
      <ProductTile href="https://www.interflux-vissage.com" css="orange">
        <p>vers le site web</p>
        <p><em>www.interflux-vissage.com</em></p>
      </ProductTile>
    </ProductTiles>
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
      <Button size="medium" theme="primary green" label="Téléchargez le catalogue" />
    </div>

    <div class="right">
      <img
        src="{cdnHost}/images/france/screwdriver@839x549.webp"
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
  }
  #products {
    .liner {
      flex-direction: column;
      gap: 40px;
    }
  }
  #catalog {
    .liner {
      flex-direction: row;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
    .left {
      width: 390px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: flex-start;
      align-items: flex-start;
    }
    img {
      width: 419.5px;
      height: 274.5px;
    }
  }
</style>
