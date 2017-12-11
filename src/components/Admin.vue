<template>
  <div id="container">
    <h3>Administrator Portal</h3>
    
    <!--Admin Login-->
    <div v-if="!this.authenticated">
      <input type="text" placeholder="User Name" v-model="username"/>
      <br>
      <input type="password" placeholder="Password" v-model="password"/>
      <br>
      <button @click="Login" >Authenticate</button>
    </div>
    <!--Admin Display-->
    <div v-else>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone #</th>
        <th>Company</th>
        <th>Office Visit</th>
        <th>Escourt</th>
      </tr>
      <!-- only loop through x at a time, then request more, from most recent -->
      <tr v-for="user in users">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.company}}</td>
        <td>{{user.officeVisit}}</td>
        <td>{{user.escortName != null ? user.escortName : 'n/a'}}</td>

      </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      authenticated: false,
      username: '',
      password: '',
      msg: 'Sign in here!',
      users: [],
    }
  },
  methods: {
    Login()
    {
      alert('Admin log in attempt');
      this.$http.post('http://localhost:4000/api/adminAuth', {
        username: this.username,
        password: this.password
      }).then((data) => {

        console.log(data.body.auth);
        if(data.body.auth == 'true')
        {
          this.authenticated = true;
        }
        

      });

      this.username = '';
      this.password = '';
      
      //set timeout to logot after a certain time? - this.authenticated=false;
    }
  },
  mounted()
  {
//may want to add this after admin has signed in?
    //get the signed in users
    this.$http.get('http://localhost:4000/api/admin')
        .then((data) => {
          this.users = data.body;

          //can slice the array and display in pages?

        })
  }
 
}
</script>

<style scoped>
table, td, th {
  border: 1px solid black;
  padding: 1em;
}
table {
  border-collapse: collapse;
  margin: auto;
}
input{
  display: inline-block;
  font-size: 1.2em;
  margin-bottom: 10px;
}
</style>
