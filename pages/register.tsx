import Head from "next/head";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { UserRequest } from "../lib/user/userRequest";
import { axiosInstance } from "../lib/apiInteractor/apiInstance";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const data: UserRequest = {
    username: username,
    password: password,
  };
  const register = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await axiosInstance.post("/auth/register", data);

      router.push("/");
      setUsername("");
      setPassword("");

    } catch (error: any) {
      console.error(error);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container-fluid">
      <Head>
        <title> FordaStore </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-logo.png" />
      </Head>

      <img
        src="logo.png"
        className="img-thumbnail w-25 h-25 border border-white"
        alt="logo.png"
      />

      <div className="row">
        <div className="col-sm-6 col-md-5 m-auto">
          <div className="d-flex justify-content-center">
            <img
              src="user-icon.png"
              className="img-thumbnail border border-white w-24 h-24"
              alt="user-icon.png"
            />
          </div>

          <div className="fs-1 d-flex justify-content-center fw-bold">
            Register
          </div>

          <form onSubmit={register}>
            <div>
              <input
                className="form-control mt-5 border border-dark"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <input
                className="form-control mt-4 border border-dark"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-info mt-5 w-100 border border-dark"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
