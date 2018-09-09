<template>
  <div>
    <!-- pagina teste -->
    <h1>Consultar</h1>
    
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
    }
  },
  beforeMount () {
      const resposta = AuthenticationService.consultar()
      console.log(resposta);

  }
}
</script>

<style scoped>
</style>
