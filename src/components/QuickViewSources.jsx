import React, { useState } from 'react';
import QuickViewCharges from './QuickViewCharges';

const QuickViewSourcesCharges = () => {

  const [sources, setSources] = useState([]);
  return (
    <div className="flex flex-wrap -mx-3">
    <div className="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
      <div className="h-full py-6 px-4 sm:px-6 bg-input-purple rounded-xl">
          <h4 className="text-lg text-gray-100 font-semibold mb-6">Overall Charges By Source</h4>
          
          {
            // if sources is empty, show loading
            // else, show sources
            sources.length ?
              sources.map((sources) => {
                return (
                  <div>
                    <div className="flex p-4 items-center justify-between rounded-xl transition duration-150 bg-dark-purple mb-2" style={{ 'backgroundColor': sources.color }} >
                      <div className="flex items-center pr-2">
                        <div className="flex flex-col flex-col-4">
                          <div className="flex items-center">
                            <div>
                              <h5 className="text-lg text-gray-100 leading-5 font-medium mb-1 pr-2">{sources.name}</h5>
                              <p className="text-sm font-bold text-gray-300 font-semibold">Managed By: {sources.manager}</p>
                            </div>
                          </div>
                          <div className="flex flex-col flex-col-4">
                            <div className="flex items-center">
                              <div>
                                <h5 className="text-lg text-gray-100 leading-5 font-medium mb-1">${sources.totalSpend}</h5>
                              </div>
                            </div>
                            
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
              :
              <div className="flex p-4 items-center justify-between rounded-xl transition duration-150 bg-dark-purple mb-2"  >
                <div className="flex items-center pr-2">
                  <div className="flex flex-col flex-col-4">
                    <div className="flex items-center">
                      <div>
                        <h5 className="text-lg text-gray-100 leading-5 font-medium mb-1 pr-2">No sources yet....</h5>
                        <a href='/sources' className='text-button-purple underline'>Click here to add a source...</a> 
                       
                      </div>

                    </div>
             
                  </div>
                  
                          </div>
                      </div>
         } 
        
          
      </div>
      </div>
      
      <QuickViewCharges />
  
  </div>
  )
}

export default QuickViewSourcesCharges