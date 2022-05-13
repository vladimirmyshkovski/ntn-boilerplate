<template>
  <div class="fixed bottom-0 right-0 m-3">
    <nuxt-link v-if="$i18n.locale !== 'en'" class="btn block" :to="switchLocalePath('en')"> EN </nuxt-link>
    <nuxt-link v-if="$i18n.locale !== 'ru'" class="btn block" :to="switchLocalePath('ru')"> RU </nuxt-link>
  </div>
</template>
