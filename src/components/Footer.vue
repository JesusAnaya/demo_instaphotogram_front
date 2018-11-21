
<template>
  <!-- Footer -->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-white">
        <img :src="logo" class="logo" alt="PythonDay MX 2018"> PythonDay México 2018
      </p>
    </div>
    <!-- /.container -->
  </footer>
</template>

<script>
  import '../assets/less/footer.less'
  import logo from "../assets/pythonday-logo.png"

  export default {
    name: 'FooterComponent',
    data: function () {
      return {
        logo: logo
      }
    }
  }
</script>
