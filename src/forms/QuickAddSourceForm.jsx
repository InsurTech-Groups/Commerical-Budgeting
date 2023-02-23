import React, { useState, useEffect, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';


const employees = [
  { name: "Unassigned", value: 'Select A Manager' },
  {
    name: "David Verduzco",
    value: "david-verduzco",
    avatar: "",
  },
  {
    name: "Daniel Miller",
    value: "daniel-miller",
    avatar: "",
  },
  {
    name: "Jeff Shi",
    value: "jeff-shi",
    avatar: "",
  },
  {
    name: "Kyle Benton",
    value: "kyle-benton",
    avatar: "",
  },
  {
    name: "Sunny Sarathy",
    value: "sunny-sarathy",
    avatar: "",
  },
  {
    name: "Fernando Ortiz",
    value: "fernando-ortiz",
    avatar: "",
  },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const QuickAddSourceForm = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selected, setSelected] = useState(employees[0]);

  const [sourceName, setSourceName] = useState('');
  const [sourceColor, setSourceColor] = useState('');
  const [sourceOwner, setSourceOwner] = useState('');


  

  return (
    <>
      <button
        className="bg-button-purple text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add A New Source
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/80">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-dark-purple outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-600 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                    Add A New Source
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
                    <div className="h-auto rounded-lg shadow-sm focus-within:border-indigo-500 focus-within:ring-1  focus-within:ring-indigo-500">
                      <div className="justify-center block  w-10/12 mx-auto">
                        <label
                          htmlFor="company-website"
                          className="block text-sm font-medium text-white"
                        >
                          Source Name
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm pb-5">
                          <input
                            type="text"
                            name="source"
                            id="source"
                            className="block w-full min-w-0 flex-1 rounded-lg border-gray-600 bg-input-purple px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-white"
                            placeholder="Google Click 2 Call"
                            onChange={
                              (e) => {
                                setSourceName(e.target.value)
                              }
                            }
                          />
                        </div>

                        <label
                          htmlFor="company-website"
                          className="block text-sm font-medium text-white"
                        >
                          Source Color
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm pb-5">
                          <input
                            type="color"
                            name="source"
                            id="source"
                            className="block w-full h-10 flex-1 rounded-lg border-gray-600 bg-input-purple px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-white"
                            onChange={
                              (e) => {
                                setSourceColor(e.target.value)
                              }
                            }
                                                    />
                        </div>


                        <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-white">Source Manager</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-input-purple text-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-dark-purple py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {employees.map((employee) => (
                  <Listbox.Option
                    key={employee.value}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-white',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={employee}
                    onClick={(e) => {
                      setSourceOwner(employee.name)
                    }}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {employee.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-white',
                              'absolute inset-y-0 right-0 flex items-center pr-4 text-white'
                            )}
                          >
                            <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
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
                    Cancel
                  </button>
                  <button
                    className="bg-button-purple text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      //addToFireBase() 
                      setShowModal(false);
                    }}
                  >
                    Add New Source
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
};

export default QuickAddSourceForm;