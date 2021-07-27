

describe("sum", function () {
    describe("Addition of numbers in an array", function() {
        it("takes array of numbers, and returns the sum of all the numbers",
            function () {
                assert.equal(10, sum([1, 2, 3, 4]));
            });
    });

});


describe("multiply", function () {
    describe("Multiplication of numbers in an array", function() {
        it("takes array of numbers, and returns the multiplication of all the numbers",
            function () {
                assert.equal(24, multiply([1, 2, 3, 4]));
            });
    });

});



describe("reverse", function () {
    it("takes a string, and returns the reverse of the string",
        function () {
            assert.equal("Natnael", reverse("leantaN"));
        });
});


describe("filterLongWords", function () {
    it("takes array of string, and a number, and returns words whose length are greater than the given number",
        function () {
            assert.equal('Natnael', filterLongWords(["Natnael", "John", "Robert"], 6));
        });
});