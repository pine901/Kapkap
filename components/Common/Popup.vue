<template>
  <div v-if="showModal" class="nuxtmodal-overlay" @click="showModal = false">
    <div class="nuxtmodal " @click.stop>
      <div class="close full_width" @click="showModal = false">
        <h6>{{ mTitle }}</h6>
        <a class="close-img">&#x2715;</a>
      </div>
      <p v-html="mMessage" />
      <a class="btn btn--green form__btn popup__btn" @click="showModal = false">
        OK
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Popup extends Vue {
  showModal: any = false
  mMessage: any = ''
  mTitle: any = ''

  showMessage (event: any) {
    this.showModal = true
    this.mMessage = event.message
    this.mTitle = event.title
  }
}
</script>

<style scoped>
  .full_width {
    width: 100%;
  }
  .close-img {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 100%;
    text-align: right;
  }
  .popup__btn {
    padding: 10px 40px;
  }
</style>
