import { useState, useEffect } from 'react'
import './CardStyles.css'
import { Wrapper } from './CardStyles'

interface IProps {
    data: {id: number, photo: any},
    idx: number,
    sendData: (id: number, idx: number) => void,
    guessed: number[],
    wrong: boolean,
    flipped: number
}

const Card: React.FC<IProps> = ({ data,idx, sendData, guessed, wrong, flipped }) => {
    const [invisible, setInvisible] = useState<boolean>(false)
    const [rotate, setRotate] = useState<boolean>(false)

    useEffect(() => {
        if(guessed.length > 0) {
         guessed.forEach(id => {
             if(id === data.id) {
                 setInvisible(true)
             }
         })
        }
    }, [guessed])

    useEffect(() => {
        if(wrong) {
            setRotate(false)
        }
    }, [wrong])

    const handleCardClicked = () => {
        if(flipped < 2) {
            sendData(data.id, idx)
            setRotate(true)
            console.log('poslane')
        }
    }

    return (
        <Wrapper className="flip-card"  onClick={handleCardClicked} invisible={invisible} rotate={rotate}>
            <div className='flip-card-inner' style={ rotate ? { transform: 'rotateY(180deg)' } : { transform: 'rotateY(0deg)'}}>
                <div className='flip-card-front' />
                <div className='flip-card-back'>
                    <img src={data.photo} />
                </div>
            </div>
        </Wrapper>
    )
}

export default Card