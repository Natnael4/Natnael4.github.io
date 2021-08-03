"use strict";

/**
 * A Savings Account class
 * 
 */
class SavingsAccount extends Account {
    /**
     * Constructor for creating a new SavingsAccount object
     * 
     */
    constructor(number, interest) {
        super(number);
        this._interest = interest;

    }

 
    getInterest() {
        return this._interest;
    }

   
    setInterest(interest) {
         this._interest=interest;
    }


    addInterest() {
      var int = (super.getBalance() * this.getInterest()) / 100;
      super.deposit(int);
    }

 
    toString() {
        return "SavingsAccount " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

    endOfMonth() {
          console.log(
            "Interest added SavingsAccount : " + this._number + " balance: " + this._balance + " interest: " + this._interest );
        }

}