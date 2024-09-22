const tags = {
  title: 'a',
  tags: ['a','b','c'],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title ,tag)
    })
  }
}

tags.showTags()