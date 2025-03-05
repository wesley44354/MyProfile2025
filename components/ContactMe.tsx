import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from "react-hook-form";
import { PageInfo } from '../typings';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}


type Props = {
  pageInfo: PageInfo
}

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:wesleyalvesdeveloper99@gmail.com?subject=${formData.subject}&body=Oi, meu nome é ${formData.name}. ${formData.message} (${formData.email})`
  };

  return (
    <div className='h-screen top-10 flex relative flex-col text-center  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-8 md:top-6 ml-5  uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-8'>
        <h4 className='text-md sm:text-2xl md:text-4xl font-semibold text-center'>
          Eu tenho exatamente o que você precisa.{" "} <span className='decoration-[#8257e5]/50 underline'>Vamos conversar</span>
        </h4>

        <div className='space-y-1 md:space-y-2'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#8257e5] h-7 w-7 animate-pulse' />
            <p className='text-sm md:text-1xl xl:text-2xl'>{pageInfo?.phoneNumber}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#8257e5] h-7 w-7 animate-pulse' />
            <p className='text-sm md:text-1xl xl:text-2xl'>{pageInfo?.email}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#8257e5] h-7 w-7 animate-pulse' />
            <p className='text-sm md:text-1xl xl:text-2xl'>{pageInfo?.address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput'
              type="text"
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput'
              type="text"
            />
          </div>

          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput' type="text"
          />

          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput scrollbar-thin scrollbar-thumb-[#8257e5]/80 scrollbar-track-gray-400/40'
          />
          <button type='submit' className='bg-[#8257e5] text-sm md:text-2xl px-1 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-lg text-white font-bold '>Submit</button>
        </form>
      </div>
    </div>
  )
}