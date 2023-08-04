<template>
  <Home/>
</template>

<script>
import Vue from 'vue'
import "assets/css/main.css";
import PrimeVue from 'primevue/config';
import AOS from 'aos'
import 'aos/dist/aos.css';
Vue.use(PrimeVue);
export default {
  name: 'IndexPage',
  components:"",
  mounted(){
    AOS.init();
  }
}
/*export default {
  

}*/
</script>
