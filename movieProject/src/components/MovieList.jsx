import React, { useEffect, useState } from 'react'

const MovieList = (props) => {
  return (
    <div className='w-[70vw] flex flex-col gap-[2vh]'>
      <table className='table-auto w-full border-collapse border border-slate-100'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='w-4/6 border border-slate-100 px-2'>Title</th>
            <th className='w-1/6 border border-slate-100 px-2'>Genre</th>
            <th className='w-1/6 border border-slate-100 px-2'>Year</th>
          </tr>
        </thead>
        <tbody>
          {props.filteredMovies.map((item, index) => (
            <tr key={index} className='bg-white'>
              <td className='border border-slate-100 px-2'>{item.title}</td>
              <td className='border border-slate-100 px-2'>{item.genre}</td>
              <td className='border border-slate-100 px-2'>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MovieList;
