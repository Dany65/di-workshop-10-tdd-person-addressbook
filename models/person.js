class Person {
    constructor(firstName, sirName, dob){
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.toLowerCase().slice(1);
        this.sirName = sirName;
        this.dob = dob;
        this.emails = []
    }

    fullName() {
        return this.firstName + ' ' + this.sirName
    }

    addEmail(email){
        this.emails.push(email);
    }
}

module.exports = Person;