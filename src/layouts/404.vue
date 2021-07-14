<template>
  <c-reset />
  <router-view />
  <c-center h="100vh" w="100vw">
    <c-stack>
      <c-alert status="error" variant="left-accent">
        <c-alert-icon />
        <c-alert-description>Not found :(</c-alert-description>
      </c-alert>
      <c-button @click="router.back" left-icon="arrow-left">
        Return
      </c-button>
    </c-stack>
  </c-center>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
