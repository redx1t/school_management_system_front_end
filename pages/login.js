import { useRouter } from "next/router";
import { useState } from "react";
import AuthService from "../services/auth.service";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();
  const submit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    AuthService.login(username, password).then(
      (response) => {
        // console.log(response);
        if (response) {
          router.push("/");
        } else {
          setLoading(false);
          setMessage("We are unable to authenicate you. Please try again");
        }
        //
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-signin" onSubmit={submit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <input
                type="name"
                id="inputUsername"
                className="form-control"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                Sign in
              </button>
            </form>
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
