
function spy (){
    return ("Something");
    
}

function receivesAFunction(callback){
  callback(spy)
}

function returnsANamedFunction(){
    return function fn(){}
}

function returnsAnAnonymousFunction(){
    return ()=>{}
}

