<template>
  <div id="page-user-login" class="container mt-5" v-if="isLogin">
    <div class="row">
      <div class="col">
        <h1>HDesk</h1>
      </div>
    </div>
    <div class="row justify-content-center" style="margin-top:15%;">
      <div class="col-lg-4 col-md-6 col-sm-8 col-12 text-center">
        <h2 class="p-user-login-title">欢迎登录</h2>
        <div id="input-email" class="input-group input-group-lg">
          <input type="email" id="user_name" name="email" class="form-control"
            maxlength="30" minlength="6"
            placeholder="电子邮件"
            v-model.trim="LoginData.username" />
        </div>
        <div id="input-passwd" class="input-group input-group-lg mt-3">
          <input type="password" id="user_passwd" name="user_passwd" class="form-control"
            maxlength="30" minlength="6"
            placeholder="输入密码"
            v-model.trim="LoginData.password"
            @keyup.enter="goLogin" />
        </div>
        <div class="mt-4">
          <button type="button" id="user_login_btn" class="btn btn-login btn-lg btn-block"  @click="goLogin">
            登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getUserFromLocalStorage,getUserFromCookie } from "~/assets/js/auth"
import { Base64 } from 'js-base64'

export default {
  data() {
    return {
      token: "",
      showModal: false,
      msg: "",
      target_url: "/app/dashboard",
      LoginData: {
        username: "",
        password: ""
      },
      isLogin: false
    }
  },

  mounted() {
    const token = getUserFromLocalStorage()
    if (this.$store.state.isLogin || token) {
      this.$router.replace("/app/dashboard")
    } else {
      this.isLogin = true
    }
    const target_url = this.$route.query.target ? this.$route.query.target : false
    if (target_url) {
      this.target_url = Base64.decode(target_url)
    }
  },

  methods: {
    goLogin() {
      let [username,password] = [this.LoginData.username,this.LoginData.password]
      if (username.length === 0) {
        this.$notify.error({
          title: "提交失败",
          message: "用户名不为空哦"
        })
        return
      }
      if ((username.length > 30) | (username.length < 6)) {
        this.$notify.error({
          title: "提交失败",
          message: "用户名长度需在6到30位之间"
        })
        return
      }
      if (password.length === 0) {
        this.$notify.error({
          title: "提交失败",
          message: "密码不能为空哦"
        })
        return
      }
      if ((password.length > 30) | (password.length < 6)) {
        this.$notify.error({
          title: "提交失败",
          message: "密码长度需在6到30位之间"
        })
        return
      }

      this.axios({
        method: "post",
        url: "/api/user/login",
        data: JSON.stringify(this.LoginData)
      }).then(res => {
          if (res.data["status"] === 10000) {

            // 存储token与cookie
            let token = res.data["data"]["token"]
            if (process.browser) {
              window.localStorage.setItem("token", token)
              let Days = 30
              let exp = new Date()
              exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
              document.cookie = "token=" + token + ";" + "expires=" + exp.toGMTString() + ";" + "path=/"
            }

            // 保存用户登录数据到state
            this.$store.commit("setLoginInfo", res.data)
            this.$store.dispatch('getUserInfo')

            // 跳转首页
            this.$router.replace(this.target_url)
          }
          if (res.data["status"] !== 10000) {
            this.LoginData.username = ""
            this.LoginData.password = ""
            this.$notify.error({
              title: "登录失败",
              message: res.data["msg"]
            })
          }
        })
        .catch((error) => {
          alert("请检查网络、或配置文件,或联系管理员")
        })
    }
  }
}
</script>

<style scoped>
  .btn-login {
    background-color: rgb(66, 133, 244);
    border-color: rgb(66, 133, 244);
    color: rgb(255, 255, 255);
  }

  .p-user-login-title {
    margin-bottom: 2rem;
    font-weight: 300;
  }

  .p-user-login-main {
    margin-top: 10%;
    text-align: center;
  }
</style>
