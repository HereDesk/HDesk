<template>
  <div class='container'>
    <div class='row' id='setpasswd' style="margin-top:10%;">
      <div class='col-xl-4 col-lg-4 col-md-4 col-12 offset-xl-4 col-lg-4 offset-md-4'>
  	    <div class='form-group input-group-control'>
          <label for='oldPassword'>旧密码</label>
          <input type='password' id='oldPassword' name="oldPassword" class='form-control'
            maxlength='16' minlength="8" placeholder='旧密码'
            required autofocus
            v-model.trim='passwdData.oldPassword' />
        </div>
        <div class='form-group input-group-control'>
        	<label for='newPassword'>新密码</label>
        	<input type='password' id='newPassword' name="newPassword"  class='form-control'
            maxlength='16' minlength="8" placeholder='不要输入纯数字的密码哦'
            required autofocus
            v-model.trim='passwdData.newPassword' />
      	</div>
        <p class="my-3 font-size-85 text-gray">备注：密码有效长度8到16位，且首尾不能使用空格</p>
      	<div class='form-group input-group-control'>
        	<input type="submit" class="btn btn-control"
            :class="{ 'btn-secondary': !isButtonStatus, 'btn-primary': isButtonStatus }"
            :disabled="!isButtonStatus"
            @click="SubmitPasswd" />
      	</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "HDesk - 修改密码"
    };
  },
  layout: "head",
  computed: {
    isButtonStatus() {
      if (this.passwdData.oldPassword && this.passwdData.newPassword) {
        return true;
      } else {
        return null;
      }
    }
  },

  data() {
    return {
      msg: "",
      showModal: false,
      passwdData: {
        oldPassword: null,
        newPassword: null
      }
    };
  },
  methods: {
    HandLogout() {
      window.localStorage.removeItem("token");
      document.cookie =
        "token" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;" + "path=/";
      window.location.replace("/");
    },
    SubmitPasswd() {
      let newPassword = this.passwdData.newPassword;
      let oldPassword = this.passwdData.oldPassword;
      if ((newPassword.length < 8) | (newPassword.length > 16)) {
        this.$notify.error({
          title: "错误",
          message: "密码的有效长度为8到16位"
        })
        return
      }
      if (oldPassword.length === 0) {
        this.$notify.error({
          title: "错误",
          message: "旧密码不能为空！"
        })
        return
      }
      this.axios({
        method: "post",
        url: "/api/user/setpasswd",
        data: JSON.stringify(this.passwdData)
      }).then(res => {
        if (res.data["status"] === 20000) {
          this.$notify.success({
            title: "修改成功",
            message: res.data["msg"]
          })
          if (process.client) {
            this.HandLogout()
          }
        }
        if (res.data["status"] !== 20000) {
          this.$notify.error({
            title: "修改失败",
            message: res.data["msg"]
          })
        }
      })
    }
  }
};
</script>
