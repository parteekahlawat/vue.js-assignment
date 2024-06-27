<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-white shadow-lg rounded-lg p-4">
        <ul>
          <li class="mb-4">
            <a href="#" class="flex items-center text-blue-500">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v4H3a1 1 0 000 2h14a1 1 0 000-2h-1V8a6 6 0 00-6-6z" />
              </svg>
              Dashboard
            </a>
          </li>
          <li class="mb-4">
            <a href="#" class="flex items-center text-gray-600 hover:text-blue-500">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 4a2 2 0 100-4 2 2 0 000 4zm4 0a2 2 0 100-4 2 2 0 000 4zM4 4a2 2 0 10-4 0 2 2 0 004 0zM16 4a2 2 0 10-4 0 2 2 0 004 0zM4 18a2 2 0 10-4 0 2 2 0 004 0zM18 14a2 2 0 10-4 0 2 2 0 004 0z" />
              </svg>
              Analytics
            </a>
          </li>
          <li class="mb-4">
            <a href="#" class="flex items-center text-gray-600 hover:text-blue-500">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a1 1 0 011-1h6a1 1 0 011 1v4H6V2zM4 5a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-1V4a1 1 0 10-2 0v1H7V4a1 1 0 10-2 0v1H4z" />
              </svg>
              Trading
            </a>
          </li>
          <li class="mb-4">
            <a href="#" class="flex items-center text-gray-600 hover:text-blue-500">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
              Notifications
            </a>
          </li>
        </ul>
      </aside>
      
      <!-- Main Content -->
      <main class="flex-1 p-4">
        <header class="mb-4 flex justify-between items-center">
          <h1 class="text-2xl font-semibold">Dashboard</h1>
          <button class="bg-blue-500 text-white py-2 px-4 rounded-lg">Add Unit</button>
        </header>
        
        <div class="mb-4 p-4 bg-white rounded-lg shadow-lg">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h2 class="text-xl font-semibold">Welcome back, Andrew</h2>
            </div>
            <div>
              <img src="https://via.placeholder.com/50" alt="Profile" class="rounded-full w-12 h-12">
            </div>
          </div>
          <div class="flex justify-around text-center">
            <div>
              <h3 class="text-gray-500">Balance</h3>
              <p class="text-2xl">$5900.00</p>
            </div>
            <div>
              <h3 class="text-gray-500">Profits</h3>
              <p class="text-2xl">$950.00</p>
              <p class="text-green-500">+56%</p>
            </div>
            <div>
              <h3 class="text-gray-500">Losses</h3>
              <p class="text-2xl">$450.00</p>
              <p class="text-red-500">-56%</p>
            </div>
            <div>
              <h3 class="text-gray-500">Currencies</h3>
              <p class="text-2xl">₿ $ € ¥</p>
            </div>
          </div>
        </div>
        
        <div class="mb-4 p-4 bg-white rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold mb-4">Team Members</h2>
          <ul>
            <li class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <img src="https://via.placeholder.com/50" alt="Andrew Johnston" class="rounded-full w-12 h-12 mr-4">
                <p>Andrew Johnston</p>
              </div>
              <span class="bg-blue-500 text-white py-1 px-2 rounded-lg">Top Trader</span>
            </li>
            <li class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <img src="https://via.placeholder.com/50" alt="Anna Atkinsons" class="rounded-full w-12 h-12 mr-4">
                <p>Anna Atkinsons</p>
              </div>
              <span class="bg-gray-500 text-white py-1 px-2 rounded-lg">Manager</span>
            </li>
            <li class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <img src="https://via.placeholder.com/50" alt="Mark Atkinsons" class="rounded-full w-12 h-12 mr-4">
                <p>Mark Atkinsons</p>
              </div>
              <span class="bg-blue-500 text-white py-1 px-2 rounded-lg">Top Trader</span>
            </li>
            <li class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <img src="https://via.placeholder.com/50" alt="Johanna Tairons" class="rounded-full w-12 h-12 mr-4">
                <p>Johanna Tairons</p>
              </div>
              <span class="bg-gray-500 text-white py-1 px-2 rounded-lg">Manager</span>
            </li>
          </ul>
        </div>
        
        <div class="p-4 bg-white rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold mb-4">Comparison</h2>
          <div class="space-y-4">
            <div>
              <p class="text-gray-500">United States</p>
              <div class="bg-gray-200 h-4 rounded-lg overflow-hidden">
                <div class="bg-blue-500 h-full" style="width: 93%;"></div>
              </div>
            </div>
            <div>
              <p class="text-gray-500">Italy</p>
              <div class="bg-gray-200 h-4 rounded-lg overflow-hidden">
                <div class="bg-blue-500 h-full" style="width: 73%;"></div>
              </div>
            </div>
            <div>
              <p class="text-gray-500">Spain</p>
              <div class="bg-gray-200 h-4 rounded-lg overflow-hidden">
                <div class="bg-blue-500 h-full" style="width: 13%;"></div>
              </div>
            </div>
            <div>
              <p class="text-gray-500">Japan</p>
              <div class="bg-gray-200 h-4 rounded-lg overflow-hidden">
                <div class="bg-blue-500 h-full" style="width: 5%;"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
