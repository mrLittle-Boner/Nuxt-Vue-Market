<template>
  <div :class="$style.categories">
    <h2 :class="$style.categories__title">
      Каталог
    </h2>
    <nav :class="$style.categories__nav">
      <NuxtLink :class="$style.categories__link" to="/1">
        Рюкзаки
      </NuxtLink>

      <NuxtLink :class="$style.categories__link" to="/2">
        Сумки
      </NuxtLink>

      <NuxtLink :class="$style.categories__link" to="/3">
        Деловые сумки
      </NuxtLink>
    </nav>
  </div>
</template>

<style module lang="scss">
@import '~assets/css/variables';
@import '~assets/css/mixins';

.categories {
  margin-right: 50px;
  max-width: 161px;
}

.categories__title {
  @include bold-text(3.2rem);
  color: $color-black;
  margin-bottom: 24px;
}

.categories__nav {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.categories__nav a {
  color: $color-grey-light;
}

.categories__nav a:hover {
  color: $color-grey;
}
</style>
