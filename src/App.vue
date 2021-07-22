<template>
  <div class="container">
    <Tags
      :tags="tags"
      @click-tag="clickTag"
    />
    <Grid :grid="gridFilter" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  
  import Tags, { ITag } from './components/Tags'
  import Grid, { EMods, ICell, ITag as ITagCell } from './components/Grid'
  import Image from './assets/image/image.jpg'
  import ImagePng from './assets/image/image-png.png'

  export default defineComponent({
    name: 'App',
    components: {
      Tags,
      Grid,
    },
    data() {
      return {
        tags: [
          {title: 'TRAVEL', styles: { backgroundColor: '#6b3de4' }, active: true}, 
          {title: 'EXPLORERS', styles: { backgroundColor: '#d9a34a' }, active: true}, 
          {title: 'NATURE', styles: { backgroundColor: '#41a674' }, active: true}, 
          {title: 'КОРМА', styles: { backgroundColor: '#d9a34a' }, active: true}, 
          {title: 'СЕЛЬСКОЕ ХОЯЙСТВО', styles: { backgroundColor: '#41a674' }, active: true},
          {title: 'SCIENCE', styles: { backgroundColor: '#007ac2' }, active: true},
        ],
        grid: [
          {tags: [{title: 'TRAVEL', styles: {backgroundColor: '#6b3de4'}}], title: 'Robot’s Penguin Disguise Keeps Birds', description: 'Figuring out how our brains work is key to understanding ', link: '//link', image: Image, mods: [EMods.IMAGE], stylesCell: { gridRow: '', gridColumn: '', backgroundColor: '' }},
          {tags: [{title: 'EXPLORERS', styles: {backgroundColor: '#d9a34a'}}], title: '5 Things We Learned From X-Men: Days of Future Past', description: 'Peter Dinklage’s porn ‘tache,<br /> Jennifer Lawrence’s brilliance and<br /> more. Some (tiny) spoilers ahead', link: '//link', image: ImagePng, mods: [EMods.IMAGE_RIGHT], stylesCell: { gridRow: '', gridColumn: 'auto / span 2', backgroundColor: '' }},
          {tags: [{title: 'SCIENCE', styles: {backgroundColor: '#007ac2'}}], title: '14 Things Men Should Never Wear After 30', description: 'Light a bonfire in the garden, and step bravely into your best-dressed decade', link: '//link', image: '', mods: [EMods.BG_COLOR, EMods.SHOW_BTN], stylesCell: { gridRow: '', gridColumn: '', backgroundColor: '#0080b9' }},
          {tags: [{title: 'КОРМА', styles: {backgroundColor: '#d9a34a'}}, {title: 'СЕЛЬСКОЕ ХОЯЙСТВО', styles: {backgroundColor: '#41a674'}}], title: 'Комбикорма для уток и свиней оптом', description: 'Наши корма дают +20% к приросту массы в год', link: '//link', image: '', mods: [], stylesCell: { gridRow: '', gridColumn: '', backgroundColor: '' }},
          {tags: [{title: 'EXPLORERS', styles: {backgroundColor: '#d9a34a'}}], title: 'Stunning Changes Along Colorado River', description: 'Lake Powell offering kayakers new channels to explore', link: '//link', image: Image, mods: [], stylesCell: { gridRow: '', gridColumn: '', backgroundColor: '' }},
          {tags: [{title: 'TRAVEL', styles: {backgroundColor: '#6b3de4'}}], title: '14 Things Men Should Never Wear After 30', description: 'Light a bonfire in the garden, and step bravely into your best-dressed decade', link: '//link', image: '', mods: [EMods.BG_COLOR, EMods.SHOW_BTN], stylesCell: { gridRow: 'auto / span 2', gridColumn: '', backgroundColor: '#6b3de4' }},
          {tags: [{title: 'NATURE', styles: {backgroundColor: '#41a674'}}], title: 'Offbeat Portraits Give Stars a New Turn', description: 'I whipped the Scotch tape from my pocket and said', link: '//link', image: Image, mods: [], stylesCell: { gridRow: '', gridColumn: '', backgroundColor: '' }},
          {tags: [{title: 'EXPLORERS', styles: {backgroundColor: '#d9a34a'}}], title: 'Must See Places of the New Year', description: 'Whether it’s India’s literary hub or mountain majesty ', link: '//link', image: Image, mods: [], stylesCell: { gridRow: '', gridColumn: '', backgroundColor: '' }},
          {tags: [{title: 'SCIENCE', styles: {backgroundColor: '#007ac2'}}], title: 'Robot’s Penguin Disguise Keeps Birds ', description: 'Figuring out how our brains work is key to understanding', link: '//link', image: Image, mods: [], stylesCell: { gridRow: '', gridColumn: '', backgroundColor: '' }},
          {tags: [{title: 'TRAVEL', styles: {backgroundColor: '#6b3de4'}}], title: 'Stunning Video Reveals Invisible CO2', description: 'A NASA visualization shows the swirling gas ', link: '//link', image: Image, mods: [], stylesCell: { gridRow: '', gridColumn: '', backgroundColor: '' }},
        ]
      }
    },
    computed: {
      activeTags():Array<string> {
        return this.tags
          .filter(item => item.active)
          .map(item => item.title);
      },
      gridFilter(): Array<ICell> {
        return this.grid.filter(item => (item.tags as Array<ITagCell>).some(tag => this.activeTags.includes(tag.title)))
      },
    },
    methods: {
      clickTag(tag: ITag): void {
        const index = this.tags.findIndex(item => item.title === tag.title);

        this.tags[index].active = !this.tags[index].active;
      },
    },
  })
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px;
    background-color: var(--grey);
  }
</style>