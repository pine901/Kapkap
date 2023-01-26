<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <ul>
              <li>{{ $t('common.topbar_title') }}:</li>
              <li><i class="fa fa-phone" aria-hidden="true" /> <a :href="`tel:${phone}`">{{ phoneFormatted }}</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TopBar extends Vue {
  phone: string = <string>process.env.phone
  phoneFormatted: string = <string>process.env.phoneFormatted
}
</script>
