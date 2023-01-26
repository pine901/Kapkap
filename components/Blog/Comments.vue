<template>
  <div class="blog-comments">
    <h2>Komentarze</h2>
    <div>
      <ul class="comment">
        <li>
          <div class="comment-content">
            <img
              src="~/assets/images/avtar.jpg"
              alt="Generic placeholder image"
            >
            <div class="comment-body">
              <h6>
                Mark Jecno
                <span>( 12 Jannuary 2018 at 1:30AM )</span>
              </h6>
              <p>
                Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id
                est sit amet felis fringilla bibendum at at leo. Proin molestie
                ac nisi eu laoreet. Integer faucibus enim nec ullamcorper
                tempor. Aenean nec felis dui. Integer tristique odio mi, in
                volutpat metus posuere eu. Aenean suscipit ipsum nunc, id
                volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris
                arcu. Praesent eget lectus sit amet diam vestibulum varius.
                Suspendisse dignissim mattis leo, nec facilisis erat tempor
                quis. Vestibulum eu vestibulum ex.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="comment-content">
            <img
              src="~/assets/images/avtar.jpg"
              alt="Generic placeholder image"
            >
            <div class="comment-body">
              <h6>
                Mark Jecno
                <span>( 12 Jannuary 2018 at 1:30AM )</span>
              </h6>
              <p>
                Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id
                est sit amet felis fringilla bibendum at at leo. Proin molestie
                ac nisi eu laoreet. Integer faucibus enim nec ullamcorper
                tempor. Aenean nec felis dui. Integer tristique odio mi, in
                volutpat metus posuere eu. Aenean suscipit ipsum nunc, id
                volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris
                arcu. Praesent eget lectus sit amet diam vestibulum varius.
                Suspendisse dignissim mattis leo, nec facilisis erat tempor
                quis. Vestibulum eu vestibulum ex.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="comment-content">
            <img
              src="~/assets/images/avtar.jpg"
              alt="Generic placeholder image"
            >
            <div class="comment-body">
              <h6>
                Mark Jecno
                <span>( 12 Jannuary 2018 at 1:30AM )</span>
              </h6>
              <p>
                Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id
                est sit amet felis fringilla bibendum at at leo. Proin molestie
                ac nisi eu laoreet. Integer faucibus enim nec ullamcorper
                tempor. Aenean nec felis dui. Integer tristique odio mi, in
                volutpat metus posuere eu. Aenean suscipit ipsum nunc, id
                volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris
                arcu. Praesent eget lectus sit amet diam vestibulum varius.
                Suspendisse dignissim mattis leo, nec facilisis erat tempor
                quis. Vestibulum eu vestibulum ex.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class Comments extends Vue {}
</script>
<style lang="scss" scoped>
.blog-comments {
  margin-top: 30px;

  .comment li:not(:last-child) {
    border-bottom: 1px solid $border;
  }

  .comment li{
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .comment-content {
    display: flex;
  }

  .comment-content img{
    border-radius: 50%;
    width: 65px;
    margin-right: 20px;
  }

  .comment-body {
    h6 {
      color: #444;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 5px;
    }

    p {
      line-height: 1.8;
    }

  }
}
</style>>
