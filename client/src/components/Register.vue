<template>
  <div>
    <!-- pagina teste -->
    <h1>Register</h1>
    <input type="text" name="nome" v-model="nome" placeholder="Nome">
    <br>
    <input type="text" name="img" v-model="img" placeholder="URL da imagem">
    <br>
    <button @click="register">Cadastrar</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      nome: '',
      img: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
          nome: this.nome,
          img: this.img
      })
      console.log(response.data); 
    }
  }
}
</script>

<style scoped>
</style>
