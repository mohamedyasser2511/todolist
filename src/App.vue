<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <RouterLink to="/"><img style="width: 120px;" src="./assets/images/FoxSims.jpg" alt=""> </RouterLink>
      </div>
      <nav>
        <RouterLink to="/" class="nav-item">Home</RouterLink>
        <RouterLink to="/about" class="nav-item">About</RouterLink>
        <RouterLink to="/contact" class="nav-item">Contact us (extra)</RouterLink>
      </nav>
    </div>
  </header>
  
  <RouterView />
</template>
