export default function numberConvert(number){
    if(number >= Math.pow(10,90)){
        number = (number/Math.pow(10,90)).toFixed() + 'AZ'

    }
    else if(number >= Math.pow(10,87)){
        number = (number/Math.pow(10,87)).toFixed() + 'AY'

    }
    else if(number >= Math.pow(10,84)){
        number = (number/Math.pow(10,84)).toFixed() + 'AX'

    }
    else if(number >= Math.pow(10,81)){
        number = (number/Math.pow(10,81)).toFixed() + 'AW'

    }
    else if(number >= Math.pow(10,78)){
        number = (number/Math.pow(10,78)).toFixed() + 'AV'

    }
    else if(number >= Math.pow(10,75)){
        number = (number/Math.pow(10,75)).toFixed() + 'AU'

    }
    else if(number >= Math.pow(10,72)){
        number = (number/Math.pow(10,72)).toFixed() + 'AT'

    }
    else if(number >= Math.pow(10,69)){
        number = (number/Math.pow(10,69)).toFixed() + 'AS'

    }
    else if(number >= Math.pow(10,66)){
        number = (number/Math.pow(10,66)).toFixed() + 'AR'

    }
    else if(number >= Math.pow(10,63)){
        number = (number/Math.pow(10,63)).toFixed() + 'AQ'

    }
    else if(number >= Math.pow(10,60)){
        number = (number/Math.pow(10,60)).toFixed() + 'AP'

    }
    else if(number >= Math.pow(10,57)){
        number = (number/Math.pow(10,57)).toFixed() + 'AO'

    }
    else if(number >= Math.pow(10,54)){
        number = (number/Math.pow(10,54)).toFixed() + 'AN'

    }
    else if(number >= Math.pow(10,51)){
        number = (number/Math.pow(10,51)).toFixed() + 'AM'

    }
    else if(number >= Math.pow(10,48)){
        number = (number/Math.pow(10,48)).toFixed() + 'AL'

    }
    else if(number >= Math.pow(10,45)){
        number = (number/Math.pow(10,45)).toFixed() + 'AK'

    }
    else if(number >= Math.pow(10,42)){
        number = (number/Math.pow(10,42)).toFixed() + 'AJ'

    }
    else if(number >= Math.pow(10,39)){
        number = (number/Math.pow(10,39)).toFixed() + 'AI'

    }
    else if(number >= Math.pow(10,36)){
        number = (number/Math.pow(10,36)).toFixed() + 'AH'

    }
    else if(number >= Math.pow(10,33)){
        number = (number/Math.pow(10,33)).toFixed() + 'AG'

    }
    else if(number >= Math.pow(10,30)){
        number = (number/Math.pow(10,30)).toFixed() + 'AF'

    }
    else if(number >= Math.pow(10,27)){
        number = (number/Math.pow(10,27)).toFixed() + 'AE'

    }
    else if(number >= Math.pow(10,24)){
        number = (number/Math.pow(10,24)).toFixed() + 'AD'

    }
    else if(number >= Math.pow(10,21)){
        number = (number/Math.pow(10,21)).toFixed() + 'AC'

    }
    else if(number >= Math.pow(10,18)){
        number = (number/Math.pow(10,18)).toFixed() + 'AB'
    }
    else if(number >= Math.pow(10,15)){
        number = (number/Math.pow(10,15)).toFixed() + 'AA'

    }
    else if(number >= Math.pow(10,12)){
        number = (number/Math.pow(10,12)).toFixed() + 'T'

    }
    else if(number >= Math.pow(10,9)){
        number = (number/Math.pow(10,9)).toFixed() + 'B'

    }else if(number >= Math.pow(10,6)){
        number = (number/Math.pow(10,6)).toFixed() + 'M'

    }else if(number >= Math.pow(10,3)){   
        number = (number/Math.pow(10,3)).toFixed() + 'K'   

    }
    return number
}