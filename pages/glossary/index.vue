<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">{{ $t('Glossary') }}</h1>
      <posts post-type="glossary" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, app, error }) {
    let posts
    try {
      posts = await $content('glossary', app.i18n.locale).fetch()
    } catch (e) {
      error({ message: 'Glossary not found' })
    }
    return {
      posts: posts.map((posts) => ({
        ...posts,
        path: posts.path.replace(`/${app.i18n.locale}`, '')
      }))
    }
  }
}
</script>
