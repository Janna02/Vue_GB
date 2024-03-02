<template>
  <div id="app">
    <HeaderWeb />
    <hr />
    <HelloWorld class="Hello center" msg="Welcome !" />
    <!-- <ProductDetails :product="productData" /> -->
    <div class="productGrid center">
      <div class="border" v-for="product in products" :key="product.id">
        <ProductDetails :product="product" />
      </div>
    </div>
    <hr />
    <FooterWeb />
  </div>
</template>

<script>
import HeaderWeb from "./components/Header.vue";
import HelloWorld from "./components/HelloWorld.vue";
import ProductDetails from "./components/ProductDetails.vue";
import FooterWeb from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderWeb,
    HelloWorld,
    ProductDetails,
    FooterWeb,
  },

  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product 1",
          price: 99.99,
          available: true,
        },
        {
          id: 2,
          name: "Product 2",
          price: 49.99,
          available: false,
        },
        {
          id: 3,
          name: "Product 3",
          price: 59.99,
          available: true,
        },
        {
          id: 4,
          name: "Product 4",
          price: 89.99,
          available: false,
        },
        {
          id: 5,
          name: "Product 5",
          price: 79.99,
          available: true,
        },
        {
          id: 6,
          name: "Product 6",
          price: 49.99,
          available: false,
        },
        {
          id: 7,
          name: "Product 7",
          price: 49.99,
          available: false,
        },
      ],
      // productData: {
      //   name: "Super Ice Cool Blue Oval Lite",
      //   price: 99.99,
      //   available: true,
      // },
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.productGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 5px;
  margin-bottom: 55px;
  background-color: lightgray;
  padding-top: 55px;
  padding-bottom: 55px;
}
.border {
  border: solid #000 3px;
  border-radius: 15px;
}
.Hello {
  margin-top: 55px;
  background-color: lightgray;
  padding-top: 55px;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>
