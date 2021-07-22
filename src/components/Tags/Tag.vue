<template>
  <div 
    class="root-tag"
    :style="styles"
    @click="$emit('click-tag', tag)"
  >
    {{ title }}
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { ITag } from './model';

  export default defineComponent({
    name: 'Tag',
    props: {
      tag: {
        type: Object as PropType<ITag>,
        default: () => ({}),
      },
    },
    computed: {
      title(): String {
        return this.tag.title
      },
      styles(): Object {
        const { styles = {}, active = false } = this.tag

        return {
          ...styles,
          ...(!active && { opacity: '0.5' }),
        }
      },
    }
  })
</script>

<style lang="scss" scoped>
  .root-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    font-weight: bold;
    color: var(--white);
    font-size: 10px;
    border-radius: 3px;
    letter-spacing: 1px;
    padding: 2px 4px 2px 5px;
    cursor: pointer;
    transition: all .3s ease;
    text-transform: uppercase;
  }
</style>
