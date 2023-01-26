<template>
  <div class="blog-sidebar">
    <div>
      <div class="recent-posts">
        <h4>Recent Blog</h4>
        <ul class="recent-blog">
          <li v-for="(blog,index) in blogs.slice(0, 6)" :key="index">
            <div>
              <Picture :path="`${assets}${blog.imageURL}`" class-name="img-fluid" :alt="blog.title" />
              <div>
                <h6 class="date">
                  {{ blog.dateCreated }}
                </h6>
                <p>{{ blog.title }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="popular-tags">
        <h4>Popular Tags</h4>
        <ul class="tags-list">
          <li v-for="(tag,index) in tags" :key="index">
            <span>{{ tag }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import { Blog } from '~/store/blog/state'
import Picture from '~/components/Common/Picture.vue'

@Component({
  components: { Picture }
})
export default class SideBar extends Vue {
  @Getter('blog/blogTags') tags: string[] = ['kubek', 'pies', 'kubek z napisem']
  @Getter('blog/blogs') blogs!: Blog[]

  assets: string = <string>process.env.assetsURL
}
</script>

<style scoped lang="scss">
  .recent-posts {
    li:not(:last-child) {
      border-bottom: 1px solid $border;
      margin-bottom: 10px;
      padding-bottom: 10px;
    }
  }

  .popular-tags,
  .recent-posts{
    padding: 30px;
    border: 1px solid $border;

    h4 {
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 20px;
      line-height: 20px;
      letter-spacing: 1px;
    }

    .date {
      color: $font-color;
      font-weight: 700;
    }
  }

  .popular-tags {
    margin-top: 20px;

    .tags-list span{
      margin: 0 4px;
      padding: 0 5px;
      background: $border;
    }
  }

</style>
