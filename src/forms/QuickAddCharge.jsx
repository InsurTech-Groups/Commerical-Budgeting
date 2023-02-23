import React,  { Fragment, useState, useEffect }from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { doc, getDocs, getDoc, collection } from "firebase/firestore";
import { db } from '../config/firebaseConfig';


const employees = [
  { name: 'Unassigned', value: null },
  {
    name: 'David Verduzco',
    value: 'david-verduzco',
    avatar: ''
  },
  {
    name: 'Daniel Miller',
    value: 'daniel-miller',
    avatar: ''
  },
  {
    name: 'Jeff Shi',
    value: 'jeff-shi',
    avatar: ''
  },
  {
    name: 'Kyle Benton',
    value: 'kyle-benton',
    avatar: ''
  },
  {
    name: 'Sunny Sarathy',
    value: 'sunny-sarathy',
    avatar: ''
  },
  {
    name: 'Fernando Ortiz',
    value: 'fernando-ortiz',
    avatar: ''
  },
  // More items...
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const QuickAddForm = () => {

  const [showModal, setShowModal] = React.useState(false);
  const [employee, setEmployee] = useState([])
  const [labelled, setLabelled] = useState([])
  const [dated, setDated] = useState('');
  const [sources, setSources] = useState([])
  const [charges, setCharges] = useState('')


  

  function addToCharges() {
   
   
    setShowModal(false)
  }
  
  return (
    <>
      <button
        className="bg-button-purple text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
       Add A New Charge
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/80"
          >
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-dark-purple outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-600 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                   Add A New Charge
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <form action="#" className="relative">
      <div className="overflow-hidden rounded-lg shadow-sm focus-within:border-indigo-500 focus-within:ring-1  focus-within:ring-indigo-500">
      
                      

      <div className='justify-center block  w-10/12 mx-auto'>
      <label htmlFor="company-website" className="block text-sm font-medium text-white">
        Spend Amount
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center rounded-l-md border border-r-1 border-gray-600 bg-input-purple px-3 text-gray-500 sm:text-sm">
         $
        </span>
        <input
          type="number"
          name="spend"
          id="spend"
          className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-600 bg-input-purple px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-white"
                            placeholder="Enter Spend"
                            onChange={(e) => {
                              setCharges(e.target.value)
                            }}
        />
      </div>
    </div>

        <label htmlFor="description" className="sr-only">
          Write Some Notes Here
        </label>
        <textarea
          rows={2}
          name="description"
          id="description"
          className="block w-10/12 h-28 rounded-lg mb-4 mx-auto  text-white resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm bg-input-purple p-2 mt-4"
          placeholder="Write some notes here..."
          defaultValue={''}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          {/* <div className="py-2">
            <div className="h-9" />
          </div> */}
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
        <div className="flex flex-nowrap justify-end space-x-2 py-2 px-2 sm:px-3">
          <Listbox as="div" value={employee} onChange={setEmployee} className="flex-shrink-0">
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only"> User Adding Charge: </Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-input-purple py-2 px-2 text-sm font-medium text-gray-500 hover:bg-button-purple sm:px-3">
                    {employee.value === null ? (
                      <UserCircleIcon className="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1" aria-hidden="true" />
                                  ) : (
                                      <div><UserCircleIcon className="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1" aria-hidden="true" /></div>
                    )}

                    <span
                      className={classNames(
                        employee.value === null ? '' : 'text-white',
                        'hidden truncate sm:ml-2 sm:block'
                      )}
                    >
                      
                      {employee.value === null ? 'Add A User' : employee.name}
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-input-purple py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {employees.map((employee) => (
                        <Listbox.Option
                          key={employee.value}
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-input-purple' : 'bg-input-purple',
                              'relative cursor-default select-none  pb-1 px-3'
                            )
                          }
                          value={employee}
                        >
                          <div className="flex items-center bg-dark-purple h-10 rounded-lg pl-2 ">
                            {employee.avatar ? (
                              <img src={employee.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                            ) : (
                              <UserCircleIcon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                            )}

                            <span className="ml-3 block text-white truncate font-medium">{employee.name}</span>
                          </div>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          <Listbox as="div" value={labelled} onChange={setLabelled} className="flex-shrink-0">
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only"> Add a label </Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-input-purple py-2 px-2 text-sm font-medium text-gray-500 hover:bg-button-purple sm:px-3">
                    <TagIcon
                      className={classNames(
                        labelled.value === null ? 'text-white' : 'text-white',
                        'h-5 w-5 flex-shrink-0 sm:-ml-1'
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        labelled.value === null ? '' : 'text-white',
                        'hidden truncate sm:ml-2 sm:block'
                      )}
                    >
                      {labelled.value === null ? 'Add A Source' : labelled.name}
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-input-purple py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {sources.map((source) => (
                        <Listbox.Option
                          key={source.name}
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-button-purple' : 'bg-input-purple',
                              'relative cursor-default select-none py-2 px-3 text-white border-b-2 border-gray-600 cursor-pointer'
                            )
                          }
                          value={source}
                        >
                          <div className="flex items-center">
                            <span className="block truncate font-medium">{source.name}</span>
                          </div>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

                        <Listbox as="div" className='flex flex-wrap items-center justify-between' value={dated} onChange={setDated} >
                          <div className='flex flex-wrap items-center justify-between'>
            <input type="date" className="bg-input-purple text-white rounded-full py-2 px-2 text-sm font-medium text-gray-500 hover:bg-button-purple sm:px-3" />
                          </div>
                         
          </Listbox>
        </div>
      
      </div>
    </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-600 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel This Charge
                  </button>
                  <button
                    className="bg-button-purple text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addToCharges}
                  
                  >
                    Add New Charge
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default QuickAddForm