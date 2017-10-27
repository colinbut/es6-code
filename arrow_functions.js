class Contact {
  constructor(name, email, button) {
    this.name = name;
    this.email = email;
    button.onClick = (event) => {
      sendEmail(this.email);
    }
  }

  sendEmail() {
    //
  }

}

var oneToFive = [1,2,3,4,5];

var twoToTen = oneToFive.map((n) => n * 2);

console.log(twoToTen);
