<template>
  <div class="container">
    <div class="row justify-content-center my-5">
      <!-- <Bread></Bread> -->
      <!-- 商品圖 -->
      <div class="col-lg-6 px-5">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner px-5 pb-5">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="https://cdn.store-assets.com/s/324910/i/41088375.jpg?width=1024&format=webp"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="https://cdn.store-assets.com/s/324910/i/41088378.jpg?width=1024&format=webp"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <!-- 商品資訊 -->
      <div class="col-lg-6 px-5 contaniner-fluid">
        <div class="row justify-content-center text-center">
          <h1>Ferris Wheel Press｜摩天輪 鋼筆墨水 Spadina Rose</h1>
          <p>NT$ 650</p>
          <span>數量</span>
          <input
            class="form-control w-300 m-5"
            type="number"
            min="0"
            step="1"
          />
          <br />
          <button class="btn btn-secondary col-9 col-md-4 p-1 m-1">
            立即購買
          </button>

          <button class="btn btn-primary col-9 col-md-4 m-1">
            <i class="bi bi-bag"></i>加入購物車
          </button>
        </div>
      </div>


     <!-- <navTab></navTab> -->
    </div>
  </div>
</template>
<script>
import navTab from '@/components/nav-tab.vue'
import Bread from '@/components/bread.vue'



export default {
  components: {
    navTab,
    Bread
}
}
</script>
