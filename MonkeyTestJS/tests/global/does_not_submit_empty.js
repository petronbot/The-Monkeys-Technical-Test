registerTest ('Form will not validate if any required fields are empty', {
    setup: function() {
        this.inputFields = this.workspace.document.getElementsByTagName("input");
    },
    load : function() {
        this
        .test('Do we have any empty required fields?',function($) {

            var testCounter = 0;
            for (var i = 0; i < this.inputFields.length; i++ ) {
                if ( this.inputFields[i].hasAttribute('required') && this.inputFields[i].value == "" ) {
                    // If any of the empty, required fields are valid...
                    if ( this.inputFields[i].checkValidity() == true ) {
                        testCounter++;
                    }
                }
            }

            equal(testCounter,0,'None of the required fields are valid if empty');
        });
    }
});
