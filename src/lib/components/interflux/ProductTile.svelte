<script>
	export let href = 'https://interflux.com';
	export let src = '';
	export let alt = '';
	export let h = '';
	export let p = '';
	export let css = '';
</script>

<a {href} class="product-tile {css}">
	{#if src}
		<div class="image">
			<img {src} alt={h || alt} />
		</div>
	{/if}
	{#if h}
		<h3>{h}</h3>
	{/if}
	{#if p}
		<p>{p}</p>
	{/if}
	<slot />
</a>

<style lang="scss">
	a.product-tile {
		border-radius: 5px;
		overflow: hidden;
		border: 1px solid var(--grey-1);
		min-height: 250px;

		&:hover,
		&:focus {
			border-color: var(--grey-2);
			box-shadow: 0 3px 6px RGBA(0, 0, 0, 0.15);

			img {
				transform: scale(1.05);
			}
		}

		.image {
			width: 250px;
			height: 250px;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition-property: transform;
				transition-duration: 300ms;
				transition-timing-function: var(--ease-out-expo);
			}

			& + h3 {
				margin-top: 10px;

				&:last-child,
				& + p {
					margin-bottom: 10px;
				}
			}
		}

		h3 {
			font-size: 16px;
			line-height: 140%;
			color: var(--grey-7);
			text-align: center;
			padding: 0 10px;
		}

		p {
			font-size: 16px;
			line-height: 140%;
			color: var(--grey-7);
			text-align: center;
			padding: 0 10px;
		}
	}
</style>
