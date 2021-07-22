<template>
  <div class="root-tags">
    <Tag
      v-for="(tag, index) in tags" 
      class="tag"
      :key="index"
      :tag="tag"
      @click-tag="$emit('click-tag', $event)"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import Tag from './Tag.vue'
  import { ITag } from './model';

  export default defineComponent({
    name: 'Tags',
    components: { Tag },
    props: {
      tags: {
        type: Array as PropType<Array<ITag>>,
        default: () => ([]),
      },
    },
  })
</script>

<style lang="scss" scoped>
  .root-tags {
    padding: 12px 0;  
  }
  .tag {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
</style>
