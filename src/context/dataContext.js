import React,{useState,createContext} from 'react'

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

    function BuyPickaxeUpgrade(price, vezes = 0){
        switch (times) {
            case '1x':
                setClickDamage( clickDamage * 2)
                break
            case '10x':
                let tot = 0
                let newValue = clickDamage
                for (let i = 0; i < 10; i++) {
                    tot += newValue
                    newValue = Number((newValue * 2).toFixed(0))
                }
                setClickDamage(tot)
                break
            case '100x':
                let total = 0
                let newVal = clickDamage
                for (let i = 0; i < 100; i++) {
                    total += newVal
                    newVal = Number((newVal * 2).toFixed(0))
                }
                setClickDamage(total)
                break
            case 'max':
                let totally = 0
                let newDamage = clickDamage
                for (let i = 0; i < vezes; i++) {
                    totally += newDamage
                    newDamage = Number((newDamage * 1.2).toFixed(0))
                }
                setClickDamage(totally)
                break
        }
        setCoins(coins - price)
    }

    return(
        <Context.Provider value={{times, coins, hp, life, stage,diamonds, clickDamage, damagePerSecond, Click, Times, BuyPickaxeUpgrade}}>
            {children}
        </Context.Provider>
    )
}