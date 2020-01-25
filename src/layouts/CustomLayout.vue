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
        <q-toolbar-title> Game Library </q-toolbar-title>
      </q-toolbar>

        <div class="col-2 self-start" style="margin-right: 2%; padding-top: 1%;" >
            <q-input v-model="text" counter maxlength="12" :dense="dense" >
                <q-btn @click="search()" rounded icon="search" color="secondary" ></q-btn>
            </q-input>
        </div>
      
    </q-header>


   <q-drawer v-model="openMobileMenu" bordered content-class="bg-grey-3" >
      <q-list>
        <q-item-label header> Lista de Páginas </q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="search" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
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
    search: function () {
      console.log(this.text);
    }
  }
}

</script>