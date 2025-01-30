<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <img style="width: 120px;" src="./assets/images/FoxSims.jpg" alt=""> 
      </div>
      <nav>
        <RouterLink to="/" class="nav-item">Home</RouterLink>
        <RouterLink to="/about" class="nav-item">About</RouterLink>
        <RouterLink to="/contact" class="nav-item">Contact us</RouterLink>
      </nav>
    </div>
  </header>
  
  <RouterView />
</template>
