import React from 'react'

function JobPosting() {
  return (
    <div>
      
<form>
  <div class="bg-stone-100 mt-10 min-h-screen md:px-20 pt-6">
    <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
      <h1 class="text-center text-2xl font-bold text-blue-500 mb-10">POST A JOB</h1>
      <div class="space-y-4">
        <div>
          <label for="title" class="text-lx font-serif">Job Title:</label>
          <input type="text" placeholder="title" id="title" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
        <div>
          <label for="description" class="block mb-2 text-lg font-serif"> Job Description:</label>
          <textarea id="description" cols="30" rows="10" placeholder="write here.." class="w-full font-serif  p-4 text-blue-600 bg-blue-50 outline-none rounded-md"></textarea>
        </div>
        <div>
       
<div class="max-w-lg m-3">
  <div class="relative">
  <label for="description" class="block mb-2 text-md font-serif"> Job tags:</label>
    <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter related job tags"/>
    <div class="hidden">
      <div class="absolute z-40 left-0 mt-2 w-full">
        <div class="py-1 text-sm bg-white rounded shadow-lg border border-gray-300">
          <a class="block py-1 px-5 cursor-pointer hover:bg-indigo-600 hover:text-white">Add tag "<span class="font-semibold" x-text="textInput"></span>"</a>
        </div>
      </div>
    </div>
    {/* <!-- selections --> */}
    <div class="bg-blue-100 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden">
      <span class="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1" x-text="tag">tag</span>
      <button class="w-6 h-8 inline-block align-middle text-gray-500 bg-blue-200 focus:outline-none">
        <svg class="w-6 h-6 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
      </button>
    </div>
  </div>
</div>
        </div>
        
        <button class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-blue-600  ">ADD POST</button>
      </div>
    </div>
  </div>
</form>
    </div>
  )
}

export default JobPosting
