<template>
  <div class="input-box shipping-box">
    <h4>{{ title }}</h4>
    <ul class="icons shipping-select-container">
      <li v-for="(type, index) in types" :key="`shipping-${type.id}`" class="shipping-option">
        <input
          :id="`${group}-${type.id}`"
          type="radio"
          :name="group"
          :checked="selected === index"
          @click="deliveryType = index"
        >
        <label class="corner-picker" :for="`${group}-${type.id}`" v-html="type.label" />
      </li>
    </ul>
    <div
      v-show="deliveryType === 1"
      id="inpost-geo"
      duration="1"
      height="300"
    >
      <div class="geowidget">
        <div id="easypack-map" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'

@Jsonld
@Component({
  components: {}
})

export default class checkoutBoxes extends Vue {
  @Prop({ type: String, required: false }) title!: any
  @Prop({ type: String, required: false }) group!: any
  @Prop({ type: Array, required: false }) types!: any
  @Prop({ type: Number, required: false }) selected!: any
  deliveryType: number = 0
  mounted () {
    if ((window as any).easyPack) {
      (window as any).easyPackAsyncInit = function () {
        (window as any).easyPack.init({
          defaultLocale: 'pl',
          mapType: 'osm',
          searchType: 'osm',
          points: {
            types: ['parcel_locker']
          },
          map: {
            initialTypes: ['parcel_locker']
          }
        });

        (window as any).easyPack.mapWidget('easypack-map', function (point: any) {
          // changeMapStatus(false);
          // changeInpostAddress(point);
        })
      }
    }
  }
};
</script>
