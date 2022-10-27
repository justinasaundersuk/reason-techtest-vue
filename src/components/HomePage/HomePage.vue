<template>
  <h1>Home</h1>
  <h2>vuex navigation store</h2>
  <div v-for="(navitem) in $store.state.navigation" :key="navitem.id">
    {{ navitem.id }} - {{ navitem.pagename }} - {{ navitem.url }}
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu hendrerit orci, a accumsan nibh. Fusce bibendum luctus risus, eget euismod mi condimentum at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu metus purus. Nullam in justo pretium, vulputate erat non, tristique est. Nunc scelerisque felis quis metus posuere, sed suscipit turpis euismod. Suspendisse posuere arcu eget quam porta condimentum. Aliquam fringilla accumsan tincidunt. Maecenas vestibulum ante et pellentesque euismod. Aenean sed sapien consectetur, blandit est eu, pretium magna. Curabitur ac mauris dapibus, luctus purus non, congue purus. Ut dictum dapibus est, ac viverra nisi euismod a. Donec congue eu libero eget pharetra. Donec et mauris id arcu consectetur finibus sed non libero. Etiam orci turpis, laoreet non luctus porttitor, ornare id sapien.</p>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'HomePage'
}
</script>