<script>
	import '$lib/interflux-design-system.scss';
	import '$lib/app.scss';
	import { ProductTile } from '$lib/components/interflux';
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	import { PUBLIC_MAPBOX_ACCESSS_TOKEN } from '$env/static/public';

	let mapContainer;
	let map;

	onMount(() => {
		mapboxgl.accessToken = PUBLIC_MAPBOX_ACCESSS_TOKEN;

		map = new mapboxgl.Map({
			container: mapContainer,
			style: 'mapbox://styles/jw-floatplane-dev/ck8mcsfr50uwe1iohs6xv6n0d',
			center: [-2.4731762021005954, 47.242523008246486], // Saint Nazaire, France
			zoom: 5,
			language: 'fr',

			// Disable all user interaction
			dragPan: false,
			scrollZoom: false,
			boxZoom: false,
			dragRotate: false,
			keyboard: false,
			doubleClickZoom: false,
			touchZoomRotate: false,
			touchPitch: false
		});

		new mapboxgl.Marker({
			element: (() => {
				const el = document.createElement('div');
				el.innerHTML = '<img src="/img/marker.svg" width="24" height="43">';
				return el;
			})()
		})
			.setLngLat([1.997589583952166, 48.772094842446805]) // Trappes
			.addTo(map);

		return () => map.remove();
	});

	import { intersect } from '$lib/actions/intersect';

	const tresholds = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
	const ratios = {
		hero: 0,
		interflux: 0,
		kolver: 0,
		service: 0,
		location: 0,
		equipe: 0,
		footer: 0
	};
	let inView = 'hero';

	function onIntersect(e) {
		const id = e.target.id;
		const ratio = e.detail.viewportCoverageRatio.toFixed(2);
		ratios[id] = ratio;
		inView = Object.keys(ratios).reduce((a, b) => (ratios[a] > ratios[b] ? a : b));
		console.log(inView, ratios[inView]);
	}
</script>

<header id="hero" use:intersect={{ threshold: tresholds }} on:intersect={onIntersect}>
	<img
		id="logo-1"
		src="https://cdn.interflux.com/images/logos/interflux-france-logo-white-on-blue.svg"
		alt="Interflux logo 1"
	/>
	<h1>
		<span>Partenaire de confiance<br /></span>
		<span>de l'industrie électronique<br /></span>
		<span
			>en France <img
				id="flag"
				src="https://cdn.interflux.com/images/flags/FR.svg"
				alt="flag of France"
			/></span
		>
	</h1>
	<p>
		<span>Membre du&nbsp;</span>
		<a href="https://interflux.group" target="_blank">
			<span>Groupe Interflux</span>
			<img
				id="logo-2"
				src="https://cdn.interflux.com/images/logos/secondary-interflux-electronics-symbol-1.svg"
				alt="Interflux logo 2"
			/>
		</a>
	</p>
	<img id="bg" src="/img/hero@2400x1400.jpg" alt="electronics" />
</header>

<main>
	<nav class={inView == 'location' ? 'white' : 'grey'}>
		<div class="sticky">
			<a
				href="#interflux"
				class={inView == 'interflux' || inView == 'hero' ? 'in-view' : 'out-of-view'}
			>
				<span>Produits de brasage</span>
				{#if inView == 'interflux' || inView == 'hero'}
					<img src="/img/arrow-4.svg" width="4" height="6" alt="arrow" />
				{/if}
			</a>
			<a href="#kolver" class={inView == 'kolver' ? 'in-view' : 'out-of-view'}>
				<span>Visseuses électriques</span>
				{#if inView == 'kolver'}
					<img src="/img/arrow-4.svg" width="4" height="6" alt="arrow" />
				{/if}
			</a>
			<a href="#service" class={inView == 'service' ? 'in-view' : 'out-of-view'}>
				<span>Service</span>
				{#if inView == 'service'}
					<img src="/img/arrow-4.svg" width="4" height="6" alt="arrow" />
				{/if}
			</a>
			<a href="#location" class={inView == 'location' ? 'in-view' : 'out-of-view'}>
				<span>Localisation</span>
				{#if inView == 'location'}
					<img src="/img/arrow-5.svg" width="4" height="6" alt="arrow" />
				{/if}
			</a>
			<a
				href="#equipe"
				class={inView == 'equipe' || inView == 'footer' ? 'in-view' : 'out-of-view'}
			>
				<span>Contactez-nous</span>
				{#if inView == 'equipe' || inView == 'footer'}
					<img src="/img/arrow-4.svg" width="4" height="6" alt="arrow" />
				{/if}
			</a>
		</div>
	</nav>

	<section id="interflux" use:intersect={{ threshold: tresholds }} on:intersect={onIntersect}>
		<div class="liner">
			<h2 class="h primary light">
				Produits de brasage pour<br />
				l'industrie électronique
			</h2>
			<div class="text">
				<p>
					<strong>Interflux Electronics</strong>
					est une entreprise belge (Gand) fondée en 1980. Elle sert des clients dans plus de 80 pays via
					14 sociétés à travers le monde.
				</p>
				<p>
					Elle se spécialise dans la recherche et la fabrication de produits chimiques de brasage de
					haute qualité pour l'assemblage électronique : flux de brasage, crèmes à braser, fils à
					braser, alliages de brasage et systèmes d'application de flux.
				</p>
				<p>
					Interflux Electronics est réputée pour son innovation, ses flux sans nettoyage, ses flux
					totalement exempts d'halogénures, ses alliages à bas point de fusion et ses 40 années
					d'expertise technique dans le dépannage des problèmes liés à la fabrication électronique.
				</p>
				<p>Vers le site web: <a href="https://interflux.fr">www.interflux.fr</a></p>
			</div>
			<div class="product-tiles">
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
					p="Flux de brasage No-Residue"
				/>

				<ProductTile
					href="https://interflux.fr/product/PacIFic-2009M"
					src="https://cdn.interflux.com/images/products/PacIFic-2009M/Pacific-2009M-10L-angle@600x600.webp"
					h="PacIFic 2009M"
					p="Flux de brasage à base d'eau polyvalent"
				/>

				<ProductTile
					href="https://interflux.fr/product/DP-5505"
					src="https://cdn.interflux.com/images/products/DP-5505/DP-5505-solder-paste-SnAgCu-500g@600x600.webp"
					h="DP 5505"
					p="Crème à braser haute stabilité"
				/>

				<ProductTile
					href="https://interflux.fr/product/LMPA-Q7"
					src="https://cdn.interflux.com/images/products/LMPA-Q7/LMPA-Q7-1kg-cartridge@600x600.webp"
					h="LMPA Q7"
					p="Crême à braser á bas point de fusion"
				/>

				<ProductTile
					href="https://interflux.fr/product/IF-14"
					src="https://cdn.interflux.com/images/products/IF-14/IF-14-SnQ-500g@600x600.webp"
					h="IF 14"
					p="Fil de brasage populaire"
				/>

				<ProductTile
					href="https://interflux.fr/product/Purgel"
					src="https://cdn.interflux.com/images/products/Purgel/Purgel-3@600x600.webp"
					h="Purgel"
					p="Nettoyeur pour les systèmes de dosage"
				/>

				<ProductTile
					href="https://interflux.fr/product/Solder-Bars"
					src="https://cdn.interflux.com/images/products/Solder-Bars/Solder-Bars-15@600x600.webp"
					h="Solder Bars"
					p="Solder alloy LMPA-Q"
				/>
				<ProductTile href="https://interflux.fr" css="orange">
					<p>vers le site web</p>
					<p><em>www.interflux.fr</em></p>
				</ProductTile>
			</div>
		</div>
	</section>

	<section id="kolver" use:intersect={{ threshold: tresholds }} on:intersect={onIntersect}>
		<div class="liner">
			<h2 class="h primary light">Visseuses électriques de précision pour l'industrie</h2>
			<div class="text">
				<p>
					<strong>Kolver</strong> est une entreprise italienne (Thiene) fondée en 1989. Elle conçoit et
					fabrique des visseuses électriques de précision industriels avec contrôle de couple et d'angle,
					ainsi que des testeurs de couple, bras de réaction et accessoires.
				</p>
				<p>
					Elle est spécialisée dans les applications manuelles et automatisées. Elle est reconnue
					pour sa qualité "Made in Italy" et que elle est une Benefit Corporation depuis 2023. Elle
					exporte dans plus de 50 pays.
				</p>
				<p>Vers le site web: <a href="https://kolver.com">www.kolver.com</a></p>
			</div>
			<div class="product-tiles">
				<ProductTile
					href="https://kolver.com"
					src="/img/kolver-logo.png"
					alt="Kolver"
					css="white"
				/>
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
				<ProductTile href="https://kolver.com" css="orange">
					<p>vers le site web</p>
					<p><em>www.kolver.com</em></p>
				</ProductTile>
			</div>
		</div>
	</section>

	<section id="service" use:intersect={{ threshold: tresholds }} on:intersect={onIntersect}>
		<div class="liner">
			<h2 class="h primary light">
				33 ans de savoir-faire <br />
				à votre service
			</h2>
			<div class="text">
				<p>
					Interflux France est le principal distributeur agréé de d’Interflux Electronics et de
					Kolver en France. Nous représentons ces deux marques car nous estimons que leur qualité
					est inégalée en France.
				</p>
				<p>
					<strong>Interflux Electronics</strong> invente et produit des produits chimiques de brasage
					pour l'industrie électronique, tels que : flux de brasage, crèmes à braser, fils à braser, etc.
				</p>
				<p>
					<strong>Kolver</strong> fabrique des visseuses de précision pour l’industrie manufacturière
					(automobile, aéronautique, électronique, etc.).
				</p>
				<p>
					Ce qui distingue Interflux France, c'est notre assistance technique. Depuis plus de 33
					ans, nous intervenons sur site dans les usines pour résoudre les problèmes techniques.
					Notre savoir-faire accumulé est vaste et à votre service.
				</p>
			</div>
			<img
				src="/img/service.jpg"
				alt="homme regardant des appareils électroniques et utilisant un vissuese"
			/>
		</div>
	</section>

	<section id="location" use:intersect={{ threshold: tresholds }} on:intersect={onIntersect}>
		<div class="map" bind:this={mapContainer}></div>

		<div class="text">
			<h2 class="h primary light">Situé au cœur de la France</h2>
			<p>
				Interflux France est idéalement situé au cœur de la France, près de Paris, à Trappes
				(78190).
			</p>
			<p>
				Nous sommes à proximité de la plupart des grandes zones industrielles afin de fournir une
				assistance technique sur site.
			</p>
		</div>

		<img class="arrow" src="/img/arrow-1.svg" alt="arrow" width="304" height="44" />
	</section>

	<section id="equipe" use:intersect={{ threshold: tresholds }} on:intersect={onIntersect}>
		<h2 class="h secondary bold">Équipe</h2>
		<ul>
			<li>
				<img src="/img/anonymous.svg" alt="" />
				<div class="text">
					<p><strong>Daniel Laprade</strong></p>
					<p>PDG</p>
				</div>
			</li>

			<li>
				<img src="/img/anonymous.svg" alt="" />
				<div class="text">
					<p><strong>Nora Tamsaout</strong></p>
					<p>Adjoint de direction</p>
				</div>
			</li>
		</ul>
		<img class="arrow" src="/img/arrow-2.svg" width="89" height="79" alt="arrow" />
	</section>
</main>

<footer id="footer" use:intersect={{ threshold: tresholds }} on:intersect={onIntersect}>
	<div class="contact">
		<h2>Contactez-nous</h2>
		<p>01.34.82.53.86</p>
		<p><a href="mailto:d.laprade@interfluxfrance.com">d.laprade@interfluxfrance.com</a></p>
		<p>
			Interflux France (SAS, SIREN 391 225 935)<br />
			ZA Des Bruyères, 5, Rue Pavlov - Batiment n° 4<br />
			78190 Trappes<br />
			FRANCE
		</p>
		<img class="flag" src="https://cdn.interflux.com/images/flags/FR.svg" alt="flag of France" />
		<img class="arrow" src="/img/arrow-3.svg" width="89" height="170" alt="arrow" />
	</div>

	<div class="logo">
		<a href="https://interflux.com">
			<img
				src="https://cdn.interflux.com/images/logos/interflux-symbol-white.svg"
				alt="Interflux symbol"
			/>
		</a>
	</div>
</footer>

<style lang="scss">
	main {
		position: relative;
	}

	nav {
		position: absolute;
		height: 100%;
		left: 40px;
		.sticky {
			position: sticky;
			top: 80px;
			z-index: 5;
			width: 210px;
			margin: 40px 0;
			display: flex;
			flex-direction: column;
		}

		&.white {
			a {
				color: white;
			}
		}
		&.grey {
			a {
				color: var(--grey-7);
			}
		}
		a {
			color: var(--grey-7);
			font-size: 16px;
			line-height: 260%;
			display: flex;
			align-items: center;
			gap: 10px;
			transition: all 0.5s var(--ease-out-expo);
			font-family: 'Nunito Sans Regular', sans-serif;

			&:hover,
			&:focus,
			&.in-view {
				font-family: 'Nunito Sans Bold', sans-serif;
			}
			img {
				transform: translateY(1px);
				width: 4px;
				height: 6px;
			}
		}
	}

	#hero {
		position: relative;
		width: 100%;
		height: 700px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		img#logo-1 {
			position: absolute;
			z-index: 2;
			left: 40px;
			top: 40px;
			width: 265px;
			height: auto;
		}
		img#bg {
			position: absolute;
			z-index: 1;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
		h1 {
			position: relative;
			z-index: 2;
			color: white;
			text-align: center;
			font-size: 32px;
			line-height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			span {
				display: flex;
				background-color: var(--blue-3);
				padding: 10px 16px;
				display: flex;
				align-items: center;
				img#flag {
					width: 32px;
					height: 24px;
					border: 1px solid white;
					margin-left: 10px;
				}
			}
		}
		p {
			position: absolute;
			z-index: 2;
			right: 40px;
			top: 40px;
			display: flex;
			font-size: 16px;
			line-height: 100%;
			font-family: 'Nunito Sans Regular', sans-serif;
			color: white;
			display: flex;
			align-items: center;
			a {
				font-family: 'Nunito Sans Bold', sans-serif;
				color: white;
				display: flex;
				align-items: center;
				text-decoration: none;
				&:hover,
				&:active {
					text-decoration: underline;
				}
				img#logo-2 {
					margin-left: 6px;
					width: 20px;
					height: 20px;
				}
			}
		}
	}

	#interflux,
	#kolver {
		border-bottom: 10px solid var(--grey-0);
		transition: padding 800ms var(--ease-out-expo);
		@media (width < 1300px) {
			padding-left: 180px;
		}
		.liner {
			max-width: 800px;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			gap: 40px;
			padding: 120px 0;
			.text {
				columns: 2;
				column-gap: 20px;
				p + p {
					margin-top: 10px;
				}
			}
		}
	}

	#service {
		transition: padding 800ms var(--ease-out-expo);
		@media (width < 1350px) {
			padding-left: 240px;
		}
		.liner {
			position: relative;
			width: 900px;
			display: flex;
			flex-direction: column;
			gap: 40px;
			padding: 120px 0;
			margin: 0 auto;
			.text {
				max-width: 400px;
				p + p {
					margin-top: 10px;
				}
			}
			img {
				position: absolute;
				right: 0;
				top: 200px;
				height: 477px;
				width: auto;
			}
		}
	}

	#location {
		background-color: var(--blue-5);
		width: 100vw;
		height: 680px;
		position: relative;
		display: flex;
		flex-direction: column;

		.map {
			width: 100%;
			height: 100%;
		}

		.text {
			position: absolute;
			z-index: 1;
			left: 50%;
			top: 50%;
			transform: translate(-360px, -110px);
			display: flex;
			flex-direction: column;
			width: 300px;
			h2 {
				width: 220px;
			}
			h2,
			p {
				color: white;
			}
			h2 + p {
				margin-top: 20px;
			}
			p + p {
				margin-top: 10px;
			}
		}

		.arrow {
			position: absolute;
			z-index: 2;
			left: 50%;
			top: 50%;
			transform: translate(-140px, -90px);
		}
	}

	#equipe {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 80px 0 100px;
		gap: 40px;
		position: relative;
		ul {
			list-style: none;
			display: flex;
			flex-direction: row;
			gap: 50px;
			margin: 0;
			padding: 0;
			li {
				display: flex;
				align-items: center;
				gap: 20px;
				.text {
					display: flex;
					flex-direction: column;
					p {
						line-height: 150%;
					}
				}
			}
		}
		img.arrow {
			position: absolute;
			z-index: 1;
			left: 50%;
			bottom: 0;
			transform: translateX(-225px);
		}
	}

	footer {
		.contact {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 60px;
			position: relative;
			background-color: var(--blue-4);
		}
		h2,
		p {
			color: white;
			text-align: center;
		}
		h2 {
			font-family: 'Nunito Sans Bold', sans-serif;
			font-size: 32px;
			line-height: 100%;
		}
		p {
			font-size: 17px;
			line-height: 140%;
			a {
				color: white;
			}
		}
		h2 + p {
			margin-top: 30px;
		}
		p + p {
			margin-top: 20px;
		}
		img.flag {
			width: 32px;
			height: 24px;
			border: 1px solid white;
			margin-top: 10px;
		}
		img.arrow {
			position: absolute;
			z-index: 1;
			left: 50%;
			top: 0;
			transform: translateX(-225px);
		}
		.logo {
			background-color: var(--blue-5);
			display: flex;
			align-items: center;
			justify-content: center;
			height: 125px;
			img {
				width: auto;
				height: 70px;
			}
		}
	}

	.mapboxgl-canvas-container,
	.mapboxgl-canvas-container.mapboxgl-interactive,
	.mapboxgl-canvas {
		cursor: default !important;
	}

	/* Also override any inline styles Mapbox might set */
	:global(.mapboxgl-canvas-container) {
		cursor: default !important;
	}

	:global(.mapboxgl-canvas) {
		width: 100% !important;
		height: 100% !important;
	}
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
