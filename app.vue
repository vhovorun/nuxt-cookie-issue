<template>
  <NuxtLink to="/">
    <span>Home</span>
  </NuxtLink>

  <NuxtLink to="/market">
    <span>Market</span>
  </NuxtLink>

  <div>
    <p>Cookie from the store: {{ testCookie }}</p>
    <button @click="updateCookie">Change store cookie</button>
  </div>

  <NuxtPage/>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCookieStore } from '@/store';

const cookieStore = useCookieStore();
const {updateCookie} = cookieStore;

const {testCookie} = storeToRefs(cookieStore);
</script>

<style lang="scss">
a {
  margin-right: 20px;
}
</style>
