import { useEffect, useState } from "react"

const useSeller = email =>{
    const[isSeller,setIsSeller]= useState('')
    useEffect(()=>{
        if(email){
            fetch(`https://hello-dot-com-server.vercel.app/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setIsSeller(data.isSeller)
            })
        }
    },[email])
    return isSeller;
}
export default useSeller;