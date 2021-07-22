<template>
  <div 
    :class="[ROOT_CLASS, ...classesRoot]"
    :style="style"
  >
    <div class="root-cell__tags">
      <div 
        v-for="(tag, index) in cell.tags"
        :key="index"
        :style="tag.styles"
        class="root-cell__tag" 
      >
       {{ tag.title }}
      </div>
    </div>
    <div 
      v-if="cell.image" 
      class="root-cell__image"
      :style="{ backgroundImage: `url(${cell.image})` }"
    >
      <img :src="cell.image" hidden>
    </div>
    <div class="root-cell__title">
      {{ cell.title }}
    </div>
    <div class="root-cell__description" v-html="cell.description" />
    <div v-if="isModeBtn && cell.link" class="root-cell__btn-wrap">
      <a class="root-cell__btn" :href="cell.link">
        Read more
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import { ICell, EMods } from './model'

  export default defineComponent({
    name: 'Cell',
    props: {
      cell: {
        type: Object as PropType<ICell>,
        default: () => ({}),
      },
    },
    computed: {
      ROOT_CLASS(): String {
        return 'root-cell'
      },
      isModeBtn(): Boolean {
        const { mods = [] } = this.cell

        return mods.includes(EMods.SHOW_BTN)
      },
      classesRoot(): Array<String> {
        const { mods = [], image } = this.cell
        const classes = [...(mods.length ? mods: [EMods.IMAGE])]

        if (!image) {
          classes.push('not-image')
        }

        return this.classModificators(this.ROOT_CLASS, classes)
      },
      classModificators(): Function {
        return (classElement: String, mods: Array<string>): Array<string> => {
          return mods.map(item => `${classElement}--${item}`)
        }
      },
      style(): Object {      
        const { stylesCell = {} } = this.cell

        return stylesCell
      },
    }
  })
</script>

<style lang="scss" scoped>
  .root-cell {
    background-color: var(--white);
    position: relative;
    border-radius: 3px;

    &__tags {
      position: absolute;
      top: 23px;
      left: 0;
      padding: 0 23px;
      font-family: 'Montserrat';
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 1px;
      color: var(--white);
    }

    &__tag {
      display: inline-flex;
      padding: 2px 5px;
      border-radius: 3px;
      text-transform: uppercase;

      &:not(:last-child) {
        margin-bottom: 5px;
        margin-right: 5px;
      }
    }

    &__title {
      font-family: 'Montserrat';
      font-size: 15px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.2px;
      color: var(--charcoal-grey);
      padding: 12px 23px 0;
    }

    &__description {
      font-family: 'PT Serif';
      font-size: 14px;
      line-height: 1.29;
      font-weight: normal;
      letter-spacing: normal;
      color: var(--steel-grey);
      margin-top: 7px;
      padding: 0 23px 20px;
    }

    &__image {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      &::before {
        content: '';
        display: block;
        padding-bottom: calc(170/230 * 100%);
      }
    }

    &__btn-wrap {
      margin: 16px 0 0 0;
      display: flex;
      justify-content: center;
    }

    &__btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 132px;
      height: 34px;
      border-radius: 20px;
      border: solid 1px #ededed;
      font-family: 'Montserrat';
      font-size: 10px;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      line-height: 1.2;
      letter-spacing: 2px;
      color: var(--white);
      cursor: pointer;
    }

    &--not-image {
      padding: 23px 0;

      .root-cell__tags {
        position: static;
      }
    }

    &--image-right {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .root-cell__tags {
        position: static;
        max-width: 55%;
      }

      .root-cell__title {
        padding-top: 17px;
        font-size: 22px;
        font-weight: bold;
        letter-spacing: -0.4px;
        max-width: 55%;
      }

      .root-cell__description {
        max-width: 55%;
      }

      .root-cell__image {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 55%;
        background-size: contain;
      }
    }

    &--bg-color {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .root-cell__tags {
        display: flex;
        justify-content: center;
      }
      .root-cell__description {
        opacity: 0.6;
      }
      .root-cell__description,
      .root-cell__title {
        color: var(--white);
        text-align: center;
      }
    }
  }
</style>
