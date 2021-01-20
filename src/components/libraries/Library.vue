<template>
  <div class="lib-wrapper">
    <div class="block">
        {{name}}
    </div>
    <div class="block">{{address}}</div>
    <div class="block">{{territory}}</div>
    <div class="block">
      <router-link :to='{name:"About", params: {id:id}}'>
        <i class="fas fa-ellipsis-h"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: ['id', 'address', 'name', 'territory'],
  computed: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/library.scss';
</style>
