'use client'
import Button from '@/ui/button'
import { ChangeEvent, useState } from 'react'
import loadingImg from '@/assets/loading.png'
import successImg from '@/assets/success.png'
import errorImg from '@/assets/errror.png'
import Image from 'next/image'

const Form = () => {
    const [error, setError] = useState(false)
    const [required, setRequired] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email) return
        try {
            setLoading(true)
            await wait()
            setSuccess(true)
            setLoading(false)
            setRequired(false)
            setEmail('')
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className="form-border rounded-large p-px max-h-16 max-w-[466px]">
                <form className="group flex rounded-[40px] z-50 items-center justify-between max-h-14 border-primary-blue border  p-[6px] form" onSubmit={handleSubmit}>
                    <input className="outline-none form-text flex flex-1 text-[15px] bg-[transparent] pl-[23px] py-[18px] font-light leading-5 tracking-tight-4"
                        placeholder="Your business email..." type="email" name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {!error && !success && !loading && <Button variant="filled" type='submit' className="!max-h-[44px] ml-2 !h-[44px]" onClick={() => setRequired(true)}>
                        Free trial
                    </Button>}
                    {
                        loading && <Image src={loadingImg} alt='loading img' className='animate-spin' />
                    }
                    {error && <Image src={errorImg} alt='error img' />}
                    {success && <Image src={successImg} alt='success img' />}
                </form>
                <p className={`text-[#F04242] pl-6 pt-3 font-medium leading-5 duration-300 select-none -z-10 tracking-tight-4 ${required && !email ? 'mt-0 opacity-100' : 'opacity-0 -mt-2'}`}>
                    Email is a required field
                </p>
                <p className={`text-primary-blue pl-6 pt-3 font-medium leading-5 duration-300 select-none -z-10 tracking-tight-4 ${success ? '-mt-8 opacity-100' : 'opacity-0 -mt-10'}`}>
                    Successfully sent!
                </p>
            </div>
        </div>
    )
}

export default Form


const wait = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
}