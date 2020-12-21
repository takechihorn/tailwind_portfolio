<template>
  <div class="grid md:grid-col-3 bg-blue-200 h-screen w-screen">
    <div class="md:col-span-1 md:justify-end">
      <Nav/>
    </div>
    <div class="md:col-span-2">
      <Nuxt />
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>


<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  components:{
    Nav,
    Footer
  }
}
</script>
<style>

</style>
