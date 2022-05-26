<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid logo">
        <router-link class="navbar-brand" to="/"
          ><img
            src="../assets/loge.jpeg"
            alt=""
          />
        </router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/note">筆記本＆手帳</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/ink">墨水＆書寫用品</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tape">紙膠帶</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/stamp">印章印臺</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/stickers">貼紙</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/paper">紙品素材</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/pen">事務文具</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/brands">品牌總覽</router-link>
            </li> -->
          </ul>
        </div>
        <!-- icon -->

        <router-link to="/user"><i class="bi bi-person-fill d-flex"></i></router-link>
        <router-link to="/shop"><i class="bi bi-cart-fill d-flex"></i></router-link>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>
</template>
<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
