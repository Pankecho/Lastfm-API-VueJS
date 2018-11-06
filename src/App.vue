<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 Platzi Music
    select(v-model="paisSeleccionado")
      option(v-for="pais in paises" :value="pais.value" ) {{ pais.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artista in artistas" :artista="artista" :key="artista.mbid")
</template>

<script>
  import getArtistas from './api'
  import Artista from './components/Artist'
  import Spinner from './components/Spinner'
  export default {
    name: 'app',
    data () {
      return {
        artistas: [],
        paises: [
          { name: 'México', value: 'mexico'},
          { name: 'España', value: 'spain'},
          { name: 'Colombia', value: 'colombia'},
          { name: 'Argentina', value: 'argentina'}
        ],
        paisSeleccionado: 'mexico',
        loading: true
      }
    },
    methods: {
      actualizaArtistas(){
        const self = this
        this.loading = true
        getArtistas(this.paisSeleccionado)
          .then(function (data) {
            self.artistas = data
            self.loading = false
          })
      }
    },
    components: {
      Spinner,
      artist: Artista
    },
    mounted: function () {
      this.actualizaArtistas()
    },
    watch: {
      paisSeleccionado: function () {
        this.actualizaArtistas()
      }
    }
  }
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
h1, h2
  font-weight normal
ul
  list-style-type none
  padding 0
li
  display inline-block
  margin 0 10px
a
  color #42b983
</style>
