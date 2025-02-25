<template>
  <header>
    <RouterLink :to="{ name: 'home' }" class="header__logo"
      >Mon site</RouterLink
    >
    <nav>
      <RouterLink :to="{ name: 'posts.index' }">Blog</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    </nav>
  </header>
</template>

<script setup></script>

<style>
.header {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1rem;
  background: #ffffff10;
  border-bottom: 1px solid #ffffff2d;
}
</style>
