<template>
  <div>
    <h2>{{ product.name }}</h2>
    <h3>{{ formattedPrice }}</h3>
    <h3>{{ product.available ? "Available" : "Out of stock" }}</h3>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedPrice() {
      return this.product.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD", // Выбор валюты "JPY","EUR","RUB"
      });
    },
  },
};
</script>

<style></style>
