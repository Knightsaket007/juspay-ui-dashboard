import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import rightarrow from '../../assets/icons/leftpannel/right-arrow.svg'
import { useState } from 'react'


export default function Accordion({ data, defActive }) {
    const [active, setactive] = useState(defActive)

    return (

        <div className="w-full">
            <div className="mx-auto w-full max-w-lg easy-tras">

                {Object.entries(data).map(([title, item], index) => (
                    <Disclosure key={title} as="div" className="pt-2" defaultOpen={false}>

                        {({ open }) => (
                            <>
                                <DisclosureButton className={`group flex w-full gap-3 ease-in-out cursor-pointer 
                            ${(active === index) && 'bg-[var(--black-50)] px-1.5 rounded-md py-1 before:absolute before:content-[] before:w-[5px] before:h-4 before:bg-black before:ml-[-7px] before:mt-0.5 before:rounded-xl transition-all duration-300 ease-in-out'} `}
                                    onClick={() => setactive(index)}>

                                    {item.inner?.length > 0 ? (<img src={rightarrow} alt="right arrow" className={`transition-transform duration-300 ease-in-out ${open ? 'rotate-90' : 'rotate-0'}`} />) : (<img src={rightarrow} alt="right arrow" className='opacity-0' />)}

                                    <span className='flex gap-2 items-center'>
                                        <img src={item.img} alt="" />
                                        {title}
                                    </span>
                                </DisclosureButton>


                                {item.inner?.length > 0 && (
                                    <DisclosurePanel className="mt-2 transition-all duration-300 ease-in-out">
                                        {item.inner.map((subItem) => (
                                            <div key={subItem} className="pl-8 py-1">
                                                {subItem}
                                            </div>
                                        ))}
                                    </DisclosurePanel>
                                )}
                            </>
                        )}


                    </Disclosure>
                ))}


            </div>
        </div>
    )
}

