<template>
  <div class="banner-miranda">
    <NuxtPicture
        class="background-image"
        :src="screenWidth > 767 ? '/SpojteSeSNamiJesteDnes-banner.jpg' : '/SpojteSeSNamiJesteDnes-banner--mobile.jpg'"
        :imgAttrs="{ style: 'width:100%; height:100%; object-fit:cover;' }"
        loading="lazy"
        alt=""
        width="1920"
        height="500" />
    <div class="banner-miranda__content">
      <h2>Spojte se s námi ještě dnes!</h2>
      <div class="buttons-center">
        <button class="btn-primary">
         <a class="phone" href="tel:+420732264251">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#59DC8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M22 6L12 13L2 6" stroke="#59DC8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
           +420 732 264 251
         </a>
        </button>
        <button class="btn-primary">
         <a class="mail" href="mailto:info@mirandamedia.cz">
           <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M21.0024 15.9201V18.9201C21.0035 19.1986 20.9465 19.4743 20.8349 19.7294C20.7233 19.9846 20.5597 20.2137 20.3545 20.402C20.1492 20.5902 19.9069 20.7336 19.6431 20.8228C19.3793 20.912 19.0997 20.9452 18.8224 20.9201C15.7452 20.5857 12.7894 19.5342 10.1924 17.8501C7.7762 16.3148 5.72771 14.2663 4.19237 11.8501C2.50235 9.2413 1.45062 6.27109 1.12237 3.1801C1.09739 2.90356 1.13025 2.62486 1.21887 2.36172C1.3075 2.09859 1.44995 1.85679 1.63714 1.65172C1.82434 1.44665 2.05218 1.28281 2.30617 1.17062C2.56015 1.05843 2.83472 1.00036 3.11237 1.0001H6.11237C6.59768 0.995321 7.06817 1.16718 7.43614 1.48363C7.80411 1.80008 8.04445 2.23954 8.11237 2.7201C8.239 3.68016 8.47382 4.62282 8.81238 5.5301C8.94692 5.88802 8.97604 6.27701 8.89628 6.65098C8.81653 7.02494 8.63124 7.36821 8.36237 7.6401L7.09237 8.9101C8.51593 11.4136 10.5888 13.4865 13.0924 14.9101L14.3624 13.6401C14.6343 13.3712 14.9775 13.1859 15.3515 13.1062C15.7255 13.0264 16.1145 13.0556 16.4724 13.1901C17.3796 13.5286 18.3223 13.7635 19.2824 13.8901C19.7681 13.9586 20.2118 14.2033 20.5289 14.5776C20.846 14.9519 21.0145 15.4297 21.0024 15.9201Z" stroke="#59DC8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
           info@mirandamedia.cz
         </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const screenWidth = useState('screenWidth')
</script>

<style scoped lang="scss">
.banner-miranda {
  @media screen and ($mobile-responsive) {
    min-height: 655px;
  }
}
.banner-miranda__content {
  padding-inline: 20px;
  position: relative;
  h2 {
    margin-top: 0;
    margin-bottom: 40px;
  }
}
</style>