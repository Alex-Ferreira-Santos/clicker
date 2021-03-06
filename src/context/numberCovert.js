export default function numberCovert(number){
    if(number >= 1000){   
        number = number/1000 + 'K'   
    }
    else if(number >= 1000){   
        number = number/1000 + 'K'   
    }
    else if(number >= 1000){   
        number = number/1000 + 'K'   
    }
    else if(number >= 1000){   
        number = number/1000 + 'K'   
    }
    else if(number >= 1000){   
        number = number/1000 + 'K'   
    }
    else if(number >= 1000){   
        number = number/1000 + 'K'   
    }
    else if(number >= 1000){   
        number = number/1000 + 'K'   
    }
    else if(number >= 1000){   
        number = number/1000 + 'K'   
    }
    else if(number >= 1000){   
        number = number/1000 + 'K' 

    }else if(number >= 1000000){
        number = (number/10000000).toFixed() + 'M'

    }else if(number >= 1000){   
        number = (number/1000).toFixed() + 'K'   

    }
    return number
}