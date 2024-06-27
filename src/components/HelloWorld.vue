<template>
<div class="website">
    <div class="div-1">
        <nav class="p-4 bg-transparent">
            <div class="container mx-auto flex items-center justify-between">
                <div class="text-white text-xl " id="logo">Logo</div>
                <div class="hidden md:flex space-x-4 text-xl">
                    <a href="#" class="text-gray-300 hover:text-white p-2">About</a>
                    <a href="#" class="text-gray-300 hover:text-white p-2">Services</a>
                    <a href="#" class="text-gray-300 hover:text-white p-2">Case Studies</a>
                    <a href="#" class="text-gray-300 hover:text-white p-2">Testimonials</a>
                    <a href="#" class="text-gray-300 hover:text-white p-2">Contact</a>
                    <button class="text-black hover:text-grey focus:outline-none focus:text-black" id="button-login">
                        <router-link to="/login">Login</router-link>
                    </button>
                </div>
            </div>
        </nav>
        <div class="text-div1">
            <div class="px-6 display-div1"></div>
            <div class="div1-text"></div>
            <div class="started-button">
                <button class="bg-white text-black-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200">
                    Get Started &raquo;
                </button>
            </div>
        </div>
        <div class="add">
            <div class="added-img"></div>
        </div>
    </div>

    <div class="div-2 flex bg-white text-gray-900 p-8 space-y-4">
        <div class="w-1/2 h-screen">
            <img src="../assets/Group 35699.svg" alt="Background Image" class="w-full h-full object-cover left-img" />
        </div>
        <div class="w-1/2 flex flex-col justify-center space-y-4">
            <div class="about-content">
                <div class="about-text p-2">
                    <img class="about-icon mx-8" />
                    <h2 class="text-blue-500 font-bold text-xl">ABOUT US</h2>
                </div>
                <h3 class="text-4xl font-bold mx-8 p-2">Great Digital Agency</h3>
                <p class="text-lg text-gray-700 mx-8 p-2">
                    Our products are fully custom-made, built with the latest technologies and cloud-architectures.
                </p>
                <p class="text-gray-700 mx-8 p-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.
                </p>
                <button class="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 mx-8 p-2 my-4">
                    Get Started &raquo;
                </button>
            </div>
        </div>
    </div>

    <div class="div-3 flex text-gray-900 p-8 space-y-4">
        <div class="w-1/2 flex flex-col justify-center space-y-4">
            <div class="about-content">
                <div class="about-text p-2">
                    <img class="about-icon mx-8" />
                    <h2 class="text-blue-500 font-bold text-xl">ABOUT US</h2>
                </div>
                <h3 class="text-4xl font-bold mx-8 p-2">Great Digital Agency</h3>
                <p class="text-lg text-gray-700 mx-8 p-2">
                    Our products are fully custom-made, built with the latest technologies and cloud-architectures.
                </p>
                <p class="text-gray-700 mx-8 p-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.
                </p>
                <button class="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 mx-8 p-2 my-4">
                    Get Started &raquo;
                </button>
            </div>
        </div>
        <div class="div3-img">
            <div class="div3-box"></div>
        </div>
    </div>


    <div class="div-4-form flex">
        <div class="w-1/2 h-screen added-img-footer">
            <!-- <img src="../assets/Group 35686.svg" alt="Background Image" class="w-full h-full object-cover left-img" /> -->
        </div>
        <!-- <div class="added-img-footer mx-8"></div> -->
        <div class="form-content right-0 h-full flex items-center justify-center bg-gray-100 p-4">      
        <div class="bg-white p-6 max-w-md w-full">
            <h2 class="text-2xl font-bold mb-6">Send Us a message</h2>
            <form @submit.prevent="submitForm" >
                <div class="mb-4">
                    <input type="email" placeholder="Email" id="email" v-model="email" class="mt-1 block w-full border-b-2 border-black p-2" required>
                </div>
                <div class="mb-4">
                    <input type="text" id="name" placeholder="Your Name" v-model="name" class="mt-1 block w-full border-b-2 border-black p-2" required>
                </div>
                <div class="mb-4">
                    <input type="tel" id="phone" placeholder="Phone Number" v-model="phone" class="mt-1 block w-full border-b-2 border-black p-2" required>
                </div>
                <div class="mb-4">
                    <input type="text" id="subject" v-model="subject" placeholder="Subject" class="mt-1 block w-full border-b-2 border-black p-2">
                </div>
                <div class="mb-4">
                    <textarea id="message" v-model="message" placeholder="Your Message" class="mt-1 block w-full border-b-2 border-black p-2" rows="4"></textarea>
                </div>
                <div class="mb-4">
                    <label class="inline-flex items-center p-2">
                        <input type="checkbox" v-model="agree" class="form-checkbox h-5 w-5 text-blue-600" required>
                        <span class="ml-2 text-xs">By sending this message, you confirm that you have read and agreed to our privacy policy.</span>
                    </label>
                </div>
                <div>
                    <button type="submit" class="bg-blue-600 text-white p-2 rounded-md btn-started"><a href="https://formsubmit.co/el/xipayo" target="_blank" >Get Started &raquo;</a></button>
                </div>
            </form>
        </div>
    </div>
    </div>
    

    <div class="footer">
        <footer class="relative w-full">
  <div class="w-full px-8 mx-auto max-w-7xl">
    <div class="grid w-full grid-cols-1 gap-8 py-12 mx-auto md:grid-cols-2 lg:grid-cols-4">
      <div class="w-full">
        <p
          class="block mb-4 font-sans text-sm antialiased font-bold leading-normal uppercase opacity-50 text-blue-gray-900">
          Company
        </p>
        <ul class="space-y-1">
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              About Us
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Careers
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Our Team
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div class="w-full">
        <p
          class="block mb-4 font-sans text-sm antialiased font-bold leading-normal uppercase opacity-50 text-blue-gray-900">
          Help Center
        </p>
        <ul class="space-y-1">
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Discord
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Twitter
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              GitHub
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div class="w-full">
        <p
          class="block mb-4 font-sans text-sm antialiased font-bold leading-normal uppercase opacity-50 text-blue-gray-900">
          Resources
        </p>
        <ul class="space-y-1">
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Blog
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Newsletter
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Free Products
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Affiliate Program
            </a>
          </li>
        </ul>
      </div>
      <div class="w-full">
        <p
          class="block mb-4 font-sans text-sm antialiased font-bold leading-normal uppercase opacity-50 text-blue-gray-900">
          Products
        </p>
        <ul class="space-y-1">
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Templates
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              UI Kits
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Icons
            </a>
          </li>
          <li class="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            <a href="#" class="inline-block py-1 pr-2 transition-transform hover:scale-105">
              Mockups
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </div>
</div>
</template>

  
  
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            email: '',
            name: '',
            phone: '',
            subject: '',
            message: '',
            agree: false
        };
    },
    methods: {
        submitForm() {
            
            console.log({
                email: this.email,
                name: this.name,
                phone: this.phone,
                subject: this.subject,
                message: this.message,
                agree: this.agree
            });
        }
    }
};
</script>
  
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

.website {
    overflow-x: hidden;
}
.div-4-form{
    height: 80vh;
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    /* padding-top: 4rem; */
    background: transparent url('../assets/Path 37456.svg') 0% 0% no-repeat padding-box;
}
.footer{
    background-color: #0E77FF;
    color: white;
}
.added-img-footer{
    /* position: relative;
    left: 0;
    width: 874px;
    height: 589px; */
    /* left: -1000px; */
    margin-top: 4rem;
    width: 100%;
    height: auto;
/* UI Properties */
background: transparent url('../assets/Group 35686.svg') 0% 0% no-repeat padding-box;
opacity: 1;
}
.form-content {
    position: relative;
    top: -80px;
    right: 300px;
    width: 600px;
    height: 70vh;
    box-shadow: 0px 40px 60px #0e77ff26;
    background: white;
    z-index: 50;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-started {
    border: 2px solid #0E77FF;
    border-radius: 2rem;
    background: #0E77FF;
    padding-inline: 2rem;
}

.left-img {
    margin-top: 8rem;
    width: 100%;
    height: auto;
}

.div-1 {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/Mask Group 4.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.div-3 {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    /* UI Properties */
    background: #edf5fd 0% 0% no-repeat padding-box;
    /* border: 0.1px solid #707070; */
    overflow: hidden;
}

.div3-box {
    height: 500px;
    width: 500px;
    margin: 12rem;
    background: white;
}

.added-img2 {
    position: absolute;
    top: 1600px;
    /* left: 80%; */
    right: 0px;
    /* left: 1578px; */
    width: 500px;
    height: 500px;
    /* transform: matrix(-0.66, 0.75, -0.75, -0.66, 0, 0); */
    /* UI Properties */
    background: transparent url('../assets/Group 35650.svg') 0% 0% no-repeat padding-box;
    background-size: contain;
    opacity: 1;

}

.about-text {
    display: flex;
    align-items: center;
}

.about-icon {
    top: 1594px;
    left: 1079px;
    width: 38px;
    height: 47px;
    transform: matrix(0, 1, -1, 0, 0, 0);
    background: #0E77FF 0% 0% no-repeat padding-box;
    opacity: 0.1;
}

.div-2 {
    display: flex;
    align-items: center;
    overflow: hidden;
}

.div2-img {
    left: 0;
    width: 50%;
    height: 100vh;
    background: transparent url('../assets/Group 35699.svg') 0% 0% no-repeat padding-box;
    background-size: cover;
    background-position: center;
    opacity: 1;
}

nav {
    text-align: left;
    font: normal normal normal 25px/38px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    top: 75px;
    left: 281px;
}

#button-login {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    padding-inline: 3rem;
}

.text-div1 {
    padding: 4rem;
}

.display-div1 {
    background: transparent url('../assets/Lorem Ipsum is simply dummy text of the printing and typesetting..svg') 0% 0% no-repeat padding-box;
    opacity: 1;
    top: 280px;
    left: 226px;
    width: 707px;
    height: 197px;
    padding: 2rem;
    margin: 2rem;
    margin-inline: 8rem;
}

.div1-text {
    top: 526px;
    left: 225px;
    width: 735px;
    height: 75px;
    margin: 3rem;
    margin-inline: 8rem;
    background: transparent url('../assets/Our products are fully custom-made, built with the latest technologies and cloud-architectures..svg') 0% 0% no-repeat padding-box;
    opacity: 1;
}

.started-button {
    top: 641px;
    left: 225px;
    width: 239px;
    height: 72px;
    margin: 2rem;
    margin-inline: 8rem;
}

.added-img {
    position: absolute;
    top: 970px;
    right: 0;
    left: 80%;
    width: 50vw;
    /* 50% of the viewport width */
    height: 50vh;
    /* Maintain aspect ratio */
    /* transform: matrix(-0.72, 0.69, -0.69, -0.72, 0, 0); */
    background: transparent url('../assets/Group 35698.svg') 0% 0% no-repeat padding-box;
    background-size: contain;

    /* background-size: cover; */
    opacity: 1;
}
</style>
