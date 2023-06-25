import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navigation() {
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "w.jpg",
  };
  const navigation = [
    // { name: "Dashboard", href: "/", current: true },
    // { name: "Swapi People", href: "/swapi-people", current: false },
    // { name: "To Do", href: "/todo", current: false },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  const location = useLocation();
  console.log(location);
  return (
    <Disclosure as="nav" className="bg-blue-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    src="logo.png"
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <a href="/login" className="flex items-center ml-auto flex-shrink-0 ">
                    {/* Login */}
                    <button
                      type="button"
                      className="ml-1 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <ArrowRightOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    </a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <Disclosure.Panel className="md:hidden">
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <a href="/login" className="flex items-center ml-auto flex-shrink-0 ">
                  <div className="font-medium leading-none">
                    Login
                  </div>
                  <button
                    type="button"
                    className="ml-1 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <ArrowRightOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default Navigation;
