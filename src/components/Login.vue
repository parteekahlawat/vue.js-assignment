<!-- LoginComponent.vue -->
<template>
    <div class="min-h-screen flex">
      <div class="w-1/2 h-screen">
        <img src="../assets/Group 35699.svg" alt="Background Image" class="w-full h-full object-cover left-img"/>
      </div>
      <div class="w-1/2 flex items-center justify-center p-8 bg-white right-part">
        <div class="w-full max-w-md">
          <h2 class="text-2xl font-bold mb-10 text-center">Login to Access Dashboard</h2>
          <form @submit.prevent="login">
            <div class="mb-8">
              <label for="email" class="block text-gray-700 text-xl">Email<span class="text-red-500">*</span></label>
              <input type="email" v-model="email" id="email" required class="mt-1 p-2 border border-gray-300 rounded-md w-full text-xl"/>
            </div>
            <div class="mb-4">
              <label for="password" class="block text-gray-700 text-xl">Password<span class="text-red-500">*</span> <a href="#" class="text-red-500 ml-2">Forget Password?</a></label>
              <input type="password" v-model="password" id="password" required class="text-xl mt-1 p-2 border border-gray-300 rounded-md w-full"/>
            </div>
            <button type="submit" class="btn-login mx-auto block">Login &raquo;</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Handle login logic here
        if(this.email==="a@b.com" && this.password==="12345")
        this.$router.push({ name: 'Dashboard' });
        else
        console.warn("wrong credencials");
        console.log(`Email: ${this.email}, Password: ${this.password}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .btn-login {
    margin-top: 4rem;
    font-weight: 400;
    font-size: 1.3rem;
    color: #0E77FF;
    padding-inline: 4rem;
    border: 2px solid #0E77FF;
    border-radius: 35px;
    opacity: 1;
  }
  .right-part {
    font: normal normal 600 32px/50px Poppins;
  }
  .left-img {
    margin-top: 8rem;
    width: 100%;
    height: auto;
  }
  </style>
  