<template>
  <div id="container">
    <h3>Administrator Portal</h3>
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
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      msg: 'Sign in here!',
      users: []
    }
  },
  mounted()
  {
    alert("Admin view!");
    //get the signed in users
    //get users
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
</style>
