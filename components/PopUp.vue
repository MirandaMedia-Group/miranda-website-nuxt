<template>
	<Transition>
		<div id="popup-wrapper" v-if="showPopup" @click.self="showPopup = false">
			<div @click.prevent="showPopup = false" id="popup-close">
				<span></span>
				<span></span>
			</div>
			<div>
				<div class="popup-inner">
					<slot></slot>
				</div>
			</div>
		</div>
	</Transition>
</template>
<script setup>
	const showPopup = useState('showPopup', () => false)
	watch(
		() => showPopup.value,
		() => {
			if (showPopup.value) {
				document.body.classList.add('overflow-hidden')
			} else {
				document.body.classList.remove('overflow-hidden')
			}
		}
	)
</script>
<style lang="scss" scoped>
	#popup-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		// right: 0;
		// bottom: 0;
		padding: 20px;
		width: 100%;
		height: 100vh;
		background-color: rgba($color-font, 0.6);
		backdrop-filter: blur(10px);
		z-index: 1001;
		display: flex;
		// align-items: center;
		justify-content: center;
		overflow-y: scroll;
		padding-top: 100px;
		.popup-inner {
			max-width: 740px;
			width: 100%;
			position: relative;
		}
		// & > div:not(#popup-close) {
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: center;
		// }
	}
	#popup-close {
		position: absolute;
		width: 44px;
		height: 44px;
		top: 2rem;
		right: 2rem;
		cursor: pointer;
		span {
			display: block;
			background-color: $color-white;
			height: 3px;
			width: 42px;
			position: absolute;
			top: 50%;
			transition: all 0.15s ease-in-out;
			&:first-child {
				transform: rotate(45deg);
			}
			&:last-child {
				transform: rotate(-45deg);
			}
		}
		&:hover {
			span {
				background-color: $color-accent;
			}
		}
	}
	.v-enter-active,
	.v-leave-active {
		transition: all 0.5s ease;
		.popup-inner {
			transition: all 0.5s ease;
		}
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
		.popup-inner {
			transform: scale(0);
		}
	}
</style>
