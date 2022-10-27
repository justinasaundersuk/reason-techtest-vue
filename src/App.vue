<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reason Digital Technical Test (Vue) - Justin Saunders</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
  </head>
  <Navigation />
  <BodyContent />
</template>

<script>
import BodyContent from './components/BodyContent/BodyContent.vue'; 
import Navigation from './components/Navigation/Navigation.vue';

export default {
  name: 'App',
  components: {
    BodyContent,
    Navigation
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 1rem;
  box-sizing: border-box;
}

body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}

h1 {
  font-size: 1.25rem;
}

h2 {
  margin: 0;
  font-size: 2rem;
}

h3 {
  margin: 0;
  font-size: 1.5rem;
}

a:visited {
  color: inherit;
}

figure {
  margin: 0;
}

select {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
}
</style>
