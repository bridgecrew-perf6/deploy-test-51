<template>
  <div>
    <NavbarMenu/>
    <div class="flex flex-wrap grid grid-rows-2 grid-flow-col gap-4">
      <!-- <SidebarNews/> -->
        <div class="container flex flex-wrap row-span-2">
          <div v-for="article in newsList" id="article" :key="article.original_title">
            <!-- <router-link
              :to="{ name: 'Description', params: { id: article.source.original_title } }"
              tag="button"
            > -->
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-sky-50 mx-5 my-5">
              <a href="#">
                  <img class="rounded-t-lg" :src="'https://image.tmdb.org/t/p/w500/'+article.poster_path" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-800">{{ article.original_title }}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 ">{{ article.overview }}</p>
              </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
import NavbarMenu from '@/components/NavbarMenu.vue'
import SidebarNews from '@/components/SidebarNews.vue'

export default {
  name: "Home",
  components: {
    NavbarMenu,
    SidebarNews
  },
computed: {
    newsList() {
      return this.$store.state.newsList
    }
  },
  mounted() {
    this.fetchNews({
      keyword:"" || "red",
    })
  },
  methods: {
    fetchNews({keyword}) {
      this.$store.dispatch('fetchNews',{
        keyword,
      })
    }
  }
};
</script>


