<template>
  <nav>
    <ul class="list">
      
    <router-link to="/">HOME</router-link> |
    <router-link to="/users">USERS</router-link> |

    <router-link to="/Posts">POSTS</router-link>
  </ul>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px;
  background-color: #000000cf;
  a {
    font-weight: bold;
    color: #000000cf;
    text-decoration: none;
    padding: 20px 20px;
    background-color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
   a:hover{
    color: #42b983;
   }
  }
}
.list{
  margin-top:15px;
}
</style>
