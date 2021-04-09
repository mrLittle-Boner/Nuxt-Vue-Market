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
.categories {
  margin-right: 50px;

  &__title {
    font-size: 32px;
    color: black;
    font-weight: 700;
    margin-bottom: 24px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    a {
      color: #959DAD;

      &:hover {
        color: #59606D;
      }
    }
  }
}
</style>
