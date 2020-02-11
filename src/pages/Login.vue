<template>

    <div id="mainDiv" class="q-pa-md" style="max-width: 2500px">

    <div class="column items-center q-mt-md">
        <h2> Login </h2>
    </div>

    <q-form
      @submit="onSubmit"
      class="q-gutter-md column items-center"
    >
      <q-input filled v-model="username" type="email" style="width: 500px" hint="Nombre de Usuario" :rules="[ val => val && val.length > 0 || 'Campo Obligatorio']">
        <template v-slot:before>
          <q-icon name="mail" />
        </template>
      </q-input>

      <q-input filled v-model="password" type="password" style="width: 500px" hint="Contraseña del Usuario" :rules="[ val => val && val.length > 0 || 'Campo Obligatorio']">
        <template v-slot:before>
          <q-icon name="vpn_key" />
        </template>
      </q-input>

      <div>
        <q-btn label="Login" text-color="white" type="submit" color="primary"  class="q-ml-md q-items-center q-pa-xs" style="width: 200px" />
      </div>


      <div>
        <q-btn label="Registrate" v-on:click="redirectSignIn" text-color="black" type="button" color="secondary"  class="q-ml-md q-mt-md q-items-center q-pa-xs" style="width: 200px" />
      </div>

    </q-form>

  </div>

</template>

<script>
export default {
  data () {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    onSubmit () {
      if (this.username == "" || this.password == "") {
        this.$q.notify ({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Por favor, rellena los dos campos para acceder!'
        })
      } 
      else 
        this.$router.push('/main');    // this.axiosLogin();
    },
    axiosLogin() {
        // TODO: Cambiar la ruta del Axios al Backend Bueno
      this.$axios.post('http://homestead.test/api/login', {
        email: this.username,
        password: this.password
      })
      .then((response) => {
        localStorage.clear();
        localStorage.setItem('user_id', JSON.stringify(response.data.user.id));
        localStorage.setItem('user_role', JSON.stringify(response.data.user.role));
      
        console.log(localStorage.getItem('user_role'));
        this.$router.push('/app/index');
      })
      .catch((error) => {
         this.$q.notify ({
            color: 'red',
            textColor: 'white',
            icon: 'warning',
            message: 'Ha ocurrido un error. Por favor, inténtelo más tarde.'
          })
      });
    },
    redirectSignIn() {
      this.$router.push('/register');
    }
  }
}
</script>

<style>

  body {
    background-color: #e1f5fe;
  }

</style>