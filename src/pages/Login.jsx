import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../Reset.css";
import "../App.css";

function Login() {
  return (
    <div>
      <Navbar />
      <section className="login">
        <div>
          <h1>Login</h1>
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="senha" id="senha" placeholder="Senha" />
          <button className="LoginBtn">Login</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
