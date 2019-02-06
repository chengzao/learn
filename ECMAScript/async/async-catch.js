{
    let last;
async function throwError() {  
    try{  
       await Promise.reject('error');    
       last = await '没有执行'; 
    }catch(error){
        console.log('has Error stop');
    }
}
throwError().then(success => console.log('成功4', last))
            .catch(error => console.log('失败4',last))
}