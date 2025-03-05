import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export const CloseButton = () => {
  return (
    <Popover.Button className="absolute top-5 right-5 hover:text-zinc-500 transition-colors" title="Fechar formulário de feedback">
    <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  )
}
