<template>
  <div class="container">
    <div class="row" id="setpasswd" style="margin-top:7%">
      <div class="col-xl-4 col-lg-4 col-md-8 col-12 offset-xl-4 col-lg-3 offset-md-2">
        <div class="form-group row input-group-control">
          <label for="user_email"> 
            邮箱: 用于登录用户名<span class="text-red">*</span>
          </label>
          <input
            type="email"
            id="user_email"
            name="email"
            class="form-control"
            placeholder="Email"
            maxlength="30"
            minlength="8"
            autocomplete="new-email"
            autofocus
            required
            v-model.trim="UserData.email"
            @change="isCheckInput($event)"
          />
        </div>
        <div class="form-group row input-group-control">
          <label for="user_realname"> 
            真实姓名<span class="text-red">*</span> 
          </label>
          <input
            type="text"
            class="form-control"
            id="user_realname"
            name="user_realname"
            placeholder="真实姓名"
            maxlength="8"
            minlength="3"
            autocomplete="off"
            required
            v-model.trim="UserData.realname"
            @change="isCheckInput($event)"
          />
        </div>
        <div class="form-group row input-group-control">
          <label for="user_position"> 
            岗位/职位<span class="text-red">*</span>
          </label>
          <select class="select-control form-border-bottom"
            v-model="UserData.position" @change="isCheckInput($event)">
            <option v-for="(item,index) in position_list" :key="index" :value="item.value">
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="form-group row input-group-control">
          <label for="user_init_passwd"> 
            初始密码<span class="text-red">*</span> 
          </label>
          <input
            type="password"
            id="user_init_passwd"
            name="user_init_passwd"
            class="form-control"
            placeholder="初始密码不能为纯数字"
            maxlength="16"
            minlength="6"
            autocomplete="new-password"
            required
            v-model.trim="UserData.password"
            @change="isCheckInput($event)"
          />
        </div>
        <div class="form-group row input-group-control mt-5">
          <button type="button" class="btn-control btn-success" @click="SubmitUser">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "HDesk - 增加用户"
    }
  },
  layout: "head",
  
  data() {
    return {
      msg: "",
      isButtonStatus: true,
      showModal: false,
      UserGroup: [],
      position_list: [
        { name: "管理层", value: "manager" },
        { name: "研发", value: "developer" },
        { name: "测试", value: "test" },
        { name: "android", value: "android" },
        { name: "ios", value: "ios" },
        { name: "web/H5", value: "web/H5" },
        { name: "产品", value: "pm" },
        { name: "服务端", value: "server" },
        { name: "设计师", value: "design" },
        { name: "技术总监", value: "CTO" },
        { name: "产品总监", value: "pm-director" },
        { name: "其它", value: "other" }
      ],
      UserData: {
        email: "",
        password: "",
        realname: "",
        position: ""
      }
    }
  },

  created() {
  },

  methods: {
    
    // 检查输入，控制按钮状态
    isCheckInput(event) {
      if (
        (this.UserData.email.length > 0) &
        (this.UserData.password.length > 0) &
        (this.UserData.realname.length > 0)
      ) {
        this.isButtonStatus = false
      } else {
        this.isButtonStatus = true
      }
    },
    
    // submit user info
    SubmitUser() {
      const email = this.UserData.email
      const password = this.UserData.password
      const realname = this.UserData.realname
      if (email.length < 8 | email.length > 30) {
        this.$notify.error({
          title: "错误",
          message: "Email的有效长度为8到30位"
        })
        return 
      }
      if (password.length < 6 | password.length > 16) {
        this.$notify.error({
          title: "错误",
          message: "密码的有效长度为6到16位"
        })
        return 
      }
      if (realname.length < 2 | realname.length > 8) {
        this.$notify.error({
          title: "错误",
          message: "姓名的有效长度为2到8位"
        })
        return 
      }
      this.axios({
        method: "post",
        url: "/api/user/add",
        data: JSON.stringify(this.UserData)
      }).then(res => {
        if (res.data["status"] === 20000) {
          this.$notify.success({
            title: "增加成功",
            message: res.data["msg"]
          })
          this.$router.push("/app/user-management/user")
        } else {
          this.$notify.error({
            title: "增加失败",
            message: res.data["msg"]
          })
        }
      })
    }
  }
}
</script>