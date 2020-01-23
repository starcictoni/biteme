export default {
    authenticated: false,
    verified: false,
    username: "",
    email: "",
    drawer: false,
    photo1: null,
    photo: null,
    imageData: null,
    firstname: "",
    lastname: "",
    adresa: "",
    newPassword: "",
    show1: false,
    show2: false,
    rules: [{
    velicina: value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    required: value => !!value || 'Nužno je unijeti.',
    password: value => {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      console.log("Usao je u rules");
      return (
        pattern.test(value) || 
        "Minimalno 8 znakova, 1 veliko slovo, 1 broj i 1 poseban znak"
      );
    },
  }]
}

