<template>
  <c-reset />
  <c-grid template-columns="250px 1fr" h="100vh" w="100vw">
    <c-side-nav grid-column="1/2" />
    <chakra.main grid-column="2/3">
      <router-view />
    </chakra.main>
  </c-grid>
</template>
