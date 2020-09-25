export const regularExpData = [



    {
        name: "name",
        regExp: /^[a-zA-Z ]{3,15}$/,

        message: "Enter valid name"

    },
    {
        name: "phoneNo",
        regExp: /^\d{10}$/,
        "message": "Invalid Phone Number"
    },
    {
        name: "email",
        regExp: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
        message: "Invalid Email Address"
    },

    {
        name: "pincode",
        regExp: /^\d{6}$/,
        "message": "Invalid Pincode"
    },
    // {
    //     name: "dob",
    //     regExp: /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/i,
    //     message: "Invalid DOB"
    // },

    {
        name: "password",
        regExp: /^[0-9a-zA-Z@#]{6,30}$/i,
        "message": "password accepts only alphabets and number of range 8-30 length"
    },
    {
        name: "confirmpassword",
        regExp: /^[0-9a-zA-Z@#]{6,30}$/i,
        "message": "Passwords don't match"
    },
    {
        name: "otp",
        regExp: /^[0-9]{4}$/i,
        "message": "4 digits otp required"
    },

    {
        name: "password",
        regExp: /^.{5,15}$/i,
        "message": "password required with minimum 5 characters"
    },
    // {
    //     name: "isallusersdisabled",
    //     regExp: /^(true|false)$/,
    //     "message": "all users disabled/enabled selection required"
    // },
    {
        name: 'gender',
        regExp: /^male$|^female$/,
        "message": "Allowed gender : male/female"
    },
    {
        name: 'afftype',
        regExp: /^type1$/,
        message: "Allowed Affiliation Type : type1"
        // regExp: /^type1$|^custom$/,
        //"message": "Allowed Affiliation Type : type1/custom"
    },


]