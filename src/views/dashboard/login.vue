<style src = "../../assets/css/auth.css"></style>

<template>
  <div class="session-authentication">
    <div class="position-relative js-header-wrapper">
      <div class="header header-logged-out width-full pt-5 pb-4" role="banner">
        <div class="container clearfix width-full text-center">
          <router-link to="/">
            <img alt="Vue logo" src="../../assets/logo.png" />
          </router-link>
        </div>
      </div>
      <div class="application-main">
        <main id="js-pjax-container">
          <div class="auth-form px-3" id="login">
            <div class="auth-form-header p-0">
              <h1>Sign in to FMEA</h1>
            </div>

            <div class="auth-form-body mt-3">
              <form @submit.prevent="SignIn">
                <div class="form-group">
                  <label for="fab">Fab</label>
                  <select id="fab" v-model="user.fab" class="form-select">
                    <option v-for="option in Fab" :key="option">{{ option }}</option>
                  </select>
                </div>
                <div class="from-group">
                  <label for="account">帳號</label>
                  <input type="text" id="account" v-model="user.account" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="pwd">密碼</label>
                  <input type="pwd" id="password" v-model="user.password" class="form-control" />
                </div>
                <br />
                <button type="submit" class="btn btn-success btn-block">Sign in</button>
              </form>
            </div>
            <br />
            <div class="footer container-lg p-responsive py-6 mt-6 f6" role="contentinfo">
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="item in footer" :key="item">{{item}}</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      Fab: ['P1', 'P2', 'P3'],
      user: {
        fab: 'P1',
        account: '',
        password: '',
      },
      footer: ['使用上有問題請找：xxx', '程式有問題請找：OOO'],
    };
  },
  methods: {
    SignIn() {
      // const apiUrl = this.Parse.ApiUrl();
      // this.$router.push('scform'); //導頁
      // router open window
      const openPage = this.$router.resolve('scform');
      window.open(openPage.href, '_blank');
    },
  },
};
</script>
