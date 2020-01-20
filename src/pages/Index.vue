<template>
  <q-page class="flex flex-center justify-around">

    <div class="q-gutter-x-lg">
      <q-card dark bordered class="bg-green-6 my-card" @click="goToMyList()" >
        <q-card-section>
          <div class="text-h6">Mi Lista</div>
        </q-card-section>

      </q-card>
    </div>

    <div class="q-gutter-x-lg">
      <q-card dark bordered class="bg-green-6 my-card" @click="goToMyList()">
        <q-card-section>
          <div class="text-h6">Introducir Contenido</div>
        </q-card-section>

      </q-card>
    </div>

    <div >
      <q-card dark bordered class="bg-blue-7 my-card" @click="goToMyList()">
        <q-card-section>
          <div class="text-h6">Statistics</div>
        </q-card-section>

      </q-card>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'PageIndex',

  data (){
    return {
      text: '',
    }
  },
  
  created(){
    
  },

  methods: {
    goToMyList: function () {
      console.log('yendo a mi lista');
    }
  }

}

</script>

<style scoped>
  div {
    cursor: pointer;
  }
</style>
