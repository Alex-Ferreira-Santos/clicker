import React,{useState,createContext,useEffect} from 'react'

export const Context = createContext({})

export function DataContext({children}){
    const [times,setTimes] = useState('1x') 
    const [coins,setCoins] = useState(0)
    const [hp, setHp] = useState(10)
    const [defaultHp, setDefaultHp] = useState(10)
    const [life, setLife] = useState(100)
    const [stage, setStage] = useState(1)
    const [diamonds, setDiamonds] = useState(0)
    const [clickDamage, setClickDamage] = useState(1)
    const [damagePerSecond, setDamagePerSecond] = useState(0)

    /*
    useEffect(()=>{
        setLifePercent(hp)
    },[clickDamage])
    */

    function Click(){
        setCoins(coins + 1)
        let letHp = hp - clickDamage
        let letLife = life - (clickDamage * 10)
        
        if(letLife <= 0 || letHp <= 0){
            setLife(100)
            setHp(defaultHp)
            setStage(stage + 1)
            if(stage === 10){
                setStage(1)
                let newHp = (defaultHp * 2.5).toFixed(0)
                setDefaultHp(newHp)
                setHp(newHp)
            }
        }else{
            setLife(letLife)
            setHp(letHp)
        }
    }

    function Times(){
        switch(times){
            case '1x':
                setTimes('10x')
                break
            case '10x':
                setTimes('100x')
                break
            case '100x':
                setTimes('max')
                break
            case 'max':
                setTimes('1x')
                break
        }
    }

    function BuyPickaxeUpgrade(price){
        if(coins < price){
            return false
        }else{
            setClickDamage( clickDamage * 2)
            return true
        }
    }

    return(
        <Context.Provider value={{times, coins, hp, life, stage,diamonds, clickDamage, damagePerSecond, Click, Times, BuyPickaxeUpgrade}}>
            {children}
        </Context.Provider>
    )
}