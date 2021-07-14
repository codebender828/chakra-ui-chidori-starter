<template>
  <c-reset />
  <router-view />
  <c-grid template-columns="250px 1fr" h="100vh" w="100vw">
    <c-side-nav grid-column="1/2" />
    <c-stack grid-column="2/3" spacing="8" p="10">
      <c-alert status="error" rounded="lg">
        <c-alert-icon />
        <c-alert-title>Not found.</c-alert-title>
        <c-alert-description>
          Try visiting another page, or <chakra.span font-weight="bold" text-decoration="underline"><router-link d="inline" to="/">return home.</router-link></chakra.span>
        </c-alert-description>
      </c-alert>
      <c-button align-self="start" @click="router.back" left-icon="arrow-left">
        Previous page
      </c-button>
    </c-stack>
  </c-grid>
</template>

<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
</script>
