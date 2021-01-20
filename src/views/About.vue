<template>
  <div class="about">
    <LibDetails :id='id'/>
  </div>
</template>
<script>
import LibDetails from '@/components/details/LibDetails.vue'

export default {
  components: {
    LibDetails
  },
  props: ['id']
}
</script>
