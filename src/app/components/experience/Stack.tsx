'use client'
import NameBox from '@/app/components/experience/NameBox'
import Button from '@/app/components/common/Button'
import Input from '@/app/components/common/Input'
import Header from '@/app/components/layout/Header'
import React, { useState } from 'react'

const Stack = () => {
  const [name, setName] = useState('')
  const [names, setNames] = useState<string[]>([])

  console.log(names.join(',')) // 배열 스트링으로 변환

  const handleDelete = (index: number) => {
    const newStrings = [...names]
    newStrings.splice(index, 1)
    setNames(newStrings)
  }

  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <div className="flex w-[full] h-[980px] gap-10">
        <Input type={'login'} onChange={(e) => setName(e.target.value)} />
        <Button
          buttonText={'이름 추가'}
          type={'loginB'}
          isDisabled={false}
          onClickHandler={() => setNames([...names, name])}
        />
      </div>
      <div className="flex w-auto h-auto bg-black">
        {names.map((name, i) => (
          <div key={i}>
            <div className="flex gap-1">
              <NameBox stack={name} />
              <button
                className="flex bg-white w-12 h-6 text-[18px]"
                onClick={() => handleDelete(i)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stack
