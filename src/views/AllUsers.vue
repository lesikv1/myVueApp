<template>
  <div id="app">
    <AddUser class="adding"/>
    <Users v-bind:users="users"/>
  </div>
</template>

<script>
import Users from '../components/Users';
import AddUser from '../components/AddUser';

export default {
  name: 'AllUsers',
  components: {
    Users,
    AddUser
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  mounted() {
    this.$store.dispatch('getAllUsers')
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
