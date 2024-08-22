---
title: Blog
slug: /blog
numOfPostsPerPage: 12
enableSearch: true
topSections:
  - title:
      text: Featured Post
      color: text-dark
      type: TitleBlock
    subtitle: This is the subtitle
    posts:
      - content/pages/blog/top-ten-lessons-we-learned.md
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    variant: big-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-28
          - pb-0
          - pl-4
          - pr-4
        justifyContent: flex-start
    type: FeaturedPostsSection
    hoverEffect: move-up
styles:
  title:
    textAlign: center
seo:
  metaTitle: Blog - Demo site
  metaDescription: >-
    This is the blog of the demo site where we post about technology, product,
    and design.
  socialImage: /images/img-placeholder.svg
  type: Seo
type: PostFeedLayout
bottomSections:
  - type: FeaturedPostsSection
    title:
      type: TitleBlock
      text: Featured posts
      color: text-dark
      styles:
        self:
          textAlign: center
    posts:
      - content/pages/blog/life-of-our-development-team.md
      - content/pages/blog/surround-yourself-with-right-people.md
      - content/pages/blog/top-twenty-ways-to-save-time.md
      - content/pages/blog/case-study-1.md
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    actions: []
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    hoverEffect: shadow
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
postFeed:
  type: PagedPostsSection
  title: null
  subtitle: null
  showThumbnail: true
  showExcerpt: true
  showDate: true
  showAuthor: true
  actions: []
  elementId: null
  variant: three-col-grid
  colors: bg-light-fg-dark
  hoverEffect: move-up
---
