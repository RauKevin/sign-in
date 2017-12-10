<template>
  <div id="container">
    <h3>{{msg}} </h3>

      <input type="text" placeholder="Name" v-model="user.name"/>
      <br>
      <input type="email" placeholder="Email" v-model="user.email"/>
      <br>
      <input type="tel" placeholder="Telephone" v-model="user.phone"/>
      <br>
      <input type="text" placeholder="Company" v-model="user.company"/>
      <br>
      <input type="checkbox" value="office" v-model="user.officeVisit" />
      <label> Official visit: </label>
      <br>
      <input type="checkbox" value="false" v-model="user.escort" />
      <label> Escort required: </label>
      <input v-if="user.escort" type="text" placeholder="Escourt Name" v-model="user.escourtName"/>
      <br>
      <button @click="Signin" >Sign in</button>

    <br>
  </div>
</template>

<script>
export default {
  name: 'sign-in',
  data () {
    return {
      msg: 'Sign in here!',
      user: {
        name: '',
        email: '',
        phone: '',
        company: '',
        officeVisit: false,
        escort: false,
        escourtName: ''
      }
    }
  },
  methods: {
    Signin()
    {
      console.log(this.user);
      alert("Hello "+this.user.name + ", Sign in confirmed");
      location.reload();
    },
    refresh()
    {
      this.user.name = '';
      this.user.email = '';
      this.user.phone = '';
      this.user.company = '';
      this.user.officeVisit = false;
      this.user.escort = false;

    }

  }
}
</script>

<style scoped>
#container {
  border: 3px solid #f1f1f1;
}
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}
input{
  display: inline-block;
  font-size: 1.5em;
}
</style>
