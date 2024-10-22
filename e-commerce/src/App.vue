<script>
import CardComponent from './components/Card.vue'; // Rename the import to avoid conflict
import PromotionComponent from './components/Promotion.vue';

export default {
  name: 'Wrapper',
  components: {
    CardComponent, // Register it with a different name
    PromotionComponent,
  },
};


</script>

<template>
  <CardComponent></CardComponent> <!-- Use the new name in the template -->
  <PromotionComponent></PromotionComponent>
</template>
