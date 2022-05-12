<template>
  <main>
    <section v-if="item">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

      <article>
        <img
          v-if="item.cover"
          class="cover-image"
          :src="item.cover"
        >
        <!-- <h6 class="inline py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">{{ item.category }}</h6> -->
        <h1 class="">{{ item.title }}</h1>
        <p class="mt-1 mb-8 text-primary-600 dark:text-primary-400">{{ item.description }}</p>
        <nuxt-content :document="item" />
        <!--div v-if="item.gallery" class="nuxt-content">
          <img
            v-for="image in item.gallery"
            class="image"
            :key="image.id"
            :src="image"
          >
        </div-->
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let item;
    try {
      item = await $content("glossary", params.item).fetch();
    } catch (e) {
      error({ message: "Glossary item not found" });
    }
    return { item };
  },
}
</script>
