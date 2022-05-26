<template>
  <div class="container">
    <div class="row justify-content-center">
      <!-- <Bread></Bread> -->
      <!-- left-nav -->

      <!-- main -->
      <main class="col-md-9 mt-5 text-center">
        <div class="contaniner-fluid pb-5">
          <div class="row justify-content-center">
            <div class="col-6 col-lg-3 box text-center my-3">
              <router-link to="/note/product">
                <img
                  class="figure-img img-fluid rounded"
                  src="https://cdn.store-assets.com/s/324910/i/41088375.jpg?width=1024&format=webp"
                />
                <h5 class="card-title">
                  Ferris Wheel Press｜摩天輪 鋼筆墨水 Spadina Rose
                </h5>
                <p class="card-text">NT$ 650</p>
              </router-link>


            </div>
            <div class="col-6 col-lg-3 box my-3">
              <a href=""
                ><img
                  class="figure-img img-fluid rounded"
                  src="https://cdn.store-assets.com/s/324910/i/42621808.jpg?width=1024&format=webp"
                  alt=""
                />
                <h5 class="card-title">山泥泥｜A letter for you 明信片</h5>
                <p class="card-text">NT$ 45</p>
              </a>

  
            </div>
            <div class="col-6 col-lg-3 box my-3">
              <a href=""
                ><img
                  class="figure-img img-fluid rounded"
                  src="https://cdn.store-assets.com/s/324910/i/42621529.jpg?width=1024&format=webp"
                  alt=""
                />
                <h5 class="card-title">山泥泥｜小鳥先生的日常 轉印貼紙</h5>
                <p class="card-text">NT$ 90</p>
              </a>
   
            </div>
            <div class="col-6 col-lg-3 box my-3">
              <a href=""
                ><img
                  class="figure-img img-fluid rounded"
                  src="https://cdn.store-assets.com/s/324910/i/42621071.jpg?width=1024&format=webp"
                  alt=""
                />
                <h5 class="card-title">
                  山泥泥｜收到禮物 / 接住流星的小鳥先生 印章
                </h5>
                <p class="card-text">NT$ 135</p>
              </a>

              <!-- <a href="#" class="btn btn-primary"
                ><i class="bi bi-bag"></i>加入購物車</a
              > -->
            </div>
          </div>
        </div>
      </main>
<!-- <Pagination></Pagination> -->
</div>
  </div>
</template>

<script>
import Bread from "@/components/bread.vue";
import Pagination from "@/components/pagination.vue";
export default {
  components: {
    Bread,
    Pagination
},
}
// import axios from 'axios'
// import ProductBox from '../components/ProductBox.vue'
</script>
