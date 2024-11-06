export default function imageValidator(e) {
    let { files } = e.target
    if(files.length === 0)
        return "Pic is Mendatory"
    else if(files.length === 1) {
        console.log(files[0])
        if(files[0].size > 1048576)
            return "Pic size is more then 1 MB"
        else if(files[0].type==='image/jpg' || files[0].type==='image/jpeg' || files[0].type==='image/png' || files[0].type==='image/gif')
            return ""
        else
        return "Please select Only : jpg, jpeg, png or gif image "        
    }
    return (
        <div>formValidator</div>
    )
}
