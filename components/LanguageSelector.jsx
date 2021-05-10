import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'

const LanguageSelector = () => {
    const router = useRouter()
    return (
        <div className='lang-div'>
            <Link  href={`/en`} locale={false} ><a className={`lang ${router.locale == 'en' ? 'gm-disabled':'gm-sec'}`}><img src='https://res.cloudinary.com/dcemx7jg0/image/upload/v1620663404/isaldigital/united-states_gghs5h.svg'></img><p>EN</p></a></Link>
            <Link href={`/es`} locale={false}><a className={`lang ${router.locale == 'es' ? 'gm-disabled':'gm-sec'}`}><img src='https://res.cloudinary.com/dcemx7jg0/image/upload/v1620663404/isaldigital/mexico_a34y9i.svg'></img><p>ES</p></a></Link>
        </div>
    )
}

export default LanguageSelector
