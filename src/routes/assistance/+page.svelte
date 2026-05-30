<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import { PUBLIC_CDN_HOST as cdn } from '$env/static/public';

  let yearCount = $derived.by(() => {
    const today = new Date();
    return today.getFullYear() - 1993;
  });
</script>

<Hero h1="Partenaire de confiance de l'industrie en France" theme="three" />

<section id="service">
  <div class="liner">
    <div class="left">
      <h2 class="h2">{yearCount} ans de savoir-faire à votre service</h2>

      <div class="text">
        <p>
          Interflux France est le distributeur agréé d'Interflux Electronics et de Kolver en France.
          Nous représentons ces deux marques car elles sont réputées pour la qualité de leurs
          produits et leurs fabrications Européenne.
        </p>
        <p>
          <strong>Interflux Electronics</strong> développe et fabrique des produits chimiques pour le
          brasage dans l'industrie électronique, tels que : flux de brasage, crèmes à braser, fils à braser,
          etc.
        </p>
        <p>
          <strong>Kolver</strong> fabrique des visseuses électriques de précision pour l'industrie manufacturière
          (automobile, aéronautique, électronique, etc.).
        </p>
        <p>
          Ce qui distingue Interflux France, c'est l'intérêt que nous portons aux besoins de notre
          clientèles et notre assistance technique.
        </p>
        <p>
          Depuis plus de {yearCount} ans, nous intervenons sur site dans les usines afin d'accompagner
          au mieux les industrielles. Notre savoir-faire accumulé est vaste et à votre service.
        </p>
      </div>
    </div>

    <div class="right">
      <img
        src="{cdn}/images/france/circuit-board@857x535.webp"
        alt="homme regardant des appareils électroniques et utilisant un vissuese"
        width="857"
        height="535"
        class="top"
      />
      <img
        src="{cdn}/images/france/screwdriver@839x549.webp"
        alt="visseuse électrique pour le montage d'appareils électroniques"
        width="839"
        height="549"
        class="bottom"
      />
    </div>
  </div>
</section>

<style lang="scss">
  .liner {
    display: flex;
    gap: 120px;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
  }

  h2 {
    font-size: 32px;
    line-height: 140%;
    width: 314px;
  }

  .left {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .right {
    img.top {
      width: 428.5px;
      height: 267.5px;
      transform: translate(-30px, 30px);
    }
    img.bottom {
      width: 419.5px;
      height: 274.5px;
      transform: translate(0, -30px);
    }
  }
</style>
