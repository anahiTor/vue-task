<template>
    <div class="custom-select">
        <div class="selected" @click='showOptions = !showOptions'>
            <span>{{selected ? selected : sortFor }}</span>
            <span>▾</span>
        </div>
        <div :class="showOptions ? 'options-block-open' : 'options-block'">
            <div class="option" v-for="(option,i) in options" :key="i" @click="()=>selectOption(option)">>{{option}}</div>
        </div>
        <div @click="discardChanges" v-if="selected" class="discard">
            <i class="fas fa-times"></i>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: ['sortFor', 'type'],
    data() {
        return{
            options: [
                500,
                1500,
                5000
            ],
            selected: null,
            showOptions: false
        }
    },
    computed: {
        ...mapState(['sorts'])
    },
    methods:{
        async selectOption(val) {
           await this.$store.commit('SORT_BY', {val, sortfor: this.type})
           this.selected = val;
           this.showOptions = false
        },
        async discardChanges() {
           await this.$store.dispatch('discardChanges')
           this.selected = null
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/scss/customSelect';
</style>