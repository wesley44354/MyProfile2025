import { Menu } from './Menu';
import { List } from 'phosphor-react';

export const HeaderCard = () => {
  return (
    <header className='bg-zinc-100 dark:bg-zinc-800'>
      <nav className="flex justify-between items-center max-w-7xl my-0 mx-auto py-3 px-4">
        <div className='lg:block hidden w-40 h-10 bg-zinc-300 dark:bg-zinc-700'></div>
        <Menu />
        <List className="text-3xl lg:hidden text-zinc-400 dark:text-zinc-700" />
        <div className="flex gap-4 items-center">
          <div className="bg-zinc-300 dark:bg-zinc-700 w-8 h-8 rounded-sm"></div>
          <div className="bg-zinc-300 dark:bg-zinc-700 w-8 h-8 rounded-sm"></div>
          <div className="bg-zinc-300 dark:bg-zinc-700 w-12 h-12 rounded-full"></div>
        </div>
      </nav>
    </header>
  )
}
