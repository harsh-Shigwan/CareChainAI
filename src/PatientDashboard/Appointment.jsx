import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Appointment = () => {
  // const [selected, setSelected] = useState(plans[0])
  const [form, setForm] = useState({
    firstName: 'Bar',
    lastName: 'Hep',
    email: 'bhepworth@sculpture.com',
  });
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <section className="flex-none ">
      <div class="flex flex-row ">
        <div class="w-1/3 h-screen bg-white dark:bg-secondary-dark-bg flex flex-colums justify-center gap-1">
          <div class="h-1/5 w-full bg-white dark:bg-secondary-dark-bg gap-1">
            <p className="font-semibold text-2xl dark:text-white px-6 ">
              Patient
            </p>
            <div className="w-full max-w-md px-2 py-16 sm:px-0">
              <Tab.Group>
                <Tab.List className="sm:flex space-x-1 rounded-xl bg-blue-900/20 px-2  ">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  {Object.values(categories).map((posts, idx) => (
                    <Tab.Panel
                      key={idx}
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    >
                      <ul>
                        {posts.map((post) => (
                          <li
                            key={post.id}
                            className="relative rounded-md p-3 hover:bg-gray-100"
                          >
                            <h3 className="text-sm font-medium leading-5">
                              {post.title}
                            </h3>

                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 flex-wrap">
                              <li>{post.date}</li>
                              <li>&middot;</li>
                              <li>{post.commentCount} comments</li>
                              <li>&middot;</li>
                              <li>{post.shareCount} shares</li>
                            </ul>

                            <a
                              href="#"
                              className={classNames(
                                "absolute inset-0 rounded-md",
                                "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                              )}
                            />
                          </li>
                        ))}
                      </ul>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
        <div class=" w-full h-full bg-#9ca3af  dark:bg-secondary-dark-bg">
        <div class="w-full b rounde-xl">
        <div className="flex space-x-9">
        <p className="h-16 w-16 pl-6 py-2 justify-center gap-1 bg-red-900 rounded-full 
      dark:bg-slate-200"></p><p> {form.
      firstName}{' '}
        {form.lastName}{' '}<br/>
        ({form.email})</p></div>
      
    


      
        <div class="mx-auto grid max-w-screen-lg py-6 px-6 pb-20">
          <div class="">
            <p class="font-serif text-xl font-bold text-blue-900 dark:text-white">Select a Appointment</p>
            <div class="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
              <div class="relative">
                <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_1">
                  <span class="mt-2- font-medium">Urgent Appointment</span>
                  <span class="text-xs uppercase">30 Min</span>
                </label>
              </div>
              <div class="relative">
                <input class="peer hidden" id="radio_2" type="radio" name="radio" />
                <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
      
                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_2">
                  <span class="mt-2 font-medium">Normal Appointment</span>
                  <span class="text-xs uppercase">1 Hour</span>
                </label>
              </div>
              <div class="relative">
                <input class="peer hidden" id="radio_3" type="radio" name="radio" />
                <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
      
                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_3">
                  <span class="mt-2 font-medium">Specific Appointment</span>
                  <span class="text-xs uppercase">1 Hour</span>
                </label>
              </div>
            </div>
          </div>
      
          <div class="">
            <p class="mt-8 font-serif text-xl font-bold text-blue-900 dark:text-white">Select a date</p>
            <div class="relative mt-4 w-56">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg aria-hidden="true" class="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <input datepicker="" datepicker-orientation="bottom" autofocus="autofocus" type="text" class="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm" placeholder="Select date" />
            </div>
          </div>
      
          <div class="">
            <p class="mt-8 font-serif text-xl font-bold text-blue-900 dark:bg-white">Select a time</p>
            <div class="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
              <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
              <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">14:00</button>
              <button class="rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white active:scale-95">09:00</button>
              <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
              <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">15:00</button>
              <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
              <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">14:00</button>
              <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
            </div>
          </div>
      
          <button class="mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">Book Now</button>
        </div>
      </div>
      <script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js"></script>
      
        </div>
        
      </div>
    </section>
  );
};

export default Appointment;
/*
<div className="h-16 w-full bg-grey-500  dark:bg-secondary-dark-bg ">
<div className="flex space-x-9">
  <p className="h-16 w-16 px-2 py-2 justify-center gap-1 bg-red-900 rounded-full dark:bg-slate-200">Profile</p><p> {form.
firstName}{' '}
  {form.lastName}{' '}<br/>
  ({form.email})</p></div>
</div>
<div className="h-2/4 w-full grid grid-cols-4 bg-red-500 "><div className="ml-3 mt-3 mb-3 h-full w-10/12 bg-yellow-600"></
div></div>*/