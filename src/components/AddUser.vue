<template>
  <div>
    <div class="showModal">
      <v-btn
        color="primary"
        justify="center"
        dark
        @click="dialog = true">
          Add User
      </v-btn>
    </div>

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
            @click="close"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="add"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import uuid from 'uuid';
export default {
  name: "AddUser",
  data() {
    return {
      dialog: false,
      firstName: "",
      lastName: "",
      numberPhone: "",
      favorite: false,
    }
  },
  methods: {
    close () {
      this.dialog = false
    },
    add () {
      this.dialog = false
      this.$store.dispatch('createUser', {
        firstName: this.firstName,
        lastName: this.lastName,
        numberPhone: this.numberPhone,
        favorite: this.favorite
      })
    }
  }
}

</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }

  .showModal {
    width: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: auto;
  }

  .inputblock {
    width: 100%;
    max-width: 100%;
  }
</style>


