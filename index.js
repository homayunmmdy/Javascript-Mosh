let post = new DraftPost("a", "b", "c");

console.log(post)

function DraftPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.view = 0;
  this.comments = [];
  this.isLive = false;
}
