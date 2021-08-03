(function() {
    const account = new Account(101010);
    describe("Account class testing", function() {
      context("add balance function test", function() {
        account.deposit(400);
        account.deposit(1);
        it("deposit 400 and getBalance", function() {
          assert.equal(account.getBalance(), 301);
        });
        it("deposited 1 amount of money", function() {
          assert.equal(account.getBalance(), 301);
        });
  
        it("toString() method test", function() {
          assert.equal(
            account.toString(),
            "Account " + account._number + ": balance " + account._balance
          );
        });
      });
    });
  
    describe("Withdrawal test", function() {
      account.withdraw(100);
      context("Withdrawing 100 from account", function() {
        it("checking", function() {
          assert.equal(account.getBalance(), 301);
        });
      });
    });
  
    //   Testing SavingsAccount class
  
    describe("Savings account test", function() {
      context("addInterest function test", function() {
        const svAccount = new SavingsAccount(202020, 3);
        svAccount.deposit(1000);
  
        it("getBalance() function test", function() {
          assert.equal(svAccount.getBalance(), "1000");
        });
  
        it("getNumber() function test", function() {
          assert.equal(svAccount.getNumber(), "202020");
        });
  
        it("Checking toString() method", function() {
          assert.equal( svAccount.toString(), "SavingsAccount " + svAccount.getNumber() + ": balance " +
              svAccount.getBalance() + ": interest " + svAccount.getInterest());
        });
      });
    });
    const chAccount = new CheckingAccount(303030, 50);
    chAccount._balance = 100;
    describe("Checking account testing section", function() {
      context(
        "Creating overdraft account with acc number of 303030 and overdraft limit 50",
        function() {
          it("Checking toString() method", function() {
            assert.equal(chAccount.toString(), "CheckingAccount " + chAccount.getNumber() + ": balance " + chAccount.getBalance() +
              ": Overdraft " + chAccount.getOverdraft());
          });
        }
      );
  
      context("Testing withdraw function", function() {
        it("withdrawing 105 money", function() {
          chAccount.withdraw(105);
          assert.equal(chAccount._balance, "-5");
        });
      });
    });
  
    let bank = new Bank();
  
    bank.addSavingsAccount(400);
    bank.addCheckingAccount(500);
    // bank.accountReport();
    // bank.closeAccount(1000);
    bank.accountReport();
    // bank.endOfMonth();
  
    describe("Implementing Bank class", function() {
      context("Creating savings account and checking", function() {
        it("bank.addSavingsAccount()", function() {
          assert.equal(bank.addSavingsAccount(20), "12");
        });
      });
  
      context("Creating checking account and checking", function() {
        it("bank.addCheckingAccount()", function() {
          assert.equal(bank.addCheckingAccount(30), "13");
        });
      });
  
      context("Account report function is being tested", function() {
        it("accountReport function is being called", function() {
          bank.accountReport();
        });
      });
    });
  
    describe("Checking endOfMonth function", function() {
      context("calling endOfMonth function", function() {
        it("result is string", function() {
          bank.endOfMonth();
        });
      });
    });
  })();