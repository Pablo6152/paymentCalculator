let value = 0

function counter(){
    if(value < 6){
        value++
    } else{value = 0}

    console.log(value)
}

export {counter}