<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="users">
          <h1>Users List</h1>

          <!-- table to display users' informations  -->
          <table class="table table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Avatar</th>
                <th @click="sortList('name')" scope="col">Name &#8597;</th>
                <th @click="sortList('email')" scope="col">Email id &#8597;</th>
                <th scope="col">Button</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="users in usersListFromStore" v-bind:key="users">
                <th>
                  <img alt="Vue logo" src="@/assets/avatar.png" />
                </th>
                <td>{{ users.name }}</td>
                <td>{{users.email}}</td>
                <td>
                  <!-- router-link to display posts by a specific user -->
                  <router-link
                    :to="{name:'posts', query:{userId:users.id}}"
                    class="btn btn-dark"
                  >Posts</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortedbyASC: true,
    };
  },
  computed:{
    usersListFromStore(){
      return this.$store.state.usersList; 
    }
  },
  methods: {
    // method to sort name and email id of all users
    sortList(sortBy) {
      if (this.sortedbyASC) {
        this.usersList.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
        this.sortedbyASC = false;
      } else {
        this.usersList.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
      }
    }
  },
  mounted() {
    // userlist array from vuex store
    this.$store.dispatch('userData');
  }
};
</script>

<style>
.btn:hover {
  background-color: white;
}
img{
  width:150px;
  height: 150px;
}
</style>
