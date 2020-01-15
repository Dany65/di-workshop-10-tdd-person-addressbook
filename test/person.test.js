const chai = require('chai')
const expect = chai.expect
const Person = require('../models/person.js')

describe('Person', ()=>{
    it('should initialise propery', ()=>{
        var person = new Person('Joe', 'Bloggs', '1 Jan 1998')
        expect(person.firstName).to.equal('Joe')
        expect(person.sirName).to.equal('Bloggs')
        expect(person.dob).to.equal('1 Jan 1998')
        expect(person.emails).to.deep.equal([])
    })

    it('should format first name to stat with capital and the lower case', ()=>{
        var person = new Person('beN', 'Bloggs', '1 Jan 1998')
        expect(person.firstName).to.equal('Ben')
    })

    it('should return full name', ()=>{
        var person = new Person('Gregory', 'Bagins', '1 Jan 1998')
        expect(person.fullName()).to.equal('Gregory Bagins')
    })

    it('should return emails', ()=>{
        var person = new Person('Jon', 'Bagins', '1 Jan 1998')
        person.addEmail('jon@ig.com')
        person.addEmail('jon2@ig.com')

        expect(person.emails).to.deep.equal(['jon@ig.com', 'jon2@ig.com'])
    })
})

// Your Person test goes here!