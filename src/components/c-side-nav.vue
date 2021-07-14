<template>
  <c-stack as="nav" p="4" bg="gray.50">
    <c-app-link left-icon="home" to="/">
      Home
    </c-app-link>
    <c-app-link left-icon="settings" to="/dashboard/settings">
      Settings
    </c-app-link>
    <c-app-link left-icon="pie-chart" to="/dashboard/reports">
      Reports
    </c-app-link>
    <c-app-link left-icon="user" to="/accounts">
      Account
    </c-app-link>
  </c-stack>
</template>