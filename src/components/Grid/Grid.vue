<template>
  <div 
    class="root-grid"
    :style="styles"
  >
    <Cell 
      v-for="(cell, index) in grid"
      :key="`${index}_cell`"
      :cell="cell"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import Cell from './Cell.vue'
  import { ICell, IGridStyle } from './model'

  export default defineComponent({
    name: 'Grid',
    components: { Cell },
    props: {
      grid: {
        type: Array as PropType<Array<ICell>>,
        default: () => ([]),
      },
      styleGrid: {
        type: Object as PropType<IGridStyle>,
        default: () => ({})
      },
    },
    computed: {
      styles(): Object {
        return {
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gridAutoRows: 'minmax(300px, max-content)',
          gridGap: '20px',
          ...this.styleGrid,
        }
      },
    }
  })
</script>

<style lang="scss" scoped>
  .root-grid {
    display: grid;
  }
</style>
