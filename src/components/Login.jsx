import React from "react";
import { useNavigate } from "react-router-dom";
const Login = ({loginCallbackURL}) => {
    const navigate = useNavigate();
    React.useEffect(()=>{
        console.log("loginCallbackURL=",loginCallbackURL);
    },[loginCallbackURL])
const doLogin = () => {
    console.log(loginCallbackURL);
    navigate(loginCallbackURL);
}

return (

    <div class="modal" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="modalLabelLarge" aria-hidden="true">
<div class="modal-dialog modal-sm">
<div class="modal-content">

<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
<h4 class="modal-title form-title" id="modalLabelLarge">Login</h4>
</div>

<div class="modal-body">
    <form>
        <div className="form-group">
        <label>Username</label><br></br>
        <input
                type="text"
                name="username"
                className="login-box form-control"
                />
        </div>
        <div className="form-group">

        <label>Password</label><br></br>
        <input
                type="password"
                name="password"
                className="login-box form-control"
                />
        </div>
        <button type="button" class="btn btn-block btn-round login-button" onClick={doLogin} data-dismiss="modal">Login</button>
    </form>
</div>

</div>
</div>
</div>

);
}
export default Login;