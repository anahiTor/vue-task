<template>
    <div class="details-wrapper">
        <button @click="$router.go(-1)">
            <i class="fas fa-long-arrow-alt-left"></i>
        </button>
        <div class="details-block">
            <h1>{{chosenLibrary.fullname}}</h1>
            <div class="detail"><strong>Territory: </strong>{{chosenLibrary.territory}}</div>
            <div class="detail"><strong>Address: </strong>{{chosenLibrary.address}}</div>
            <div class="detail"><strong>Formal Name: </strong>{{chosenLibrary.formname}}</div>
            <div class="detail"><strong>Computers: </strong>{{chosenLibrary.libraries_computers}}</div>
            <div class="detail"><strong>Users: </strong>{{chosenLibrary.users}}</div>
            <div class="detail"><strong>Visits: </strong>{{chosenLibrary.visits}}</div>
            <div class="detail"><strong>Subscribers: </strong>{{chosenLibrary.subscribers}}</div>
            <div class="detail"><strong>Employees: </strong>{{chosenLibrary.employees}}</div>
            <div class="detail"><strong>Funds: </strong>{{chosenLibrary.subscribers}} RUB</div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'LibDetails',
  props: ['id'],
  data() {
      return{
          library: {},
      }
  },
  computed: {
      ...mapState(['libraries', 'chosenLibrary'])
  },
  medthods:{

  },
  async created() {
    this.$store.dispatch('showDetails', this.id)
  }
}
</script>
<style lang="sass">
@import '../../assets/scss/details';
</style>