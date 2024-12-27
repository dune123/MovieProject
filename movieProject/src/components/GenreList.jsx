import React from 'react'

const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ]
const GenreList = ({setSelectGenre}) => {
  return (
    <div className='w-[70vw] p-10 bg-slate-100'>
        <h3 className='text-2xl font-bold mb-3'>Filter by Genre</h3>
        <div className='flex gap-6 flex-wrap'>
        {
            genres.map((item)=>(
                <button onClick={()=>setSelectGenre(item)} className='bg-slate-400 p-1 rounded-lg cursor-pointer'>{item}</button>
            ))
        }
        </div>
    </div>
  )
}

export default GenreList