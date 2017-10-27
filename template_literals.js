class Contact {
  constructor(name, email, button) {
    this.name = name;
    this.email = email;
  }

  toEmailClientString() {
    return `${this.name} <${this.email}>`;
  }
}
