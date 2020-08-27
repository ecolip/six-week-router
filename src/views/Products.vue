<!-- router設定-->
<!-- 1.開.vue-->
<!-- 2.建立路由-->
<!-- 3.加入路徑-->

<template>
  <div>
    <h1>這是產品列表</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">排序</th>
          <th scope="col">title</th>
          <th scope="col">content</th>
          <th scope="col">price</th>
          <th scope="col">link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for= "(item, i) in products" :key= "item.id">
          <th scope="row">{{i+1}}</th>
          <td>{{item.title}}</td>
          <td>{{item.content}}</td>
          <td>{{item.price}}</td>
          <td><router-link :to="`/product/${item.id}`">連結</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.axios.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data;
      });
  },
};

</script>
