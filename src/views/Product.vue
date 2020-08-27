<template>
  <div>
    <h1>這是單一產品頁面</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">排序</th>
          <th scope="col">title</th>
          <th scope="col">content</th>
          <th scope="col">price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{{ product.title }}</td>
          <td>{{ product.content }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    // 屬性 $route
    // 方法 $router
    // console.log(this.$route.params.id);
    const { id } = this.$route.params;
    this.axios.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        this.product = res.data.data;
      });
  },
};
</script>
