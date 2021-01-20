<template>
  <div class="wrapper">
    <Preloader v-show='!showContent' />
    <div v-show="showContent">
      <div class="sorter" >
        <div>Sort By:</div>
        <CustomSelect v-for="sort in sorts" :key='sort.type' :sortFor='sort.title' :type='sort.type'/>
      </div>
      <div class="content">
        <div style="margin-top:5em">
          <div class="properties">
            <div class="name">Name</div>
            <div class="address">Address</div>
            <div class="territory">Territory</div>
            <div class="actions">Show More</div>
          </div>
          <Library v-for="lib in libraries" :key="lib.id" :id="lib.order" :address="lib.address" :name="lib.fullname" :territory="lib.territory"/>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Preloader from '../Preloader.vue';
import CustomSelect from './CustomSelect.vue';
import Library from './Library.vue';
export default {
  components: { Preloader, Library, CustomSelect },

  data() {
    return {
    }
  },

  computed: {
    ...mapState(['libraries', 'showContent','sorts'])
  },


  async created(){
    const interval = setTimeout(() => {
      this.$store.dispatch('fetchData')
        clearInterval(interval)
      }, 2000)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/libraries.scss';
</style>
