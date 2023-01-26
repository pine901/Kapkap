import blog from '~/data/blog.json'

export type Blog = {
  id: number
  tags: string[]
  dateCreated: string
  title: string
  content: string
  description: string
  author: string
  views: number
  comments: number
  imageURL: string
  bannerImageURL: string
}

export type BlogState = {
  blogs: Blog[]
}

export default () => (<BlogState>{
  blogs: blog.data
})
