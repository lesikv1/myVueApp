<template>
  <div class="card-user">
    <v-card
      max-width="344"
      class="user-item"
    >
      <v-card-title>First Name: {{firstName}}</v-card-title>
      <v-card-text>Last Name: {{lastName}}</v-card-text>
      <v-card-text>Number Phone: {{lastName}}</v-card-text>
      <v-container fluid>
        <v-checkbox v-model="favorite" @click="setFavorite(user._id, !favorite)" :label="`Favorite User: ${favorite ? 'Yes' : 'No'}`"></v-checkbox>
      </v-container>
      <v-card-actions>
        <v-btn text @click="dialog = true">Edit</v-btn>
        <v-btn text @click="delUser(user._id)">Delete</v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog
        v-model="dialog"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            Adding User
          </v-card-title>

        <v-col
          cols="12"
          md="4"
          class="inputblock"
        >
          <v-form ref="form">
            <v-text-field
              v-model="firstName"
              label="First name"
            ></v-text-field>
          </v-form>
          <v-form ref="form">
            <v-text-field
              v-model="lastName"
              label="Last name"
            ></v-text-field>
          </v-form>
          <v-form ref="form">
            <v-text-field
              v-model="numberPhone"
              label="Number phone"
            ></v-text-field>
          </v-form>
        </v-col>

          <v-container fluid>
            <v-checkbox v-model="favorite" :label="`Favorite User: ${favorite ? 'Yes' : 'No'}`"></v-checkbox>
          </v-container>

          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="editUser(user._id)"
            >
              Edit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>

export default {
  name: "UserItem",
  props: ["user"],
  data() {
    return {
      favorite: false,
      firstName: '',
      lastName: '',
      numberPhone: '',
      dialog: false
    }
  },
  mounted() {
    this.favorite = this.$props.user.favorite
    this.firstName = this.$props.user.firstName
    this.lastName = this.$props.user.lastName
    this.numberPhone = this.$props.user.numberPhone
  },
  methods: {
    markComplete() {
      this.user.favorite = !this.user.favorite;
    },
    delUser (id) {
      this.$store.dispatch('deleteUser', id)
    },
    async setFavorite(id, favorite) {
      await this.$store.dispatch('setFavorite', {id, favorite})
      this.favorite = favorite
    },
    async editUser(id) {
      this.dialog = false
      await this.$store.dispatch('editUser', {
        id,
        favorite: this.favorite,
        firstName: this.firstName,
        lastName: this.lastName,
        numberPhone: this.numberPhone
      })
    }
  }
}
</script>

<style scoped>
  .card-user {
    width: 100%;
    margin-top: 20px
  }
  .user-item {
    margin: auto;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }

  .inputblock {
    width: 100%;
    max-width: 100%;
  }
</style>

