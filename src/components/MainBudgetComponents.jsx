import React, { useState, useEffect } from 'react'

const MainBudgetComponents = () => {

  return (
    <div className="mb-6">
      
            <div className="flex flex-wrap -mb-6">
              
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div className="max-w-sm mx-auto py-8 px-6 bg-input-purple rounded-xl">
                  <div className="max-w-xs mx-auto text-center">
                  
                          <span className="text-xs text-gray-300 font-semibold">Total Budget For ****</span>
                          <h4 className="text-4xl mt-5 leading-8 text-gray-100 font-semibold mb-4">****</h4>
                         
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div className="max-w-sm mx-auto py-8 px-6 bg-input-purple rounded-xl">
                  <div className="max-w-xs mx-auto text-center">
                  
                    <span className="text-xs text-gray-300 font-semibold">Total Spend As of</span>
                    <span className="text-xs text-gray-300 font-semibold"> ****</span>
                          <h4 className="text-4xl mt-5 leading-8 text-gray-100 font-semibold mb-4">****</h4>

                          
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div className="max-w-sm mx-auto py-8 px-6 bg-input-purple rounded-xl">
                  <div className="max-w-xs mx-auto text-center">
                   
                    <span className="text-xs text-gray-300 font-semibold">Budget Remaining </span>
                          <h4 className="text-4xl mt-5 leading-8 text-gray-100 font-semibold mb-4">****</h4>
                  
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div className="max-w-sm mx-auto py-8 px-6 bg-input-purple rounded-xl">
                  <div className="max-w-xs mx-auto text-center">
                   
                    <span className="text-xs text-gray-300 font-semibold">Avg Daily Spend</span>
                    <h4 className="text-4xl mt-5 leading-8 text-gray-100 font-semibold mb-4">*****</h4>
                  
                  </div>
                </div>
              </div>
            </div>
            
    </div>
  )
}

export default MainBudgetComponents