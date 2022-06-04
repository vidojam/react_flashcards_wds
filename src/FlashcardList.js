import React from 'react'
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }) {
//above the same as... 
//export default function FlashcardList({props}) { props.flashcards    
  return (
    <div className="card-grid">
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
    </div>
  )
}
