<template>
  <div>
    <detail/>
  </div>
</template>
<script>
import detail from '@/components/detailCinema.vue'
import {mapActions,mapState} from 'vuex'
export default {
  name:"detail1",
  components:{
    detail
  },
  beforeDestroy() {
    console.log('xiaohui')
  },

}
</script>
