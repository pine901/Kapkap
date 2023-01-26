<template>
  <section class="section-b-space light-layout">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="success-text">
            <i class="fa fa-check-circle" aria-hidden="true" />
            <h2>{{ $t('newsletter.thankYou') }}</h2>
            <p>{{ $t('newsletter.newsletterRegulationAcceptance') }}</p>
          </div>
        </div>
        <p
          class="goToRegulations"
          @click="history.push('/regulamin-newslettera')"
        >
          {{ $t('newsletter.goToRegulations') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class NewsletterSuccessPage extends Vue {
  @Prop({ type: String, required: true }) hash!: string

  async created () {
    try {
      await this.$axios.post(`/v1/newsletter/${this.hash}`)
    } catch (err) {
      this.$nuxt.$emit('showMessage', {
        title: this.$t('newsletter.sorry'),
        message: this.$t('newsletter.error')
      })
    }
  }
}
</script>
