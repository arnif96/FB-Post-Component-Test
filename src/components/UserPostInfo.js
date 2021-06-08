import "./UserPostInfo.css";

function UserPostInfo() {
  return (
    <div className="UserPostInfo">
      <table>
        <tr>
          <td>
            <img
              src="https://www.pinclipart.com/picdir/big/164-1640714_user-symbol-interface-contact-phone-set-add-sign.png"
              className="pfp"
            />
          </td>
          <td>
            <h2 className="Name">Jón Frey Stefánsson</h2>
            <p className="Date">20. August 2021</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default UserPostInfo;
