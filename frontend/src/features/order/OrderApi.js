

export function createOrder(order){


    return new Promise(async (resolve,reject)=>{
        const response=await fetch('http://localhost:8080/orders',{
            method:'POST',
            body:JSON.stringify(order),
            headers:{'content-type':'application/json'}
        })
        const data=response.json()
        resolve({data})
    })
}