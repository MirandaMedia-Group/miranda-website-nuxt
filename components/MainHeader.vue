<template>
	<header>
		<NuxtLink to="/" class="logo">
			<svg width="67" height="55" viewBox="0 0 67 55" xmlns="http://www.w3.org/2000/svg" href="/">
				<path
					d="M0 0H6.76955V6.54484H0V0ZM0 8.08755H6.76955V14.6324H0V8.08755ZM0 16.1517H6.76955V22.6966H0V16.1517ZM0 24.2159H6.76955V30.7607H0V24.2159ZM0 32.3034H6.76955V38.8483H0V32.3034ZM0 40.3676H6.76955V46.9125H0V40.3676ZM0 48.4552H6.76955V55H0V48.4552ZM8.60104 0H15.3706V6.54484H8.60104V0ZM8.60104 8.08755H15.3706V14.6324H8.60104V8.08755ZM8.60104 16.1517H15.3706V22.6966H8.60104V16.1517ZM8.60104 24.2159H15.3706V30.7607H8.60104V24.2159ZM8.60104 32.3034H15.3706V38.8483H8.60104V32.3034ZM8.60104 40.3676H15.3706V46.9125H8.60104V40.3676ZM8.60104 48.4552H15.3706V55H8.60104V48.4552ZM17.2253 8.08755H23.9948V14.6324H17.2253V8.08755ZM17.2253 16.1517H23.9948V22.6966H17.2253V16.1517ZM17.2253 24.2159H23.9948V30.7607H17.2253V24.2159ZM17.2253 32.3034H23.9948V38.8483H17.2253V32.3034ZM25.8263 16.1517H32.5959V22.6966H25.8263V16.1517ZM25.8263 24.2159H32.5959V30.7607H25.8263V24.2159ZM25.8263 32.3034H32.5959V38.8483H25.8263V32.3034ZM25.8263 40.3676H32.5959V46.9125H25.8263V40.3676ZM34.4273 16.1517H41.1969V22.6966H34.4273V16.1517ZM34.4273 24.2159H41.1969V30.7607H34.4273V24.2159ZM34.4273 32.3034H41.1969V38.8483H34.4273V32.3034ZM34.4273 40.3676H41.1969V46.9125H34.4273V40.3676ZM43.0284 8.08755H49.7979V14.6324H43.0284V8.08755ZM43.0284 16.1517H49.7979V22.6966H43.0284V16.1517ZM43.0284 24.2159H49.7979V30.7607H43.0284V24.2159ZM43.0284 32.3034H49.7979V38.8483H43.0284V32.3034ZM51.6294 0H58.399V6.54484H51.6294V0ZM51.6294 8.08755H58.399V14.6324H51.6294V8.08755ZM51.6294 16.1517H58.399V22.6966H51.6294V16.1517ZM51.6294 24.2159H58.399V30.7607H51.6294V24.2159ZM51.6294 32.3034H58.399V38.8483H51.6294V32.3034ZM51.6294 40.3676H58.399V46.9125H51.6294V40.3676ZM51.6294 48.4552H58.399V55H51.6294V48.4552ZM60.2305 0H67V6.54484H60.2305V0ZM60.2305 8.08755H67V14.6324H60.2305V8.08755ZM60.2305 16.1517H67V22.6966H60.2305V16.1517ZM60.2305 24.2159H67V30.7607H60.2305V24.2159ZM60.2305 32.3034H67V38.8483H60.2305V32.3034ZM60.2305 40.3676H67V46.9125H60.2305V40.3676ZM60.2305 48.4552H67V55H60.2305V48.4552Z"></path>
			</svg>
		</NuxtLink>
		<nav>
			<ul>
				<li><NuxtLink to="/o-nas">O n??s</NuxtLink></li>
				<li><NuxtLink to="/reference">Reference</NuxtLink></li>
				<li><NuxtLink to="/shoptetnamiru">Shoptet na m??ru</NuxtLink></li>
				<li><NuxtLink to="/sluzby">Slu??by</NuxtLink></li>
				<li><NuxtLink to="/blog">Blog</NuxtLink></li>
				<li><NuxtLink to="/kariera">Kari??ra</NuxtLink></li>
				<li><NuxtLink to="/kontakty">Kontakty</NuxtLink></li>
			</ul>
		</nav>
		<div class="contacts">
			<a href="tel:00420732264251" class="project-phone">
				<span class="status"></span>
				+420 732 264 251
			</a>
			<a href="mailto:info@mirandamedia.cz" class="project-mail">info@mirandamedia.cz</a>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	header {
		padding: 70px;
		display: flex;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		a {
			display: inline-block;
			text-decoration: none;
			color: $color-white;
		}
	}
	.logo {
		svg {
			fill: $color-white;
		}
	}
	nav {
		margin-left: auto;
		ul {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			a {
				padding: em(15);
				border: 1px solid transparent;
				&:hover,
				&:focus {
					color: $color-accent;
					border-color: $color-accent;
					box-shadow: 0 0 15px rgba($color-accent, 0.3);
				}
			}
		}
	}
	.contacts {
		padding-left: 20px;
		margin-left: 20px;
		border-left: 2px solid $color-accent;
		position: relative;
		a {
			display: block;
			line-height: 1.4em;
		}
		.project-phone {
			font-weight: 700;
			display: flex;
			align-items: center;
		}
		.project-mail {
			padding-left: 38px;
		}
	}
	.status {
		display: inline-block;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		border: 3px solid $color-white;
		box-shadow: 0 0 20px $color-white;
		background: radial-gradient(50% 50% at 50% 50%, #a5ff96 0, #59dc8e 100%);
		top: 0;
		left: 20px;
		margin-right: 10px;
	}
</style>
