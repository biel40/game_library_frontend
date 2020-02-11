<template>
  <q-layout view="lhh lpR fFf">

    <q-header reveal class="bg-primary text-white row justify-between" height-hint="98">
        
      <q-toolbar class="col-2">
          <q-btn
          flat
          dense
          round
          @click="openMobileMenu = !openMobileMenu"
          icon="menu"
          aria-label="Menu"
        />

        <div class="col-12 self-start q-ml-md q-mt-md" >
          <q-input v-model="text" counter maxlength="12" :dense="dense" >
            <q-btn @click="search()" rounded icon="search" color="secondary" ></q-btn>
          </q-input>
        </div>
        
      </q-toolbar>

      <div class="col-1 self-center" >
        <label> Salir </label>
        <q-btn @click="goBack()" rounded icon="exit_to_app" color="positive" ></q-btn>
      </div>

    </q-header>


   <q-drawer v-model="openMobileMenu" bordered content-class="bg-grey-3" >
      <q-list>
        <q-item-label header> Lista de Páginas </q-item-label>
        <q-item clickable @click="goBack()">

          <q-item-section avatar>
            <q-icon name="search" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Inicio</q-item-label>
          </q-item-section>

        </q-item>
      </q-list>

    </q-drawer>


    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default {

  name: 'MyLayout',

  data (){
    return {
      openMobileMenu: false,
      text: '',
      ph: '',
      dense: false
    }
  },
  created(){
    
  },
  methods: {
    search() {

      //TODO: Implement the Search function 
      console.log(this.text);

    },
    goBack() {
      this.$router.push('/');
    }
  }
}

</script>