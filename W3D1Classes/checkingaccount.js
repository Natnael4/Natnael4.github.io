"use strict";

/**
 * A Checking Account class
 * 
 */
class CheckingAccount extends Account {
    /**
     * Constructor for creating a new CheckingAccount object
     * 
     */
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;

    }

 
    getOverdraft() {
        return this._overdraft;
    }

   
    setOverdraft(overdraft) {
         this._overdraft = overdraft;
    }


    withdraw(amount) {
        if (amount > this._balance) {
          let over = this._balance - amount;
          if (over > this._overdraft) {
            throw new RangeError("Overdraft amount is exceeded");
          } else {
            this._balance -= amount;
          }
        }
      }

 
    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance + ": Overdraft " + this._overdraft;
    }


    endOfMonth() {
        if (this._balance <= 0) {
          console.log(
            "Warning, low balance checking account: " + this._number + " balance: " + this._balance + " overdraft limit: " + 
            this._overdraft);
        }
}
}