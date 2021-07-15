<template>
  <c-center p="10" bg-gradient="linear(to-l, emerald.500, teal.500)" color="white" font-weight="bold" h="100vh">
    <c-v-stack spacing="8">
      <c-heading size="4xl" color="white">
        Chakra UI Vue v1 ⚡️
      </c-heading>
      <c-stack spacing="8" :direction="{ base: 'column', sm: 'column', md: 'row' }" color="emerald.500">
        <c-h-stack>
          <c-button size="md" as="router-link" left-icon="pie-chart" to="/dashboard/settings">
            Dashboard
          </c-button>
          <c-button size="md" as="router-link" left-icon="user" to="/dashboard/accounts">
            Accounts
          </c-button>
        </c-h-stack>
        <c-button align-self="start" :_hover="{ bg: 'gray.50', color: 'emerald.500' }" size="md" as="a" left-icon="book-open" href="https://next.vue.chakra-ui.com" target="_blank" variant="outline" color="gray.50" color-scheme="emerald">
          Docs
        </c-button>
      </c-stack>
      <c-button :_hover="{ bg: 'gray.50', color: 'emerald.500' }" align-self="start" size="sm" as="a" left-icon="github" href="https://github.com/codebender828/chakra-ui-chidori-starter" target="_blank" variant="outline" color="gray.50" color-scheme="emerald">
        View on Github
      </c-button>
    </c-v-stack>
  </c-center>
</template>