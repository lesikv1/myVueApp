<template>
  <div class="table">
    <div v-bind:key="user.id" v-for="user in users" class="sameitem">
      <UserItem v-bind:user="user" />
    </div>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  name: "Users",
  components: {
    UserItem
  },
  props: ["users"]
}
</script>

<style scoped>
  .table {
    display: flex;
    flex-wrap: wrap;
  }
  .sameitem {
    margin-left: 20px;
  }
</style>