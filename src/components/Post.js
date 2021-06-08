import "./Post.css";
import UserPostInfo from "./UserPostInfo.js";
import Content from "./Content.js";
import Actions from "./Actions.js";
import Comment from "./Comment.js";

function Post() {
  return (
    <div className="Post">
      <UserPostInfo />
      <Content />
      <Actions />
      <Comment />
    </div>
  );
}

export default Post;
