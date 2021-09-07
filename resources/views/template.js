const Template = {
  notification ({ content }) {
    return `
      <li>
        <div class="profile">
          <img src="images/avatar.png" alt="Avatar" />

          <div class="info">
            ${content}
          </div>
        </div>

        <a href="">x</a>
      </li>
    `
  },
  post ({
    id,
    content,
    user: { username: user },
    created_at: published,
    comments,
    __meta__: { likes_count = 0 } = {}
  }) {
    return `
      <li>
        <div class="post-wrapper">
          <div class="header">
            <img src="images/avatar.png" alt="Avatar" />

            <div class="info">
              <span class="user">${user}</span>
              <span class="datetime">${published}</span>
            </div>
          </div>

          <div class="post">
            <p>${content}</p>
          </div>

          <div class="interactions">
            <div class="actions">
              <span class="likes" data-post-id="${id}">${likes_count}</span>

              <a class="like like-post" href="" data-id="${id}">
                <img src="images/like.svg" alt="Like" />
                Like
              </a>

              <a href="">
                <img src="images/comment.svg" alt="Comment" />
                Comentar
              </a>
            </div>

            <div class="comments">${comments.length} comentários</div>
          </div>

          <div data-post-id="${id}" class="comments">
            <ul>
              <li>
                <div class="comment">
                  <img src="images/avatar.png" alt="Avatar" />

                  <div class="info">
                    <span class="user">Naruto Uzumaki</span>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse bibendum faucibus varius. Quisque quis ornare purus. Sed eleifend ante quis neque malesuada lobortis.

                    <div class="interactions">
                      <div class="actions">
                        <span class="likes" data-comment-id="1">1</span>

                        <a href="" class="like like-comment" data-id="1" data-post-id="${id}">
                          <img src="images/likes.svg" alt="Likes" />Curtir
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="comment-area">
          <div class="group">
            <img class="avatar" src="images/avatar.png" alt="Matheus Ramalho de Oliveira" />
            <textarea data-post-id="${id}" placeholder="Comment this post"></textarea>
          </div>

          <button data-post-id="${id}" class="uibutton large confirm comment-post" type="submit">Comment</button>
        </div>
      </li>
    `
  }
}
