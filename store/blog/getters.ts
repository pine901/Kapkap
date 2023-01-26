import { BlogState } from './state'

export default {
  blogs: (state: BlogState) => state.blogs,
  blogById: (state: BlogState) => (id: number) => {
    return state.blogs.find(b => b.id === id)
  },
  blogTags: (state: BlogState) => {
    const uniqueTag: string[] = []
    const blogTag: string[] = []
    state.blogs.map((blog) => {
      if (blog.tags) {
        blog.tags.map((tag) => {
          const index = uniqueTag.indexOf(tag)
          if (index === -1) { uniqueTag.push(tag) }
          return null
        })
      }
      return null
    })
    for (let i = 0; i < uniqueTag.length; i++) {
      blogTag.push(uniqueTag[i])
    }
    return blogTag
  }
}
