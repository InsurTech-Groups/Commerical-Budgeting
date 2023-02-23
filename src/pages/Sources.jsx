import React, { useState , useEffect} from 'react'
import TopMenu from '../components/TopMenu';
import {navigation} from '../components/NavBar'
import QuickAddForm from '../forms/QuickAddCharge';
const Sources = () => {

  const [sources, setSources] = useState([])
  
  useEffect(() => {

    console.log(navigation[1].current = true)
   
  }, [])
  

  return (

    <div className='bg-dark-purple h-fit '>
     <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto flex justify-between max-w-7xl px-4 sm:px-6 lg:px-2">
          <h1 className="text-2xl font-semibold text-white">Commerical Budgeting Dashboard</h1>
        <QuickAddForm/>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            
          {/* start page header */}
            <TopMenu title={'Sources'} subhead={' View Sources & Charges' } showForm={true} />
          {/* end page header */}

          <section className="py-3 mt-8">
            <div className="container mx-auto">
            <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            
       
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-9">
    {sources.map((source) => (
      <li key={source.manager} className="col-span-1 divide-y divide-gray-200 rounded-lg shadow" style={{
        'background-color': `${source.color}`
      }}>
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3 pb-10">
            <span className="inline-flex items-center rounded-md bg-input-purple text-white px-2.5 py-0.5 text-lg font-medium">
      {source.name}
    </span>
              <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Active
              </span>
            </div>
            <div>

            </div>
<span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
      Managed By: {source.manager}
    </span>
          </div>
         
        </div>
      
      </li>
    ))}
            </ul>
        </div>
        
      </div>
      
    </main>

      </div>
    </section>

              {/* /End replace */}
            </div>
          </div>
        </main>
 </div>
    

   )
}

export default Sources