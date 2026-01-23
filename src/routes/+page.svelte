<script>
	import '$lib/interflux-design-system.scss';
	import '$lib/app.scss';
</script>

<section id="hero">
	<img id="logo-1" src="/img/logo-1.svg" alt="Interflux logo 1" />
	<h1>
		<span>Partenaire de confiance<br /></span>
		<span>de l'industrie électronique<br /></span>
		<span>en France <img id="flag" src="/img/flag.svg" alt="flag of France" /></span>
	</h1>
	<p>
		<span>Membre du&nbsp;</span>
		<a href="https://interflux.group" target="_blank">
			<span>Groupe Interflux</span>
			<img id="logo-2" src="/img/logo-2.svg" alt="Interflux logo 2" />
		</a>
	</p>
	<img id="bg" src="/img/hero@2400x1400.jpg" alt="electronics" />
</section>

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
</style>
