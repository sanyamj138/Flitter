<template>
  <q-layout view="lHr lpR fFf" class="bg-white-1">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          <span class="gt-sm">{{$route.name}}</span>
          <q-icon
            name="fa-solid fa-dove"
            color="white"
            size="sm"
            class="q-pa-sm lt-md header-icon"
          />
        </q-toolbar-title>

        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer 
    show-if-above 
    v-model="leftDrawerOpen" 
    side="left" bordered 
    class="bg-white-1"
    :width="280">
      <!-- drawer content -->
      <q-icon
      name="fa-solid fa-dove"
      color="primary"
      size="md"
      class="q-pa-sm"
      />
    
    <q-list class="q-pt-md">
      <q-item 
      exact
      clickable 
      v-ripple
      to="/"
      >
        <q-item-section avatar>
          <q-icon name="home" size="md"/>
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>
    </q-list>

    <q-list>
      <q-item 
      exact
      clickable 
      v-ripple
      to="/about"
      >
        <q-item-section avatar>
          <q-icon name="help" size="md"/>
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
      </q-item>
    </q-list>

    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered class="bg-white-1">
      <!-- drawer content -->
      <q-input 
      placeholder="Search"
      class = "q-ma-md"
      outlined
      rounded
      dense
      >
        <template v-slot:prepend>
          <q-icon name="Search" />
        </template> 
      </q-input>
      <q-list
      separator
      >
        <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">EDUCATION</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
          <q-item-label caption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eaque vero nesciunt libero sapiente distinctio optio tempora sit quae voluptatem quidem, quis quam unde, nostrum recusandae nisi quisquam repellat magnam?</q-item-label>
        </q-item-section>
        <q-item-section side top> 
        <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">EDUCATION</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
          <q-item-label caption>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quisquam, velit ullam ducimus aliquid ex autem non dolores accusantium odit tenetur consequatur aperiam adipisci incidunt molestiae? Vel dolor odit quaerat.</q-item-label>
        </q-item-section>
        <q-item-section side top> 
        <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">EDUCATION</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened!</q-item-label>
          <q-item-label caption>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eligendi reiciendis accusantium nisi, sunt praesentium dolor excepturi voluptatem aliquid iste ipsam odit perferendis qui reprehenderit, similique quisquam quo, architecto possimus.</q-item-label>
        </q-item-section>
        <q-item-section side top> 
        <q-item-label caption>5 min ago</q-item-label>
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
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>