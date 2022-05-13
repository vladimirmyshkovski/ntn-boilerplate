<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">{{ $t('Index title') }}</h1>
      <h2 class="subtitle text-center">{{ $t('Index description') }}</h2>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">
        {{ $t('Index body') }}
      </h3>
      <posts post-type="glossary" :amount="1" />
    </section>
  </main>
</template>
