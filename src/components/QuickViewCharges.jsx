import React, {useState} from 'react'

const QuickViewCharges = () => {
  const [recentCharge, setRecentCharge] = useState([])

  return (
    <div className="w-full lg:w-2/3 px-3">
    <div className="h-full p-6 bg-input-purple rounded-xl">
      <h4 className="text-lg text-gray-100 font-semibold mb-6">Latest Charges</h4>
      <div className="w-full mt-6 pb-4 overflow-x-auto">
         
              <div>
              <table className="w-full min-w-max">
          <thead>
            <tr className="text-left">
              <th className="p-0">
                <div className="py-3 px-6 rounded-l-xl bg-gray-600">
                  <span className="text-xs text-gray-300 font-semibold">Price</span>
                </div>
              </th>
              <th className="p-0">
                <div className="py-3 px-6 bg-gray-600">
                  <span className="text-xs text-gray-300 font-semibold">Source</span>
                </div>
              </th>
              <th className="p-0">
                <div className="py-3 px-6 bg-gray-600">
                  <button className="inline-flex items-center text-xs text-gray-300 font-semibold">
                    <span className="mr-2">Date</span>
                   
                  </button>
                </div>
              </th>
              <th className="p-0">
                <div className="py-3 px-5 rounded-r-xl bg-gray-600">
                  <span className="text-xs text-gray-300 font-semibold">Submited By</span>
                </div>
              </th>
            </tr>
              </thead>
              {recentCharge.map((charges) => {

return (
          <tbody className='rounded-lg '>
            <tr className='bg-dark-purple rounded-lg'>
              <td className="p-0">
                <div className="h-16 p-6 ">
                        <h5 className="text-sm font-medium text-gray-100">{charges.price}</h5>
                </div>
      </td>
      
      <td className="p-0">
                <div className="h-16 p-6">
                  <div className="flex h-full items-center">
                    <span className="inline-block w-2 h-2 mr-1 rounded-full" />
                          <span className="text-sm font-medium text-gray-100">{charges.source}</span>
                  </div>
                </div>
              </td>
              
              <td className="p-0">
                <div className="h-16 p-6">
                        <span className="text-sm text-gray-100 font-medium">{charges.day}</span>
                </div>
              </td>
              <td className="p-0">
                <div className="h-16 p-6">
                  <div className="flex h-full items-center">
                   
                          <span className="text-sm font-medium text-gray-100">{charges.user}</span>
                  </div>
                </div>
              </td>
            </tr>
            
                  </tbody>
       )
            
      })}
        </table>
            </div>
       
      </div>
    </div>
  </div>

  )
}

export default QuickViewCharges