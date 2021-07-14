<template>
  <c-reset />
  <c-grid template-columns="250px 1fr" h="100vh" w="100vw">
    <c-stack as="nav" grid-column="1/2" p="4" bg="gray.50">
      <c-link :as="RouterLink" to="/">
        Home
      </c-link>
      <c-link :as="RouterLink" to="/dashboard/settings">
        Settings
      </c-link>
      <c-link :as="RouterLink" to="/dashboard/reports">
        Reports
      </c-link>
      <c-link :as="RouterLink" to="/accounts">
        Accounts
      </c-link>
    </c-stack>
    <chakra.main grid-column="2/3">
      <router-view />
    </chakra.main>
  </c-grid>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>