
export const setAuthToken = user =>{
    const currentUser = {
        email:user?.email,
        displayName:user?.displayName,
        role:user?.role
    }
    // Save user info in database 
    fetch(`https://hello-dot-com-server.vercel.app/user/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        // save token in localstorage
        localStorage.setItem('hello-token',data.token)
    })
}