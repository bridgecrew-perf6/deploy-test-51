<template>
  <div>
    <img :src="detail.urlToImage" alt="" />
    <h1>{{ detail.title }}</h1>
    <div class="flex">
      <p>{{ detail.author }}</p>
      <p>{{ detail.publishedAt }}</p>
    </div>
    <p>{{ detail.content }}</p>
    <a :href="detail.url">Read More</a>
    <br />
    <router-link :to="{ name: 'Home' }" tag="button">Kembali</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      berita: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2022-04-08&to=2022-04-08&sortBy=popularity&apiKey=6f7f2269e8ab4459b52c2e97f3b04ac5"
      )
      .then((response) => {
        this.berita = response.data.articles;
      });
  },
  computed: {
    detail() {
      return this.berita.find(
        (berita) => berita.source.name === this.$route.params.id
      );
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.flex {
  display: flex;
  justify-content: space-between;
}
</style>