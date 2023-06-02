import React, { useContext } from 'react';

import {
  Bars3BottomRightIcon,
  SquaresPlusIcon,
  UserPlusIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
  ShoppingCartIcon,
  ChatBubbleOvalLeftIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
  FolderIcon,
  HeartIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  MicrophoneIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Store } from '@/utils/Store';
import { useSession } from 'next-auth/react';

function SideBar() {
  const { state, dispatch } = useContext(Store);
  const { status, data: session } = useSession();

  const menus = [
    { name: 'dashboard', link: '/admin/dashboard', icon: SquaresPlusIcon },
    { name: 'saved', link: '/', icon: HeartIcon },
    { name: 'cart', link: '/admin/orders', icon: ShoppingCartIcon },

    { name: 'users', link: '/admin/users', icon: UserPlusIcon, margin: true },
    { name: 'email', link: '/', icon: EnvelopeIcon },
    { name: 'messages', link: '/', icon: ChatBubbleOvalLeftIcon },

    { name: 'setting', link: '/', icon: Cog6ToothIcon, margin: true },
    { name: 'your acoount', link: '/profile', icon: UserIcon },
    { name: 'help', link: '/', icon: QuestionMarkCircleIcon },
    { name: 'services', link: '/', icon: MicrophoneIcon },

    {
      name: 'customization',
      link: '/profile',
      icon: AdjustmentsHorizontalIcon,
      margin: true,
    },
    { name: 'file manager', link: '/', icon: FolderIcon },
    { name: 'analytics', link: '/', icon: ChartBarIcon },
  ];

  function showSideBar(e) {
    e.preventDefault();
    dispatch({ type: 'OPEN_SIDE_BAR', payload: !state.open });
  }
  return (
    <>
      {status === 'loading' ? (
        'Loading'
      ) : session?.user ? (
        session.user.isAdmin ? (
          <div
            className={` bg-slate-700 text-white-100 min-h-full duration-500 ${
              state.open ? 'w-72' : 'w-12 pl-0'
            } duration-500 px-4`}
          >
            <div className="py-3 flex justify-end">
              <button
                className="flex text-4xl text-white items-center cursor-pointer relative "
                onClick={(e) => showSideBar(e)}
              >
                <Bars3BottomRightIcon className="h-5 w-5" />
              </button>
            </div>

            <div
              className={`
        mt-4 flex flex-col gap-4 relative`}
            >
              {menus?.map((menu, id) => {
                return (
                  <Link
                    key={id}
                    href={menu?.link}
                    className={`
                ${menu?.margin && 'mt-5'}
                ${state.open && 'p-3'}
                ${!state.open && 'justify-center p-0'}
                 group flex items-center text-sm text-white gap-3.5 font-medium  hover:bg-gray-800 rounded-md`}
                  >
                    <div>
                      <menu.icon className="h-5 w-5"></menu.icon>
                    </div>

                    <h2
                      style={{ transitionDelay: `${id + 3}00ms` }}
                      className={` whitespace-pre duration-300  ${
                        !state.open &&
                        'opacity-0  translate-x-28 overflow-hidden'
                      }`}
                    >
                      {menu.name}
                    </h2>
                    <h2
                      className={`${
                        state.open && 'hidden'
                      } absolute z-50 left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {menu?.name}
                    </h2>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div
            className={` bg-slate-700 text-white-100 min-h-full duration-500 ${
              state.open ? 'w-72' : 'w-12 pl-0'
            } duration-500 px-4`}
          >
            <div className="py-3 flex justify-end">
              <button
                className="flex text-4xl text-white items-center cursor-pointer relative "
                onClick={(e) => showSideBar(e)}
              >
                <Bars3BottomRightIcon className="h-5 w-5" />
              </button>
            </div>
            <div
              style={{ transitionDelay: `${1 + 3}00ms` }}
              className={` whitespace-pre duration-300  ${
                !state.open && 'opacity-0  translate-x-28 overflow-hidden'
              }`}
            >
              <div className="border-b flex flex-col m-2">
                <h1>shop by catogary</h1>
                <a href="">women&apos;s fashion</a>
                <a href="">men&apos;s fashion</a>
                <a href="">others</a>
              </div>

              <div className="border-b flex flex-col m-2">
                <h1>help and setting</h1>
                <a href="">your account</a>
                <a href="">settings</a>
                <a href="">help</a>
              </div>
            </div>
          </div>
        )
      ) : (
        
        <div
        className={` bg-slate-700 hidden text-white-100 min-h-full duration-500 ${
          state.open ? 'w-72' : 'w-12 pl-0'
        } duration-500 px-4`}
      >
        <div className="py-3 flex justify-end">
          <button
            className="flex text-4xl text-white items-center cursor-pointer relative "
            onClick={(e) => showSideBar(e)}
          >
            <Bars3BottomRightIcon className="h-5 w-5" />
          </button>
        </div>
        <div
          style={{ transitionDelay: `${1 + 3}00ms` }}
          className={` whitespace-pre duration-300  ${
            !state.open && 'opacity-0  translate-x-28 overflow-hidden'
          }`}
        >
          <Link className='text-white' href='/login'>
         <h2
          style={{ transitionDelay: 300}}
          className={` whitespace-pre text-white duration-300  ${
            !state.open &&
            'opacity-0  translate-x-28 overflow-hidden'
          }`}
         >login</h2>
         </Link>
        </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
