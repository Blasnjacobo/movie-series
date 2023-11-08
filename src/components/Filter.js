/* eslint-disable no-undef */
import React, { useState } from 'react'
import Select from 'react-select'

const options = [
  { value: 'title', label: 'Title' },
  { value: 'celebrity', label: 'Celebrity' },
  { value: 'year', label: 'Year' },
  { value: 'company', label: 'Company' }
]

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type='checkbox' {...props} />
    {children}
  </label>
)

const Filter = () => {
  const [isClearable, setIsClearable] = useState(true)
  const [isSearchable, setIsSearchable] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRtl, setIsRtl] = useState(false)

  return (
    <>
      <div className='checkbox'>
        <Checkbox
          checked={isClearable}
          onChange={() => setIsClearable((state) => !state)}
        >
          Clearable
        </Checkbox>
        <Checkbox
          checked={isSearchable}
          onChange={() => setIsSearchable((state) => !state)}
        >
          Searchable
        </Checkbox>
        <Checkbox
          checked={isDisabled}
          onChange={() => setIsDisabled((state) => !state)}
        >
          Disabled
        </Checkbox>
        <Checkbox
          checked={isLoading}
          onChange={() => setIsLoading((state) => !state)}
        >
          Loading
        </Checkbox>
        <Checkbox checked={isRtl} onChange={() => setIsRtl((state) => !state)}>
          RTL
        </Checkbox>
      </div>
      <Select
        className='basic-single'
        classNamePrefix='select'
        defaultValue={options[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name='color'
        options={options}
      />
    </>
  )
}

export default Filter
