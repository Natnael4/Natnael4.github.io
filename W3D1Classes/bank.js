
class Bank {
    constructor() {
      this._nextNumber = 10;
      this._accounts = [];
    }

    addAccount() {
      let acc = new Account(this._nextNumber);
      this._accounts.push(acc);
      this._nextNumber += 1;
      return acc.getNumber();
    }
  
    addSavingsAccount(interest) {
      let acc = new SavingsAccount(this._nextNumber, interest);
      this._accounts.push(acc);
      this._nextNumber += 1;
      acc.deposit(255);
      return acc.getNumber();
    }
  
    addCheckingAccount(overdraft) {
      let acc = new CheckingAccount(this._nextNumber, overdraft);
      this._accounts.push(acc);
      this._nextNumber += 1;
      return acc.getNumber();
    }
  
    closeAccount(number) {
      for (let accIndex in this._accounts) {
        if (this._accounts[accIndex].getNumber() === number) {
          this._accounts.splice(accIndex, 1);
        }
      }
    }
  
    accountReport() {
      for (let accIndex in this._accounts) {
        console.log(this._accounts[accIndex].toString());
      }
    }
  
    endOfMonth() {
      for (let accIndex in this._accounts) {
        this._accounts[accIndex].endOfMonth();
      }
    }
  }

