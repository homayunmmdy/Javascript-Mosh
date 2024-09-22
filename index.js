
// method -> obj
const video = {
  title: 'a',
  play() {
    console.log(this)
  }
}

// function -> global (window, global)
function playVideo() {
  console.log(this)
}

// Constructure function -> New empty object
function Video(title) {
  this.title = title;
  console.log(this)
}

const tags = {
  title: 'a',
  tags: ['a','b','c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title ,tag)
    }, this)
  }
}

tags.showTags()