<script>
	import '$lib/interflux-design-system.scss';
	import '$lib/app.scss';
	import 'mapbox-gl/dist/mapbox-gl.css';
	import { ProductTile } from '$lib/components/interflux';
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';

	let mapContainer;

	onMount(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoianctZmxvYXRwbGFuZS1kZXYiLCJhIjoiY2s4bWNnZnBhMG1lZjNocW9xMTNrZWIyZyJ9.ZIs8xxlge7f8r1aOzstHyQ';

		const map = new mapboxgl.Map({
			container: mapContainer,
			style: 'mapbox://styles/jw-floatplane-dev/ck8mcsfr50uwe1iohs6xv6n0d',
			center: [144.96, -37.81], // Melbourne
			zoom: 12
		});

		return () => map.remove();
	});
</script>

<section id="hero">
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
</section>

<section id="interflux">
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

<section id="kolver">
	<div class="liner">
		<h2 class="h primary light">
			Produits de brasage pour<br />
			l'industrie électronique
		</h2>
		<div class="text">
			<p>
				<strong>Kolver</strong> est une entreprise italienne (Thiene) fondée en 1989. Elle conçoit et
				fabrique des visseuses électriques de précision industriels avec contrôle de couple et d'angle,
				ainsi que des testeurs de couple, bras de réaction et accessoires.
			</p>
			<p>
				Elle est spécialisée dans les applications manuelles et automatisées. Elle est reconnue pour
				sa qualité "Made in Italy" et que elle est une Benefit Corporation depuis 2023. Elle exporte
				dans plus de 50 pays.
			</p>
			<p>Vers le site web: <a href="https://kolver.com">www.kolver.com</a></p>
		</div>
		<div class="product-tiles">
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
			<ProductTile href="https://kolver.com" css="orange">
				<p>vers le site web</p>
				<p><em>www.kolver.com</em></p>
			</ProductTile>
		</div>
	</div>
</section>

<section id="service">
	<div class="liner">
		<h2 class="h primary light">
			33 ans de savoir-faire <br />
			à votre service
		</h2>
		<div class="text">
			<p>
				Interflux France est le principal distributeur agréé de d’Interflux Electronics et de Kolver
				en France. Nous représentons ces deux marques car nous estimons que leur qualité est
				inégalée en France.
			</p>
			<p>
				<strong>Interflux Electronics</strong> invente et produit des produits chimiques de brasage pour
				l'industrie électronique, tels que : flux de brasage, crèmes à braser, fils à braser, etc.
			</p>
			<p>
				<strong>Kolver</strong> fabrique des visseuses de précision pour l’industrie manufacturière (automobile,
				aéronautique, électronique, etc.).
			</p>
			<p>
				Ce qui distingue Interflux France, c'est notre assistance technique. Depuis plus de 33 ans,
				nous intervenons sur site dans les usines pour résoudre les problèmes techniques. Notre
				savoir-faire accumulé est vaste et à votre service.
			</p>
		</div>
		<img
			src="/img/service.jpg"
			alt="homme regardant des appareils électroniques et utilisant un vissuese"
		/>
	</div>
</section>

<section id="location">
	<div class="text">
		<h2 class="h primary light">Situé au cœur de la France</h2>
		<p>
			Interflux France est idéalement situé au cœur de la France, près de Paris, à Trappes (78190).
		</p>
		<p>
			Nous sommes à proximité de la plupart des grandes zones industrielles afin de fournir une
			assistance technique sur site.
		</p>
	</div>

	<div id="map" bind:this={mapContainer} style="width:100%; height:500px;"></div>
</section>

<section id="equipe">
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
</section>

<section id="contact">
	<h2>Contactez-nous</h2>
	<p>+31 7 12 34 56 67</p>
	<p><a href="mailto:d.laprade@interfluxfrance.com">d.laprade@interfluxfrance.com</a></p>
	<p>
		Interflux France (SAS, SIREN 391 225 935)<br />
		ZA Des Bruyères, 5, Rue Pavlov - Batiment n° 4<br />
		78190 Trappes<br />
		FRANCE
	</p>
	<img id="flag" src="https://cdn.interflux.com/images/flags/FR.svg" alt="flag of France" />
</section>

<footer>
	<a href="https://interflux.com">
		<img
			src="https://cdn.interflux.com/images/logos/interflux-symbol-white.svg"
			alt="Interflux symbol"
		/>
	</a>
</footer>

<style lang="scss">
	#hero {
		position: relative;
		width: 100%;
		height: 700px;
		display: flex;
		justify-content: center;
		align-items: center;
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
			width: auto;
			height: 100%;
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
		padding-left: 180px;
		.liner {
			max-width: 800px;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			gap: 40px;
			padding: 150px 0;
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
		padding-left: 240px;
		.liner {
			position: relative;
			width: 900px;
			display: flex;
			flex-direction: column;
			gap: 40px;
			padding: 150px 0;
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
		height: 680px;
		position: relative;
		display: flex;
		flex-direction: column;

		#map {
			height: 680px;
		}

		.text {
			position: absolute;
			z-index: 1;
			left: 100px;
			top: 100px;
			display: flex;
			flex-direction: column;
			gap: 20px;
			max-width: 300px;
			h2,
			p {
				color: white;
			}
			p + p {
				margin-top: 10px;
			}
		}
	}

	#equipe {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 80px 0 100px;
		gap: 40px;
		ul {
			list-style: none;
			display: flex;
			flex-direction: row;
			gap: 50px;
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
	}

	#contact {
		background-color: var(--blue-4);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 60px;
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
		img {
			width: 32px;
			height: 24px;
			border: 1px solid white;
			margin-top: 10px;
		}
		h2 + p {
			margin-top: 30px;
		}
		p + p {
			margin-top: 20px;
		}
	}
	footer {
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

	:global(.mapboxgl-canvas) {
		width: 100% !important;
		height: 100% !important;
	}
</style>
