export default function formValidator(e) {
    let { name, value } = e.target
    switch (name) {
        case "name":
            if (!value || value === '')
                return name + " Field is Mendatory"
            else if (value.length < 3 || value.length > 50)
                return name + " Field Length must be within 3-50"
            else
                return ""
    }
    return (
        <div>formValidator</div>
    )
}
