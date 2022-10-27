<template>
  <header>
    <nav>
      <router-link :to="{ name: 'HomePage' }">Home</router-link>
      <router-link :to="{ name: 'WhatWeDo' }">What we do</router-link>
      <router-link :to="{ name: 'TheDigitalDivide' }">The digital divide</router-link>
      <router-link :to="{ name: 'GetInvolved' }">Get involved</router-link>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active {
  border: 1px dashed #41b883;
}

a {
  display: inline-block;
  padding: 1rem;
  text-decoration: none;
  color: #35495e;
  font-weight: bold;
}
</style>

<script>
export default {
  name: 'Navigation'
}
</script>