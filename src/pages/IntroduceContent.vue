<template>
  <q-page class="flex row">
    
    <div class="column inline col-6" >

      <q-form @submit="onSubmit" class="q-gutter-xs col-6" >

        <q-input class="q-pa-md" style="width: 50%;" filled v-model="name" label="Nombre del contenido *" hint="Nombre del contenido" 
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'No puedes introducir un contenido sin nombre']"
        />

        <q-input class="q-pa-md" style="width: 50%;" filled v-model="description" label="Descripcion del contenido *" hint="Descripción" />

        <q-input id="input_url" class="q-pa-md" style="width: 50%;" filled v-model="img_url" label="Imagen de portada *" hint="Imagen de Portada"  />


        <div class="q-pa-md">
          <p> Fecha de Lanzamiento: </p>
          <q-date style="width: 20%;" v-model="date" />
        </div>

        <div class="q-ml-xl">
          <q-btn class="" label="Agregar Contenido" type="submit" color="primary" />
        </div>

      </q-form>

    </div>

    <div class="col-4 q-mt-md" >

      <q-img
        id="q_img_url"
        :src="img_url"
        :ratio="1"
      />

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
      img_url: 'https://placeimg.com/500/300/nature',

      date: '2020/02/08'
    }
  },

  methods: {
    onSubmit () {
      
    },

  }
  
}

</script>

<style scoped>

</style>
