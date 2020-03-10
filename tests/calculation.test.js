const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../calculation')

describe('Calculation', () => {
  describe('strictEquals', () => {
    it('returns true if values are same type and same value', () => {

      //create test data
      const checkNumberOne = 5
      const checkNumberTwo = 5

      //call the function with the test data
      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      //make assertions about what should be true
      expect(checkResult).to.equal(true)

      it('returns false if values are same type and different value', () => {

        //create test data
        const checkNumberOne = 5
        const checkNumberTwo = 10

        //call the function with the test data
        const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

        //make assertions about what should be true
        expect(checkResult).to.equal(false)

        it('returns false if values are different type and same value', () => {

          //create test data
          const checkNumberOne = 5
          const checkNumberTwo = '5'

          //call the function with the test data
          const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

          //make assertions about what should be true
          expect(checkResult).to.equal(false)

          it('returns false if values are different type and different value', () => {

            //create test data
            const checkNumberOne = 5
            const checkNumberTwo = '10'

            //call the function with the test data
            const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

            //make assertions about what should be true
            expect(checkResult).to.equal(false)

          })
        })
      })
    })
  })
})
