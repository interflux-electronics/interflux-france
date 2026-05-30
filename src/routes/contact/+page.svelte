<script lang="ts">
  import { PUBLIC_MAPBOX_ACCESSS_TOKEN } from '$env/static/public';
  import mapboxgl, { type Map } from 'mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import { mount } from 'svelte';
  import Svg from '$lib/components/Svg.svelte';
  import Flag from '$lib/components/Flag.svelte';
  import MapMarker from '$lib/components/MapMarker.svelte';
  import { resize } from '$lib/helpers/resize';

  let mapContainer: HTMLDivElement;
  let map: Map;
  let todo = $state(true);

  const trappes: [number, number] = [1.997589583952166, 48.772094842446805];

  const france = {
    id: 'FR',
    nameNative: 'France',
    nameEnglish: 'France'
  };

  const franceBounds: mapboxgl.LngLatBoundsLike = [
    [-5.5, 41.5], // SW
    [11, 53.5] // NE
  ];

  function centerOnFrance() {
    map.fitBounds(franceBounds, {
      duration: 3200
    });
  }

  $effect(() => {
    if (mapContainer && todo) {
      todo = false;

      mapboxgl.accessToken = PUBLIC_MAPBOX_ACCESSS_TOKEN;

      map = new mapboxgl.Map({
        container: mapContainer,
        style: 'mapbox://styles/jw-floatplane-dev/cmoh7momz01dx01sd8v55c77j',
        language: 'fr',

        center: trappes,
        zoom: 11,

        dragPan: false,
        scrollZoom: false,
        boxZoom: false,
        dragRotate: false,
        keyboard: false,
        doubleClickZoom: false,
        touchZoomRotate: false,
        touchPitch: false
      });

      const div = document.createElement('div');
      mount(MapMarker, { target: div });

      new mapboxgl.Marker({
        element: div,
        anchor: 'bottom'
      })
        .setLngLat(trappes)
        .addTo(map);

      map.on('load', () => {
        centerOnFrance();
      });
    }
  });
</script>

<section>
  <div id="map" bind:this={mapContainer} use:resize={centerOnFrance}></div>

  <div class="left">
    <h2 class="h2">Située en France</h2>
    <p>
      Interflux France est située à Trappes (78190) en région parisienne. Nous fournissons nos
      produits et assurons une assistance technique sur l'ensemble du territoire Français.
    </p>
  </div>

  <div class="right">
    <h2>Interflux France</h2>
    <ul>
      <li>
        <div class="icon">
          <Svg name="marker-2" />
        </div>

        <div class="text">
          <p>
            ZA Des Bruyères, 5,<br />
            Rue Pavlov - Batiment n° 4<br />
            78190 Trappes<br />
            France <Flag country={france} />
          </p>
        </div>
      </li>

      <li>
        <div class="icon">
          <Svg name="email-2" />
        </div>

        <div class="text">
          <p>
            <a href="mailto:contact@interfluxfrance.com">contact@interfluxfrance.com</a>
          </p>
        </div>
      </li>

      <li>
        <div class="icon">
          <Svg name="phone" />
        </div>

        <div class="text">
          <p>(+33) 01.34.82.53.86</p>
        </div>
      </li>

      <li>
        <div class="icon">
          <Svg name="search" />
        </div>

        <div class="text">
          <p>SIREN 391 225 935</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<style lang="scss">
  section {
    background-color: var(--blue-5);
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include widescreen {
      flex-direction: row;
    }
    @include desktop {
      flex-direction: row;
    }
    @include tablet {
    }
    @include mobile {
      flex-direction: column;
    }
  }
  #map {
    @include widescreen {
      position: absolute;
      z-index: 0;
      width: 100vw;
      height: 100%;
    }
    @include desktop {
      position: absolute;
      z-index: 0;
      width: 100vw;
      height: 100%;
    }
    @include tablet {
    }
    @include mobile {
      width: 100vw;
      height: 100vw;
    }
  }
  .left {
    z-index: 1;
    display: flex;
    flex-direction: column;
    @include widescreen {
      width: 300px;
      margin-left: 80px;
      gap: 20px;
    }
    @include desktop {
      width: vw(300px);
      margin-left: vw(80px);
      gap: vw(20px);
    }
    @include tablet {
    }
    @include mobile {
      box-sizing: border-box;
      padding: 20vw 10vw;
      gap: 3vw;
    }
    h2 {
      color: white;
    }
    p {
      color: white;
    }
  }
  .right {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: white;
    background: #fff;

    @include widescreen {
      width: 265px;
      padding: 30px;
      margin-right: 80px;
      gap: 24px;
      border-radius: 10px;
      box-shadow: 0 8px 16px 0 rgba(black, 0.25);
    }
    @include desktop {
      width: vw(265px);
      padding: vw(30px);
      margin-right: vw(80px);
      gap: vw(24px);
      border-radius: vw(10px);
      box-shadow: 0 vw(8px) vw(16px) 0 rgba(black, 0.25);
    }
    @include tablet {
    }
    @include mobile {
      width: 100vw;
      padding: 20vw 10vw;
      box-sizing: border-box;
      gap: 6vw;
    }

    h2 {
      color: var(--blue-3, #23578c);
      font-family: var(--extra-bold);
      font-size: 24px;
      line-height: 100%;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 12px;
      li {
        display: flex;
        flex-direction: row;
        .icon {
          width: 30px;
          height: 30px;
          box-sizing: border-box;
          padding-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    :global {
      .flag {
        display: inline-block;
        transform: translate(2px, 3px);
      }
    }
  }
</style>
