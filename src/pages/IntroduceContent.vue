<template>
  <q-page class="flex">
    
    <div class="q-pa-md" style="max-width: 50%">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" >

        <q-input class="q-pa-md" filled v-model="name" label="Nombre del contenido *" hint="Nombre del contenido" 
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'No puedes introducir un contenido sin nombre']"
        />

        <q-input class="q-pa-md" filled v-model="description" label="Descripcion del contenido *" hint="Descripción" />

        <q-input class="q-pa-md" filled v-model="img_url" label="Imagen de portada *" hint="Imagen de Portada" />


        <div class="q-pa-md">
          <p> Fecha de Lanzamiento: </p>
          <q-date v-model="date" />
        </div>

        <div>
          <q-btn label="Agregar Contenido" type="submit" color="primary" />
          <q-btn label="Reiniciar Formulario" type="reset" color="primary" flat class="q-ml-sm" />
        </div>

      </q-form>

      <div class="col-7">
        <q-img
          src="https://placeimg.com/500/300/nature"
          :ratio="1"
        />
      </div>

    </div>

  </q-page>
</template>

<script>

export default {
  data () {
    return {
      name: null,
      release_date: null,
      accept: false,
      description: '',
      img_url: '',

      date: '2020/02/08'
    }
  },

  methods: {
    onSubmit () {
      
    },

    onReset () {
      this.name = null
      this.age = null
      this.date = null
    }
  }
}

</script>

<style scoped>

</style>
