import { useState, useEffect } from 'react'
import Card from '../../components/card/Card'
import { Wrapper } from './BoardStyles'
import Dog1 from '../../img/dog1.jpg'
import Dog2 from '../../img/dog2.jpg'
import Dog3 from '../../img/dog3.jpg'
import Dog4 from '../../img/dog4.jpg'
import Dog5 from '../../img/dog5.jpg'
import Dog6 from '../../img/dog6.jpg'
import Dog7 from '../../img/dog7.jpg'
import Dog8 from '../../img/dog8.jpg'
import Dog9 from '../../img/dog9.jpg'
import Dog10 from '../../img/dog10.jpg'
import Dog11 from '../../img/deg11.jpg'
import Dog12 from '../../img/dog12.jpg'
import Dog13 from '../../img/dog13.jpg'
import Dog14 from '../../img/dog14.png'

const Board: React.FC = () => {
    const [data, setData] = useState<{id: number, photo: any}[]>([
        {
            id: 1,
            photo: Dog1
        },
        {
            id: 2,
            photo: Dog2
        },
        {
            id: 3,
            photo: Dog3
        },

        {
            id: 4,
            photo: Dog4
        },
        {
            id: 5,
            photo: Dog5
        },
        {
            id: 6,
            photo: Dog6
        },
        {
            id: 7,
            photo: Dog7
        },
        {
            id:8,
            photo: Dog8
        },
        {
            id:9,
            photo: Dog9
        },
        {
            id:10,
            photo: Dog10
        },
        {
            id:11,
            photo: Dog11
        },
        {
            id:12,
            photo: Dog12
        },
        {
            id:13,
            photo: Dog13
        },
        {
            id:14,
            photo: Dog14
        },
    ])
    const [cards, setCards] = useState<{id: number, photo: any}[]>([])
    const [comparisonArray, setComparisonArray] = useState<{id: number, idx: number}[]>([])
    const [guessedCards, setGuessedCards] = useState<number[]>([])
    const [wrong, setWrong] = useState<boolean>(false)
    const [flippedCards, setFlippedCards] = useState<number>(0)

    useEffect(() => {
        if(data.length > 0) {
            let arrayOfDuplicates: {id: number, photo: any}[] = []
            data.forEach(obj => arrayOfDuplicates.push(obj, obj))
            const shuffled = shuffleCards(arrayOfDuplicates)
            setCards(shuffled)
        }
            
    }, [data])

    const shuffleCards = (array: {id: number, photo: any}[]) => {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }


    const handleProcessData = (id: number, idx: number) => {
        setFlippedCards(state => +state + 1)

        if(comparisonArray.length < 2) {
            let array = comparisonArray
            array.push({ id: id, idx: idx })
            setComparisonArray(array)
        }
        if(comparisonArray.length == 2) {
            handleCompareIDs(comparisonArray)
        }
    }

    const handleCompareIDs = (array: {id: number, idx: number}[]) => {
        const id1 = array[0].id        
        const id2 = array[1].id
        const idx1 = array[0].idx
        const idx2 = array[1].idx
        if(id1 === id2 && idx1 !== idx2)  {
            setComparisonArray([])
            setTimeout(() => {
                setGuessedCards(state => [ ...state, id1])
                setComparisonArray([])
                setFlippedCards(0)
            }, 1000)
        } else {
            setComparisonArray([])
            setTimeout(() => {
                setWrong(true)
                setComparisonArray([])
                setGuessedCards([])
                setFlippedCards(0)
            }, 1000)
            setWrong(false)
        }        
    }


    return (
        <Wrapper>
            <div className="table">

            {
                cards && cards.length > 0 && cards.map((card, idx) => {
                    return <Card key={idx} 
                                data={card} 
                                idx={idx} 
                                sendData={(id: number, idx: number) => handleProcessData(id, idx)} 
                                guessed={guessedCards}
                                wrong={wrong}
                                flipped={flippedCards}
                                />
                })
            }
         </div>
            <p></p>
        </Wrapper>
    )
}

export default Board