'use client'
import { SearchManufacturerProps } from '@/Types'
import { Combobox, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import { manufacturers } from '@/constants/intex'

const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = 
    query === "" ? manufacturers : manufacturers.filter((item) =>
    item
    .toLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g, ""))
  );

  return (
    <div className='seach-manufacturer z-20'>
      <Combobox value={manufacturer} onChange={(value) =>{value !== null && setManufacturer(value)}}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>

          <Combobox.Input className='search-manufacturer__input' 
            placeholder='Volksvagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Transition for displaying the options */}
          <Transition as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option value={query} className='search-manufacturer__option'>
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option key={item}
                    className={({ active }) => `relative search-manufacturer__option 
                    ${ active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      
    </div>
  )
}

export default SearchManufacturer