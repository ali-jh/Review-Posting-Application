import { Box } from '@chakra-ui/react'
import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <Box className='notes-list '>
        {notes.map((note)=>(
            <Note
                id={note.id}
                text={note.text}
                date={note.date}
                handleDeleteNote={handleDeleteNote}
            />
        ))}
        <AddNote handleAddNote={handleAddNote}/>
    </Box>
  )
}

export default NoteList