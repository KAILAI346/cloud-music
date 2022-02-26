<template>
  <div class="top-bar">
    <div class="left-bar">
      <span class="iconfont icon-liebiao top-menu" @click="menuClick"></span>
      <div class="logo" @click="logoClick">
        <img src="../../../assets/images/logo.png" alt="云音乐">
      </div>
      <div class="box-icon">
        <el-button 
          circle="true"
          type="info"
          size="mini"
          icon="el-icon-arrow-left"
          @click="backClick"
        ></el-button>
        <el-button 
          circle="true"
          type="info"
          size="mini"
          icon="el-icon-arrow-right"
        ></el-button>
      </div>
      <!-- 输入框 -->
      <div class="search">
        <div class="searchDetail">
          <el-input 
          v-model="input3"
          class="w-50 m-2"
          :placeholder="holder"
          :prefix-icon="Search"
          >
            
          </el-input>
          <div class="input-query">

          </div>
          <div class="inputquery">

          </div>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <div class="right-bar">
      <div class="user-info">
        <img src="../../../assets/images/1.jpg" alt="avatar">
        <span class="login-user">未登录</span>
      </div>
      <el-button type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue'

export default {
  name:"#homeHeader",
  data() {
    return {
      holder:"富士山下",
      Search,
    }
  },
  methods:{
    logoClick() {
      this.$router.push("/discovery");
    },
    backClick() {
      this.$router.back();
    },
    goClick() {
      this.$router.go(1);
    },
    loginClick() {
      alert("暂不支持此功能！！！")
    },
    // 菜单显示
    menuClick() {
      this.$emit("showMenu")
    },
  }
}
</script>

<style lang="less" scoped>
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #242424;
    .left-bar {
      display: flex;
    }
    .right-bar {
      margin-right: 10px;
      .user-info {
        display: inline-block;
        cursor: pointer;
      }
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        border-radius: 50%;
        user-select:none;
      }
      .login-user {
      display: inline-block;
      width: 100px;
      margin:  0 10px;
      color: #fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      vertical-align: middle;
    }
  }
}
</style>