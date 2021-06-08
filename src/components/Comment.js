import "./Comment.css";

function Comment() {
  return (
    <div className="Comment">
      <table>
        <tr>
          <td>
            <img
              src="https://www.pinclipart.com/picdir/big/164-1640714_user-symbol-interface-contact-phone-set-add-sign.png"
              className="CommentPfp"
            />
          </td>
          <td>
            <form>
              <input type="text" placeholder="Write Comment..." />
            </form>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Comment;
