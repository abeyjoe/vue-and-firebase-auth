<template>
  <main class="login">
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <h2>Register</h2>
        <input
          class="register"
          type="email"
          placeholder="Email address"
          v-model="register_form.email"
        />
        <br />
        <input
          class="register"
          type="password"
          placeholder="Password"
          v-model="register_form.password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>

      <form class="login" @submit.prevent="login">
        <h2>Login</h2>
        <input
          class="login"
          type="email"
          placeholder="Email address"
          v-model="login_form.email"
        />
        <br />
        <input
          class="login"
          type="password"
          placeholder="Password"
          v-model="login_form.password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      login_form,
      register_form,
      login,
      register,
    };
  },
};
</script>

<style>
.forms {
  display: flex;
  min-height: 100vh;
}

form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
}

form.register {
  color: #fff;
  background-color: rgb(245, 66, 101);
  background-image: linear-gradient(
    to bottom right,
    rgb(245, 66, 101) 0%,
    rgb(189, 28, 60) 100%
  );
}
/* form.register {
  color: #fff;
  background-color: rgb(245, 66, 101);
  background-image: linear-gradient(
    to bottom right,
    rgb(245, 66, 101) 0%,
    rgb(189, 28, 60) 100%
  );
} */

h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;

  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #fff;
  border-bottom: 2px solid #fff;
}
form.login input:not([type="submit"]) {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}

form.register input[type="submit"] {
  background-color: #fff;
  color: rgb(245, 66, 101);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
form.register input[type="submit"]:hover {
  color: #fff;
  background-color: rgb(245, 66, 101);
  border: 1px solid #fff;
  opacity: 0.8;
  transition: 0.4s;
}

form.login input[type="submit"] {
  background-color: rgb(245, 66, 101);
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
form.login input[type="submit"]:hover {
  background-color: #fff;
  color: rgb(245, 66, 101);
  border: 1px solid rgb(245, 66, 101);
  opacity: 0.8;
  transition: 0.4s;
}

/*
.container {
  margin: 0;
  padding: 0;
  max-width: 700px;
  height: auto;
}

form {
  height: ;
  width: 50%;
  max-width: 400px;
  border: 1px solid black;
  padding: 25px;
  margin: auto;
}
form.register {
  color: #fff;
  background-color: rgb(84, 103, 216);
  float: left;
}
input.register {
  border-bottom: 1px solid #fff;
  background-color: rgb(84, 103, 216);
}

form.login {
  color: rgb(84, 103, 216);
  background-color: #fff;
  float: right;
}
input.login {
  border-bottom: 1px solid rgb(84, 103, 216);
  background-color: #f1f1f1;
}

h2 {
  text-transform: uppercase;
}
input {
  border: none;
  border-bottom: 1px solid;
  padding: 10px;
  margin: 5px;
} */
</style>
