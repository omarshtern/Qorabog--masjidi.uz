import React, { useEffect, useState } from 'react'
import { people } from './GroupData'

function Group() {

    const [people, setPeople] = useState(people)
    const [index, setIndex] = useState(0)


    useEffect(() => {
        const lastIndex = people.length
    }, [index, people])
    return (
        <div>
            
        </div>
    )
}

export default Group
