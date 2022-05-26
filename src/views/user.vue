<template>
  <div class="form">
    <h1>登入</h1>
    <br />
    <form
      class="row g-3 needs-validation bg-light justify-content-center py-5 mb-5"
      novalidate
    >
      <div class="col-9">
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          placeholder="電子信箱"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>

      <div class="col-9">
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          placeholder="密碼"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>

      <div class="col-9">
        <a href="">忘記密碼</a>
        <button class="btn btn-primary col-12" type="submit">登入</button>
      </div>
      <a href="" class="pt-5">註冊帳號</a>
    </form>
  </div>




  
</template>

<style>
.form {
  width: 500px;
  text-align: center;
  margin: auto;
}
</style>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
</script>
