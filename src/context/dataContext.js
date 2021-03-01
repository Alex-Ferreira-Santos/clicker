import React,{useState,createContext} from 'react'

export const Context = createContext({})

export function DataContext({children}){
    const [times,setTimes] = useState('1x') 
    const [coins,setCoins] = useState(0)
    const [hp, setHp] = useState(10)
    const [life, setLife] = useState(100)
    const [stage, setStage] = useState(1)

    function Click(){
        setCoins(coins + 1)
        setLife(life - 10)
                    
        setHp(hp - 1)
        if(hp === 0){
            setHp(10)
        }
        if(life === 0){
            setLife(100)
            setStage(stage + 1)
            if(stage === 10){
                setStage(1)
            }
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

    return(
        <Context.Provider value={{times, coins, hp, life, stage, Click, Times}}>
            {children}
        </Context.Provider>
    )
}