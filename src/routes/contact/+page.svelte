<script lang="ts">
  import { Map, Marker } from '@beyonk/svelte-mapbox';
  import { onMount } from 'svelte';
  import { PUBLIC_MAPBOX_ACCESSS_TOKEN } from '$env/static/public';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import Svg from '$lib/components/Svg.svelte';
  import Flag from '$lib/components/Flag.svelte';

  let mapComponent: any;

  const center = [-2.4731762021005954, 47.242523008246486]; // Saint Nazaire
  const markerLngLat = [1.997589583952166, 48.772094842446805]; // Trappes

  const france = {
    id: 'FR',
    nameNative: 'France',
    nameEnglish: 'France'
  };

  const franceBounds: [[number, number], [number, number]] = [
    [-5.5, 42.0], // Southwest [lng, lat]
    [9.6, 51.1] // Northeast [lng, lat]
  ];

  // let zoomDone = $state(false);

  // function fitToFrance() {
  //   console.log('🚀');
  //   if (mapComponent && !zoomDone) {
  //     zoomDone = true;
  //     const map = mapComponent.getMap();
  //     map.fitBounds(franceBounds, {
  //       padding: 60, // Nice padding around the edges
  //       maxZoom: 8, // Prevent zooming in too far on large screens
  //       duration: 1500 // Smooth animation
  //     });
  //   }
  // }

  let mapReady = $state(false);

  function onMapReady() {
    console.log('🚀');
    if (!mapComponent) return;
    if (mapReady) return;
    console.log('💥');

    mapReady = true;

    // Zoom in nicely on France with padding
    mapComponent.fitBounds(franceBounds, {
      padding: 80, // pixels of padding around the bounds (top/bottom/left/right)
      maxZoom: 8, // Prevent zooming in too much
      duration: 2000 // Smooth 2-second animation
    });
  }
</script>

<section>
  <div id="map">
    <Map
      bind:this={mapComponent}
      accessToken={PUBLIC_MAPBOX_ACCESSS_TOKEN}
      style="mapbox://styles/jw-floatplane-dev/cmoh7momz01dx01sd8v55c77j"
      zoom={5}
      {center}
      language="fr"
      onready={onMapReady}
      options={{
        // dragPan: false,
        scrollZoom: true
        // boxZoom: false,
        // dragRotate: false,
        // keyboard: false,
        // doubleClickZoom: false,
        // touchZoomRotate: false,
        // touchPitch: false
      }}
    >
      <Marker lat={markerLngLat[1]} lng={markerLngLat[0]}>
        <img src="/img/marker.svg" width="24" height="43" alt="marker" />
      </Marker>
    </Map>
  </div>

  <div class="left">
    <h2 class="h2">Située en France</h2>
    <p>
      Interflux France est située à Trappes (78190) en région parisienne. Nous fournissons nos
      produits et assurons une assistance technique sur l'ensemble du territoire Français.
    </p>
  </div>

  <div class="right">
    <h2 class="h3">Interflux France</h2>
    <ul>
      <li>
        <div class="icon">
          <Svg name="marker-1" />
        </div>

        <div class="text">
          <p>ZA Des Bruyères, 5,</p>
          <p>Rue Pavlov - Batiment n° 4</p>
          <p>78190 Trappes</p>
          <p>France <Flag country={france} /></p>
        </div>
      </li>

      <li>
        <div class="icon">
          <Svg name="email-2" />
        </div>

        <div class="text">
          <a href="mailto:contact@interfluxfrance.com">interfluxfrance.com</a>
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
          <Svg name="search-1" />
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
    background-color: var(--blue-4);
    height: 100%;
    position: relative;
  }
  #contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  #map {
    position: absolute;
    width: 100vw;
    height: 100%;
  }
  .left {
    h2 {
      color: white;
    }
    p {
      color: white;
    }
  }
  .right {
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    border-radius: 10px;
    background: white;
    width: 265px;
  }
</style>
