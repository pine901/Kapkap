<template>
  <div
    id="inpost-geo"
    data-duration="180"
    data-height="300"
  >
    <div class="geowidget">
      <button type="button" class="inpost-close" @click="$emit('close')">
        ×
      </button>
      <div id="easypack-map" />
    </div>
  </div>
</template>

<script lang="ts">
import { Getter, Mutation, Vue } from 'nuxt-property-decorator'

export default class InpostMap extends Vue {
  @Getter('app/isEasyPackLoaded') isEasyPackLoaded!: boolean
  @Mutation('app/setEasyPackAsLoaded') setEasyPackAsLoaded!: Function
}
</script>

<style lang="scss">
#inpost-container {
  position: fixed;
  top: 170px;
  left: 20%;
  width: 60%;
  height: 750px;
  z-index: 9999;
}

.geowidget .title {
  font-size: 19px;
}

.easypack-widget .easypack-search-widget .search-group:not(.with-filters) {
  max-width: 90%;
}

.inpost-close {
  position: absolute;
  right: 10px;
  top: 17px;
  z-index: 9;
  width: 30px;
  height: 30px;
  color: #fff;
  background: #000;
  border: 0;
  font-size: 29px;
}

.geowidget {
  min-height: 442px;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  position: relative;
  background: #fff;
}

#inpost-geo {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 70px 10%;
}

@media (max-width: 1024px) {
  .geowidget {
    height: 100%;
  }

  #inpost-geo {
    padding: 0;
    height: 100%;
  }
}
</style>
