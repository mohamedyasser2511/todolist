<template>
    <div class="contact-form-container">
      <div v-if="showForm">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="form.subject" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
      
      <div v-else>
        <h2>Thank you for contacting us!</h2>
        <p>We will get back to you shortly.</p>
      </div>
    </div>
  </template>
<script setup>
import { ref } from 'vue';
import './style.css'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const showForm = ref(true); 

const submitForm = () => {
  console.log('Form submitted:', form.value);
  showForm.value = false; 

};
</script>

  
