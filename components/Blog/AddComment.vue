<template>
  <div class="add-comment">
    <div class="col-sm-12">
      <h2>Zostaw komentarz</h2>
      <form class="theme-form">
        <div class="form-row">
          <div class="col-md-12">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              class="form-control"
              placeholder="Enter Your name"
              required
            >
          </div>
          <div class="col-md-12">
            <label for="email">Email</label>
            <input id="email" type="text" class="form-control" placeholder="Email" required>
          </div>
          <div class="col-md-12">
            <label for="exampleFormControlTextarea1">Comment</label>
            <textarea
              id="exampleFormControlTextarea1"
              class="form-control"
              placeholder="Write Your Comment"
              rows="6"
            />
          </div>
          <div class="col-md-12">
            <button class="btn btn-solid" type="submit">
              Post Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AddComment extends Vue {
}
</script>
<style scoped lang="scss">
.add-comment {
  margin-top: 20px;
  h2 {
    font-size: 32px;
    margin-bottom: 25px;
  }

  .theme-form {
    input,
    textarea {
      padding: 12px 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
