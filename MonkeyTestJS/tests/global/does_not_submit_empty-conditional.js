registerTest ('Form will not validate if any conditional required fields are empty', {
    setup: function() {
        this.inputFields = this.workspace.document.getElementById("productDetails").getElementsByTagName("input");
        this.querySelect = this.workspace.document.getElementById("enquiryType");
    },
    load : function() {

        this
        .test('Are empty conditional fields invalid on submit?',function($) {
            if (this.querySelect == "productComplaint") {
                var testCounter = 0;
                for (var i = 0; i < this.inputFields.length; i++ ) {
                    if ( this.inputFields[i].hasAttribute('required') && this.inputFields[i].value == "" ) {
                        // If any of the empty, required fields are valid...
                        if ( this.inputFields[i].checkValidity() == true ) {
                            testCounter++;
                        }
                    }
                }
            }
            notEqual(testCounter,0,'None of the required fields are valid if empty');
        });
    }
});

