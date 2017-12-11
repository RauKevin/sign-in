<template>
  <div id="container">
    <h3>{{msg}} </h3>
    <div v-show="!signedIn">
      <input type="text" placeholder="Name" v-model="user.name"/>
      <br>
      <input type="email" placeholder="Email" v-model="user.email"/>
      <br>
      <input type="tel" placeholder="Phone Number xxx-xxx-xxxx" v-model="user.phone" required
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
      <br>
      <input type="text" placeholder="Company (optional)" v-model="user.company"/>
      <br>
      <input type="checkbox" value="office" v-model="user.officeVisit" />
      <label> Official visit: </label>
      <br>
      <input type="checkbox" value="false" v-model="escort" />
      <label> Escort required: </label>
      <br>
      <input v-if="escort" type="text" placeholder="Escourt Name" v-model="user.escortName"/>
      <br>
      <button @click="Signin" >Sign in</button>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'sign-in',
  data () {
    return {
      msg: 'Sign in here!',
      signedIn: false,
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

      //insert user data validation here
      if(this.validate())
      {
        alert("the data is good!");
      }
      /*      
      this.$http.post('http://localhost:4000/api/signin', this.user)
        .then((data) => {
          console.log(data.body);
          if(data.body.status == 'failure')
          {
            this.msg = "Welcome " +data.body+", Sign in successful!";
            console.log('Error');
            this.msg = data.body.err;
          }
          else{
            this.msg = "Welcome " +data.body+", Sign in successful!";
            alert("Hello "+this.user.name + ", Sign in confirmed");
            // this.$router.push('/');
          }
        });
      */

      //clear form data after sign in  
      //this.refresh();
      this.signedIn = true;
      this.msg = "Welcome " +this.user.name+", Sign in successful!";
      setTimeout(this.refresh, 4000);
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

      this.msg = 'Sign in here!';
      this.signedIn = false;
    },
    validate()
    {
      let valid = true; //can also make an error message

      //check name
      if(this.user.name.length < 2 || this.user.name.length > 32)
      {
        valid = false;
      }
      else{
        //check for invalid characters
        valid = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.user.name);
      }

      //check email
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      valid = re.test(this.user.email);

      //check phone - checked in form field

      //check escourt
      if(this.escort)
      {
        if(this.user.escourtName.length < 2 || this.user.escourtName.length > 32)
        {
          valid = false;
        }
        else{
          //check for invalid characters
          valid = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.user.escourtName);
        }
      }
      else{
        this.user.escourtName = '';
      }
      

      return valid;
    }

  }
}
</script>

<style scoped>
#container {
  border: 3px solid #f1f1f1;
  background-color: #f1f1f1;
}
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 50%;
}

button:hover {
    opacity: 0.8;
}
input{
  display: inline-block;
  font-size: 1.2em;
  margin-bottom: 10px;
}

</style>
