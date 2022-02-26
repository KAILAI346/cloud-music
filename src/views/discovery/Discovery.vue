<template>
  <div class="discovery">
      <banner :banners="banners" />
      <recommend :recommend="recommend" />
      <!-- <personalized :perData="perData" />
      <newest :songData="songData" @songlick="songClick"/>
      <recommend-m-v :recMV="recMV"/> -->
  </div>
</template>

<script>
import { getBanners,getRecommend,getPersonalized,getTopSong,getRecommendMV } from '../../networkAPI/discovery'
import { getSongDetail } from '../../networkAPI/songdetail'
import banner from './childComps/Banner.vue'
// import newest from './childComps/Newest.vue'
// import personalized from './childComps/Personalized.vue'
import recommend from './childComps/Recommend.vue'
// import recommendMV from './childComps/RecommendMV.vue'

export default {
name:"discovery",
components:{
    banner,
    // newest,
    // personalized,
    recommend,
    // recommendMV,
},
data() {
    return {
      banners:[],
      recommends:[],
      perParams:{
        limit:4,
        offset:0,
      },
      perData:[],
      songParams:{
        type:7,
      },
      songData:[],
      recMV:[]
    }
},
methods:{
  songClick(id) {
    getSongDetail(id).then(res => {
      this.$store.commit("addSongDetail",res.data.songs)
    })
  },
},
created() {
  // 请求轮播图数据
  getBanners().then((res) => {
    this.banners = res.data.banners;
  });
  // 请求推荐歌单
  getRecommend("16").then((res) => {
    this.recommends = res.data.result;
  });
  // 请求独家放送
  getPersonalized(this.perParams).then(res => {
    this.perData = res.data.result
  });
  // 请求最新音乐（新歌速递）
  getTopSong(this.songParams).then(res => {
    this.songData = res.data.data
    this.songData.length = 12
  });
  // 推荐mv
  getRecommendMV().then(res => {
    this.recMV = res.data.result
  })
},
}
</script>

<style>

</style>