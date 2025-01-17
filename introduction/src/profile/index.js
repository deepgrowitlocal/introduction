import React, { Fragment, Component } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  HomeIcon,
  MenuAlt1Icon,
  XIcon,
} from "@heroicons/react/outline";
import {
  CashIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import myimage from "../img/myimage.png";
import anz from "../img/anz.png";
import pwc from "../img/pwc.png";
import q3 from "../img/q3.png";
import razor from "../img/razor.png";
import santech from "../img/santech.png";

const navigation = [
  { name: "Profile", href: "#", icon: HomeIcon, current: true },
];

const cards = [
  {
    name: "ANZ Bank",
    title: "Engineering Chapter Lead",
    href: "#",
    companyImage: anz,
    desc: "",
    durations: "December 2020 - Present",
  },
  {
    name: "Razor Risk",
    title: "Senior Software Engineer",
    href: "#",
    companyImage: razor,
    desc: "",
    durations: "March 2020 - December 2020",
  },
  {
    name: "PwC",
    title: "Senior Consultant",
    href: "#",
    companyImage: pwc,
    desc: "",
    durations: "September 2016 - March 2020",
  },
  {
    name: "Q3 Technoogies",
    title: "Software Engineer",
    href: "#",
    companyImage: q3,
    desc: "",
    durations: "October 2012 - September 2016",
  },
  {
    name: "Santech Solution, Inc.",
    title: "Software Deveoper",
    href: "#",
    companyImage: santech,
    desc: "",
    durations: "September 2011 - October 2012",
  },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: "ANZ",
    durations: "December 2020 - Present",
    desc: "Working as Full Stack Web Developer(MERN Stack), I worked on multiple domain like Risk Technology, Institutional banking as a Senior developer",
  },
  {
    id: 2,
    name: "RazorRisk",
    durations: "March 2020 - December 2020",
    desc: "Razor, I have done Counterparty Credit Risk transformation programme at a leading German bank for replacing a number of legacy risk solutions with Razor Risk’s Platform ",
  },
  {
    id: 3,
    name: "PwC",
    durations: "September 2016 - March 2020",
    desc: "As part of my role, I have mainly worked for ANZ Bank on developing solutions for Counterparty Credit Risk, Pre Deal Check and Risk Grading tools, High Risk Customer Management and other counterparty risk assessment tools",
  },
  {
    id: 4,
    name: "Q3 Technoogies",
    durations: "October 2012 - September 2016",
    desc: "Software Development in WPF, Silverlight Technology. Here I worked on creating solution for UK Jewelery TV program scheduler,Auction Management systems, Aerospace organization Inventory managemnts",
  },
  {
    id: 5,
    name: "Santech Solution, Inc.",
    durations: "September 2011 - October 2012",
    desc: "The company provides healthcare IT products and services and was started by healthcare professionals bringing significant experience to our solutions for healthcare organizations such as provider organizations, payors, brokers, intermediaries and healthcare association membership trusts.",
  },
];
const skills = [
  {
    id: 1,
    name: "React , Node.Js, Express, Tailwind CSS ",
    experties: "8 out of 10",
  },
  {
    id: 2,
    name: "C#, WPF, Silverlight, MVC, MVVM, .NetCore",
    experties: "8 out of 10",
  },
  {
    id: 3,
    name: "Ruby, Kotlin frameworks",
    experties: "8 out of 10",
  },
  {
    id: 4,
    name: "SQL, MongoDB, Postgresql",
    experties: "8 out of 10",
  },
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      profileImage: myimage,
    };
  }

  greeting = () => {
    var today = new Date();
    var curHr = today.getHours();

    return curHr < 12
      ? "Good morning"
      : curHr < 18
      ? "Good afternoon"
      : "Good evening";
  };

  render() {
    const { sidebarOpen, profileImage } = this.state;
    return (
      <>
        <div className="relative flex overflow-hidden bg-gray-100">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 flex z-40 lg:hidden"
              onClose={() => {
                this.setState({ sidebarOpen: false });
              }}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => {
                          this.setState({ sidebarOpen: false });
                        }}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex items-center px-4">
                    {/* <img className="h-8 w-auto" /> */}
                  </div>
                  <nav
                    className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-cyan-800 text-white"
                              : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex flex-col w-64">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  {/* <img className="h-8 w-auto" /> */}
                </div>
                <nav
                  className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-cyan-800 text-white"
                            : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                          "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto focus:outline-none">
            <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
              <button
                type="button"
                className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                onClick={() => {
                  this.setState({ sidebarOpen: false });
                }}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Search bar */}
              <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="flex-1 flex"></div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={profileImage}
                          alt=""
                        />
                        <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                          <span className="sr-only">Open user menu for </span>
                          Deeptanshu Belwal
                        </span>
                        <ChevronDownIcon
                          className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
              {/* Page header */}
              <div className="bg-white shadow">
                <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                  <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                    <div className="flex-1 min-w-0">
                      {/* Profile */}
                      <div className="flex items-center">
                        <img
                          className="hidden h-16 w-16 rounded-full sm:block"
                          src={profileImage}
                          alt=""
                        />
                        <div>
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 rounded-full sm:hidden"
                              src={profileImage}
                              alt=""
                            />
                            <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                              {this.greeting()}, Deeptanshu Belwal
                            </h1>
                          </div>
                          <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                            <dt className="sr-only">Company</dt>
                            <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                              Full Stack Engineer at ANZ | Ex- PwC India
                            </dd>
                          </dl>
                          <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                            <dt className="sr-only">Company</dt>
                            <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                              Bangalore India
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-justify max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-lg text-justify leading-6 font-medium text-gray-900">
                  About
                </h2>
                <dd className="mt-1 text-sm text-gray-900">
                  I am a Full Stack Developer currently working on MERN Stack,
                  JavaScript, React, Redux, Node.js, Express, GraphQL, MongoDB,
                  Tailwind CSS along with having rich experience in Dot.Net
                  based technology like C#, WPF, Silverlight, SQL, MVVM, MVC.
                  with strong product development experience in multiple
                  domains. Well versed with managing the day-to-day operations
                  of the project and reporting periodically to all the
                  stakeholders.
                </dd>
              </div>

              <div className="mt-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-lg text-justify leading-6 font-medium text-gray-900">
                    Experience
                  </h2>
                  <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {cards.map((card) => (
                      <div
                        key={card.name}
                        className="bg-white overflow-hidden shadow rounded-lg"
                      >
                        <div className="p-5 flex text-justify">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src={card.companyImage}
                              alt=""
                            />
                          </div>
                          <div className="ml-5">
                            <div className="text-sm font-medium text-gray-900">
                              {card.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                              {card.title}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                              {card.durations}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="max-w-6xl text-justify mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
                  Project
                </h2>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col mt-2">
                    <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                      <ul
                        role="list"
                        class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8"
                      >
                        {transactions.map((transaction) => (
                          <li class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                            <div class="sm:flex sm:justify-between sm:items-baseline">
                              <h3 class="text-base font-medium">
                                <span class="text-gray-900">
                                  {transaction.name}
                                </span>
                              </h3>
                              <p class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                                {transaction.durations}
                              </p>
                            </div>
                            <div class="mt-4 text-justify space-y-6 text-sm text-gray-800">
                              <p>{transaction.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="max-w-6xl text-justify mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
                  Primary Skils
                </h2>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col mt-2">
                    <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                      <ul
                        role="list"
                        class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8"
                      >
                        {skills.map((transaction) => (
                          <li class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                            <div class="sm:flex sm:justify-between sm:items-baseline">
                              <h3 class="text-base font-medium">
                                <span class="text-gray-900">
                                  {transaction.name}
                                </span>
                              </h3>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div>© copyright by db-Square</div>
      </>
    );
  }
}
