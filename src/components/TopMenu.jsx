import React from 'react';
import QuickAddSourceForm from '../forms/QuickAddSourceForm';

const TopMenu = (props) => {
  return (
    <section>
<div class="px-8 pt-8 mt-10 pb-8 bg-input-purple rounded-lg">
  <div>
    <div class="flex flex-wrap items-center justify-between -mx-4">
      <div class="w-full md:w-1/2 lg:w-auto px-4 mb-6 md:mb-0">
              <h4 class="text-2xl font-bold text-white tracking-wide leading-6 mb-1">{props.title}</h4>
              <p class="text-lg leading-5 text-gray-300">{props.subhead}</p>
      </div>
      <div class="w-full md:w-1/2 lg:w-auto px-4">
              {
                props.showForm ?
                  (
                <QuickAddSourceForm/>
                )
                  : (
                    <div class="md:flex items-center">
                    <div class="flex px-4 h-12 mb-4 md:mb-0 md:mr-4 max-w-sm items-center border border-gray-400 hover:border-white focus-within:border-button-purple rounded-lg">
                      <span class="flex-shrink-0">
                        <svg width="14" height="14" viewbox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.4733 12.5267L10.9999 10.0734C11.96 8.87633 12.4249 7.35692 12.2991 5.82759C12.1733 4.29826 11.4664 2.87525 10.3236 1.85115C9.18085 0.827062 7.68914 0.279732 6.15522 0.321705C4.62129 0.363679 3.16175 0.991766 2.0767 2.07682C0.991644 3.16187 0.363557 4.62142 0.321583 6.15534C0.27961 7.68926 0.82694 9.18097 1.85103 10.3237C2.87512 11.4665 4.29814 12.1735 5.82747 12.2993C7.3568 12.4251 8.87621 11.9601 10.0733 11.0001L12.5266 13.4534C12.5886 13.5159 12.6623 13.5655 12.7436 13.5993C12.8248 13.6332 12.9119 13.6506 12.9999 13.6506C13.0879 13.6506 13.1751 13.6332 13.2563 13.5993C13.3376 13.5655 13.4113 13.5159 13.4733 13.4534C13.5934 13.3291 13.6606 13.163 13.6606 12.9901C13.6606 12.8172 13.5934 12.651 13.4733 12.5267ZM6.33327 11.0001C5.41029 11.0001 4.50804 10.7264 3.74061 10.2136C2.97318 9.7008 2.37504 8.97197 2.02183 8.11925C1.66862 7.26653 1.57621 6.32821 1.75627 5.42297C1.93634 4.51773 2.38079 3.6862 3.03344 3.03356C3.68608 2.38091 4.5176 1.93646 5.42285 1.75639C6.32809 1.57633 7.2664 1.66874 8.11913 2.02195C8.97185 2.37516 9.70068 2.9733 10.2135 3.74073C10.7262 4.50816 10.9999 5.41041 10.9999 6.33339C10.9999 7.57107 10.5083 8.75805 9.6331 9.63322C8.75793 10.5084 7.57095 11.0001 6.33327 11.0001Z" fill="#3D485B"></path>
                        </svg>
                      </span>
                      <input class="block pl-2 text-md font-medium text-white placeholder-gray-400 bg-transparent border-none focus:border-none" id="search" type="search" placeholder="Search For A Charge..."/>
                    </div>
                    <button class="inline-flex h-12 py-1 px-4 mr-4 items-center text-center text-sm font-bold text-white bg-button-purple rounded-lg">Search</button>
                      </div>
                  )
        }
      </div>
    </div>
  </div>
</div>
          </section>
  )
}

export default TopMenu