<script lang="ts">
  import Svg from '$lib/components/Svg.svelte';
</script>

<div class="marker">
  <Svg name="marker-1" />
  <Svg name="marker-shadow" />
</div>

<style lang="scss">
  @keyframes go-down {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes go-up {
    from {
      transform: translateY(5px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  :global {
    svg {
      animation-delay: 1200ms;
      animation-duration: 1200ms;
      animation-timing-function: var(--ease-out-expo);
      animation-fill-mode: both;
    }
    svg.map-marker-1 {
      animation-name: go-down;
    }
    svg.map-marker-shadow {
      animation-name: go-up;
    }
  }

  .marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: gap 300ms var(--ease-out-expo);
    &:hover {
      gap: 20px;
    }
  }
</style>
