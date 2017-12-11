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
      <input type="checkbox" value="false" v-model="escort" />
      <label> Escort required: </label>
      <input v-if="escort" type="text" placeholder="Escourt Name" v-model="user.escortName"/>
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
      escort: false,
      user: {
        name: '',
        email: '',
        phone: '',
        company: '',
        officeVisit: false,
        escortName: ''
      }
    }
  },
  methods: {
    Signin()
    {
      console.log(this.user);
            
      this.$http.post('http://localhost:4000/api/signin', this.user)
        .then((data) => {
          console.log(data.body);
          if(data.body.status == 'failure')
          {
            this.msg = "Welcome " +data.body.email+", Registration successful!";
            console.log('Error');
            this.msg = data.body.err;
          }
          else{
            this.msg = "Welcome " +data.body.email+", Registration successful!";
            alert("Hello "+this.user.name + ", Sign in confirmed");
            // this.$router.push('/');
          }
        });

      //clear form data after sign in  
      this.refresh(); //make this async to refresh after a set timeout
    },
    refresh()
    {
      this.user.name = '';
      this.user.email = '';
      this.user.phone = '';
      this.user.company = '';
      this.user.officeVisit = false;
      this.user.escort = false;
      this.user.escourtName = '';
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
