<template lang="pug">
  li
    img(:src="artista.image[2]['#text']")
    h2: a(:href="artista.url" target="_blank") {{ artista.name }}
</template>

<script>
    export default {
        name: "Artist",
        props: [ 'artista' ]
    }
</script>

<style scoped lang="stylus">
  li
    display inline-block
    margin 10px 20px
    border 1px gray solid
</style>
