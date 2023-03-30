<template>
  <div class="container">
    <div class="row">
      <div class="posts">
        <h1>Posts List</h1>
        <DialogBox v-if="showDialog">
          <b>Full Post of an user with User Id : {{ userNo }}</b><br/><br/>
          <div>{{ title }}</div><br/>
          <div>{{ body }}</div><br/>
          <div><button @click="showDialog=false" class="btn btn-dark">Close</button></div>
        </DialogBox>
        <!-- table to display post details by a specific user-->
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">UserId</th>
              <th scope="col">title</th>
              <th scope="col">body</th>
              <th scope="col">Full Posts</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(posts, index) in postsList" v-bind:key="posts">
              <td>{{posts.userId }}</td>
              <td>{{posts.title}}</td>
              <td>{{posts.body}}</td>
              <td>
                <a class="btn btn-dark" @click.prevent="showPopup(index)">Full Post</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
        

<script>
import DialogBox from "@/components/DialogBox.vue";
export default {
  data() {
    return {
      postsList: [],
      userId: "",
      showDialog:false,
      userNo:"",
      title:"",
      body:""
    };
  },
  components:{
    DialogBox
  },
  computed:{
    usersListFromStore(){
      return this.$store.state.usersList; 
    }
  },
  created() {
    // get userId from query parameters
    this.userId = this.$route.query.userId;
  },
  methods: {
    // method to display post details by a specific user
    async userPostData() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`);
      const finalRes = await res.json();
      this.postsList = finalRes;
    },
    //method to open a pop-up dialog
    showPopup(ix){
      this.showDialog = true;
      this.userNo = this.postsList[ix].userId;
      this.title = this.postsList[ix].title;
      this.body = this.postsList[ix].body;
    }
  },

  mounted() {
    this.userPostData();
    this.$store.dispatch('userData');
  }
};
</script>

<style>
thead {
  background-color: #000000cf;
  color: white;
}
body {
  font-family: "montserrat", sans-serif;
}

</style>