describe("filter", function () {
    it("The word not will be filtered from the sentence",function () {
            assert.equal("This house is not nice!".filter('not'),"This house is  nice!");
        });

        it("The words not and boring will be filtered from the sentence",function () {
            assert.equal("WAP is not a good course. It is boring as well!".filter(['not','boring']),"WAP is  a good course. It is  as well!");
        });
});



describe("bubbleSort", function () {
    it("Returns the bubble sorted array",
        function () {
            assert.equal([6,4,0, 3,-2,1].bubbleSort().toString(),  [-2, 0, 1, 3, 4, 6].toString());
        });
});




describe("Teacher", function () {
    it("Returns the teacher name and the course he is teaching",
        function () {
            let teacherwap = new Teacher();
            teacherwap.initialize("Prof Michael Zijlstra", 40);
            assert.equal(teacherwap.teach("WAP"),  `${teacherwap.name} is now teaching WAP`);
        });
});

