import { Cards } from './Cards';

export const Main = () => {
  return (
    <main className="max-w-7xl my-0 mx-auto px-6">
      <div className="w-full h-32 bg-zinc-100 dark:bg-zinc-800 my-8 flex items-center justify-center"><p className="p-5 text-center">Experimente enviar um feedback da aplicação 🐛</p></div>
      <Cards />
    </main>
  )
}
