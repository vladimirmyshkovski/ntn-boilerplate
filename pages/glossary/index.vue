<template>
  <main>
    <section v-if="glossary" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Glossary</h1>
      <posts post-type="glossary" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let glossary;
    try {
      glossary = await $content("glossary").fetch();
      console.log('glossary', glossary)
    } catch (e) {
      error({ message: "Glossary not found" });
    }
    return { glossary };
  },
}
</script>
