import Navbar from "./components/_NavBar";
import Footer from "./components/_Footer";

function Login() {
  return (
    <>
      <Navbar />
      <section className="login">
        <form method="post">
          <h1>Login</h1>
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="senha" id="senha" placeholder="Senha" />
          <button className="LoginBtn">Login</button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Login;
