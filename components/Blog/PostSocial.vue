<template>
  <ul class="post-social">
    <li class="date">
      {{ blog.dateCreated | date }}
    </li>
    <li><span class="description">{{ $t('blog.postedBy') }}:</span> {{ blog.author }}</li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Blog } from '~/store/blog/state'

@Component({
  components: {}
})
export default class PostSocial extends Vue {
  @Prop({ required: true }) readonly blog!: Blog
}
</script>

<style scoped lang="scss">
.post-social {
  display: flex;
  color: $grey;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;

  li:not(:last-child):after {
    content: '';
    border-right: 1px solid $grey;
    padding-left: 10px;
    margin-right: 10px;
  }

  .date {
    color: $green
  }

  .vl {
    padding-right: 10px;
    margin-left: 10px;
  }

}
</style>
