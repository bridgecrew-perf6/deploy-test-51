<template>
<nav class="bg-blue-800 border-gray-200 px-2 sm:px-4 py-2.5 mb-3">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
      <span class="self-center text-xl font-semibold whitespace-nowrap text-white">News Apps</span>
  <div class="flex md:order-2">
      <div class="hidden relative mr-3 md:mr-0 md:block">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"><path 
          fill-rule="evenodd" 
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
          clip-rule="evenodd"></path></svg>
        </div>
        <input v-model="keyword"
            @keyup.enter="searchArticles(keyword)"
            type="search"
            name="serch"
        id="email-adress-icon" 
        class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 " 
        placeholder="Search...">
      </div>
  </div>
  </div>
</nav>
</template>

<script>
export default {
    name:'NavbarMenu',
    data: () => ({
      keyword: "",
    }),
    methods: {
      searchArticles(keyword) {
        this.$store.dispatch("fetchNews", {
          keyword,
        });
      },
    },
}
</script>