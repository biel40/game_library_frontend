<template>

    <div id="mainDiv" class="q-pa-md" style="max-width: 2500px">

      <div class="row items-center">
         <q-btn
            round
            color="primary"
            size="1em"
            icon="keyboard_arrow_left"
            v-on:click="backToLogin"
          />

          <span class="q-ml-md"> Volver al login </span>

      </div>

      <div class="column items-center q-ml-md">
          <h2 style="color: #f57f17;" > Registro </h2>
      </div>

      <q-form
        @submit="onSubmit"
        class="q-gutter-md column items-center"
      >

        <q-input round v-model="name" style="width: 500px" hint="Nombre de Usuario" :rules="[ val => val && val.length > 0 || 'Campo Obligatorio']">
          <template v-slot:before>
            <q-icon name="person_add" />
          </template>
        </q-input>

        <q-input round v-model="email" type="email" style="width: 500px" hint="Email del Usuario" :rules="[ val => val && val.length > 0 || 'Campo Obligatorio']">
          <template v-slot:before>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-input round v-model="password" type="password" style="width: 500px" hint="Contraseña del Usuario" :rules="[ val => val && val.length > 0 || 'Campo Obligatorio']">
          <template v-slot:before>
            <q-icon name="vpn_key" />
          </template>
        </q-input>

        <q-input round v-model="passwordConfirmation" type="password" style="width: 500px" hint="Reconfirmación de la contraseña" :rules="[ val => val && val.length > 0 || 'Campo Obligatorio']">
          <template v-slot:before>
            <q-icon name="vpn_key" />
          </template>
        </q-input>


        <div>
          <q-btn label="Registrate" text-color="black" type="submit" color="primary"  class="q-ml-md q-items-center q-pa-xs q-mt-md" style="width: 120%;" />
        </div>

      </q-form>

  </div>

</template>

<script>
export default {
  data () {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",

    }
  },
  methods: {
    onSubmit() {
      if (this.password != this.passwordConfirmation) {
        this.$q.notify ({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Las contraseñas deben coincidir!'
        })
      } else {
        //Cambiar las rutas del post
        this.$axios.post('http://homestead.test/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation
        })
        .then((response) => {
          this.$q.notify ({
            color: 'green',
            textColor: 'white',
            icon: 'warning',
            message: 'Usuario introducido correctamente!'
          })
        })
        .catch((error) => {
          this.$q.notify ({
            color: 'green',
            textColor: 'white',
            icon: 'warning',
            message: 'Usuario no se ha podido introducir.'
          })
        });
      }
    },
    backToLogin() {
      this.$router.back();
    }
  }
}
</script>