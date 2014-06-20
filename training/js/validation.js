$(document).ready(function() {

    $('#profileForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    }
                }
            },
            hcnumber: {
                message: 'The HC Number is not valid',
                validators: {
                    notEmpty: {
                        message: 'The HC Number is required and cannot be empty'
                    },
                    stringLength: {
                        min: 10,
                        max: 10,
                        message: 'The HC Number must be 10 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    },
                }
            },

            gp: {
                message: 'The GP + Practice is not valid',
                validators: {
                    notEmpty: {
                        message: 'The GP + Practice is required and cannot be empty'
                    },
                    
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    },
                }
            },
            
            birthday: {
                validators: {
                    notEmpty: {
                        message: 'The GP + Practice is required and cannot be empty'
                    },
                    date: {
                        format: 'YYYY/MM/DD',
                        message: 'The birthday is not valid'
                    }
                }
            },
            ward: {
                validators: {
                    notEmpty: {
                        message: 'The ward is required'
                    }
                }
            },
            rating: {
                validators: {
                    notEmpty: {
                        message: 'The rating is required'
                    }
                }
            },
            rate: {
                validators: {
                    notEmpty: {
                        message: 'The rating is required'
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'The GP + Practice is required and cannot be empty'
                    },
                    date: {
                        format: 'YYYY/MM/DD',
                        message: 'The date selected is not valid'
                    }
                }
            },
        }

    });



function validator()
{

function PrintTextareaContent(Comments){
document.getElementById("result").innerHTML = Comments
}

}
});



