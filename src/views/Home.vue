<template>
  <div class="home">
    <Parent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Parent from "@/components/Parent"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Parent,
  },
});
</script>
