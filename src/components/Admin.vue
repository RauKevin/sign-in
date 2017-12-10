<template>
  <div id="container">
    <h3>Administrator Portal</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone #</th>
        <th>Company</th>
      </tr>
      <!-- only loop through x at a time, then request more, from most recent -->
      <tr v-for="user in users">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.company}}</td>

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
      users: [
        {
          name:'kevin',
          email: 'mcLovin69@gmail.com',
          phone: '123456789',
          company: 'Hustler'
        },
        {
          name:'chantal',
          email: 'itouchpenis@mail.com',
          phone: '123456789',
          company: 'i heart jews'
        }
      ]
    }
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
