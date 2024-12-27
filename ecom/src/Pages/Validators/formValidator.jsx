export default function formValidator(e) {
    let { name, value } = e.target
    switch (name) {
        case "name":
        case "username":
        case "phone":
        case "password":
            if (!value || value === '')
                return name + " Field is Mendatory"
            else if (value.length < 3 || value.length > 50)
                return name + " Field Length must be within 3-50"
            else
                return ""
        case "email":
            if (!value || value === '')
                return name + " Field is Mendatory"
            else if (value.length < 13 || value.length > 100)
                return name + " Field Length must be within 13-100"
            else
                return ""

        case "message":
        case "decription":
            if (!value || value === '')
                return name + " Field is Mendatory"
            else if (value.length < 3 || value.length > 5000)
                return name + " Field Length must be within 3-5000"
            else
                return ""
    }
    
}
