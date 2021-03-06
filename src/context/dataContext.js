import React,{useState,createContext,useEffect} from 'react'

export const Context = createContext({})

export function DataContext({children}){
    const [times,setTimes] = useState('1x') 
    const [coins,setCoins] = useState(0)
    const [defaultCoins,setDefaultCoins] = useState(1)
    const [hp, setHp] = useState(10)
    const [defaultHp, setDefaultHp] = useState(10)
    const [life, setLife] = useState(100)
    const [stage, setStage] = useState(1)
    const [diamonds, setDiamonds] = useState(0)
    const [clickDamage, setClickDamage] = useState(1)
    const [damagePerSecond, setDamagePerSecond] = useState(0)
    
    useEffect(()=>{
        if(damagePerSecond !== 0){
            setInterval(()=>{
                setHp(hp - damagePerSecond)
            },100)
        }
    },[damagePerSecond])

    function Click(){
        setCoins(coins + defaultCoins)
        let letHp = hp - clickDamage
        let letLife = (letHp * life) / hp
        if(letLife <= 0 || letHp <= 0){
            setLife(100)
            setHp(defaultHp)
            setStage(stage + 1)
            if(stage === 10){
                setStage(1)
                setDefaultCoins(defaultCoins + 1)
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

    function MultiplyNumber(loopTimes, valueTimes,item){
        let tot = 0
        let newValue = item
        for (let i = 0; i < loopTimes; i++) {
            tot += newValue
            newValue = Number((newValue * valueTimes).toFixed(0))
        }
        return tot
    }

    function BuyPickaxeUpgrade(price, vezes = 0){
        switch (times) {
            case '1x':
                setClickDamage( clickDamage * 2)
                break
            case '10x':  
                setClickDamage(MultiplyNumber(10,2,clickDamage))
                break
            case '100x':
                setClickDamage(MultiplyNumber(100,2,clickDamage))
                break
            case 'max':
                setClickDamage(MultiplyNumber(vezes,2,clickDamage))
                break
        }
        setCoins(coins - price)
    }

    function BuyDamagePerSecondUpgrade(price,vezes = 0){
        let newDamageValue
        if(damagePerSecond === 0){
            newDamageValue = 1
        }else{
            newDamageValue = damagePerSecond
        }
        switch (times) {
            case '1x':
                setDamagePerSecond( newDamageValue * 2)
                break
            case '10x':  
                setDamagePerSecond(MultiplyNumber(10,2,newDamageValue))
                break
            case '100x':
                setDamagePerSecond(MultiplyNumber(100,2,newDamageValue))
                break
            case 'max':
                setDamagePerSecond(MultiplyNumber(vezes,2,newDamageValue))
                break
        }
        setCoins(coins - price)
    }

    return(
        <Context.Provider value={{times, coins, hp, life, stage,diamonds, clickDamage, damagePerSecond, Click, Times, BuyPickaxeUpgrade, MultiplyNumber, BuyDamagePerSecondUpgrade}}>
            {children}
        </Context.Provider>
    )
}