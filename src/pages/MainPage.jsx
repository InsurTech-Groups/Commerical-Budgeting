import React, {useEffect} from 'react';
import MainBudgetComponents from '../components/MainBudgetComponents';
import { navigation } from '../components/NavBar'
import QuickViewSources from '../components/QuickViewSources';
import TopMenu from '../components/TopMenu';
import QuickAddForm from '../forms/QuickAddCharge';

const MainPage = () => {

  //TODO:
  // 1. Add quick add form
  // 2. Add Main Budget Components
  // 3. Add Overview Components

  useEffect(() => {
    navigation[0].current = true;

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
            <TopMenu title={'Overview'} subhead={'Quick View Sources & Charges' } showForm={false} />
          {/* end page header */}

          <section className="py-3 mt-8">
            <div className="container mx-auto">
              
<MainBudgetComponents/>        
       
              <QuickViewSources/>
      </div>
    </section>

              {/* /End replace */}
            </div>
          </div>
        </main>
 </div>
  )
}

export default MainPage