"use client"

import React from 'react'

const Demo = () => {
  const [name, setName] = React.useState('')
  const [age, setAge] = React.useState('')

  async function handleAdd() {
    const params = {
      name,
      age,
    }

    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: params }),
      })
      const data = await res.json()

      if (data.success) {
        console.log('Demo 请求成功')
        location.reload()
      } else {
        console.log('Demo 请求失败 ', data.msg)
      }
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <div>
      <div>Demo</div>
      <form>
        <div className='p-3 flex gap-3'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id='name'
            className="text-neutral-900"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="p-3 flex gap-3">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id='age'
            className="text-neutral-900"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </div>
      </form>
      <div>
        <button
          onClick={handleAdd}
          className='p-3 border-2'
        >
            添加新数据
          </button>
      </div>
    </div>
  )
}

export default Demo
