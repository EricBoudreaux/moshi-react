import React, { useState } from 'react'
import MenuItem from './MenuItem'


const Menu = () => {

  const [menu, setMenu] = useState("specialties")
    
  return (
    <div className=''>
        <h1 className='text-center text-[75px] pt-24 pb-6 text-[var(--primary)]'>Our Menu</h1>
        <div className='md:flex'>
            <div className='pb-8 flex flex-col items-start min-w-[300px]'>
                
                <p onClick={() => setMenu("specialties")} className={menu === 'specialties'
                    ? 'text-lg font-[400] pl-12 pt-2 text-black hover:text-black duration-300 ease-in-out cursor-pointer border-black border-b-2 inline-block'
                    : 'text-lg font-[400] pl-12 pt-2 text-[var(--shade-1)] hover:text-black duration-300 ease-in-out cursor-pointer border-b-0 inline-block'}>
                        Specialty cut maki rolls
                </p>
                <p onClick={() => setMenu("handrolls")} className={menu === 'handrolls'
                        ? 'text-lg font-[400] pl-12 pt-2 text-black hover:text-black duration-300 ease-in-out cursor-pointer border-black border-b-2 inline-block'
                        : 'text-lg font-[400] pl-12 pt-2 text-[var(--shade-1)] hover:text-black duration-300 ease-in-out cursor-pointer border-b-0 inline-block'}>
                        Handrolls a la carte
                </p>
                <p onClick={() => setMenu("makirolls")} className={menu === 'makirolls'
                    ? 'text-lg font-[400] pl-12 pt-2 text-black hover:text-black duration-300 ease-in-out cursor-pointer border-black border-b-2 inline-block'
                    : 'text-lg font-[400] pl-12 pt-2 text-[var(--shade-1)] hover:text-black duration-300 ease-in-out cursor-pointer border-b-0 inline-block'}>
                        Cut maki rolls
                </p>
                <p onClick={() => setMenu("drinks")} className={menu === 'drinks'
                        ? 'text-lg font-[400] pl-12 pt-2 text-black hover:text-black duration-300 ease-in-out cursor-pointer border-black border-b-2 inline-block'
                        : 'text-lg font-[400] pl-12 pt-2 text-[var(--shade-1)] hover:text-black duration-300 ease-in-out cursor-pointer border-b-0 inline-block'}>
                        Drinks
                </p>

            </div>

            <div className='w-full'>

                
                {/* props: title, subTitle, price */}
                {/* specialties */}
                {menu === "specialties" ? 
                <div className='animate__animated animate__slideInRight'>
                    <div className='text-[100] text-[32px] font-[400] pl-12'>Specialty cut maki rolls</div>

                    <MenuItem 
                    title="Spicy Yellowtail & Serrano Roll" 
                    subTitle="Spicy hamachi mix, kizami wasabi, sushi rice, cucumber, masago, sesame seeds, serrano, nori" 
                    price="18" />
                    <MenuItem 
                    title="Spicy Tuna & Avocado Roll" 
                    subTitle="Spicy tuna mix, avocado, sushi rice, sesame seeds, nori" 
                    price="14" />
                    <MenuItem 
                    title="King Salmon & Yuzu Roll" 
                    subTitle="Salmon yuzu mix, sushi rice, cucumber, sesame seeds, nori" 
                    price="19" />
                    <MenuItem 
                    title="California Roll" 
                    subTitle="Kani kama mix, avocado, cucumber, sushi rice, sesame seeds, nori" 
                    price="13" />
                    <MenuItem 
                    title="Krispy Shrimp Roll" 
                    subTitle="Panko crusted shrimp, tartar sauce, sushi rice, sesame seeds, nori" 
                    price="20" />
                    <MenuItem 
                    title="Truffle Avocado Roll (Vegetarian)" 
                    subTitle="Truffle avocado mix, sushi rice, cucumber, sesame seeds, nori" 
                    price="17" />
                </div>
                : null }

                {/* handrolls */}
                {menu === "handrolls" ? 

                <div className='animate__animated animate__slideInRight'>
                    <div className='text-[100] text-[32px] font-[400] pl-12'>Handrolls a la carte</div>
                    <MenuItem 
                    title="The Original Baked Crab Handroll" 
                    subTitle="baked crab mix, sushi rice wrapped in soy paper (2 pc)" 
                    price="15" />
                    <MenuItem 
                    title="The Original Spicy Tuna Handroll" 
                    subTitle="spicy tuna tartare, avocado, sushi rice wrapped in soy paper (2 pc)" 
                    price="19" />
                    <MenuItem 
                    title="Krispy Shrimp Handroll" 
                    subTitle="panko crusted shrimp, tartar sauce, sushi rice wrapped in soy paper (2 pc)" 
                    price="19" />
                    <MenuItem 
                    title="Spicy Hamachi & Wasabi Handroll" 
                    subTitle="spicy hamachi mix, kizami wasabi, sushi rice wrapped in soy paper (2 pc)" 
                    price="18" />
                    <MenuItem 
                    title="King Salmon & Yuzu Handroll" 
                    subTitle="salmon yuzu mix, sushi rice wrapped in soy paper (2 pc)" 
                    price="15" />
                    <MenuItem 
                    title="Truffle Avocado Roll (Vegetarian)" 
                    subTitle="Truffle avocado mix, sushi rice wrapped in soy paper (2 pc)" 
                    price="17" />
                </div>
                : null }


                {/* makirolls */}
                {menu === "makirolls" ? 

                <div className='animate__animated animate__slideInRight'>
                    <div className='text-[100] text-[32px] font-[400] pl-12'>Cut maki rolls</div>
                    <MenuItem 
                    title="Avocado Roll (Vegetarian)" 
                    subTitle="avocado, sushi rice, nori (6 pc)" 
                    price="12" />
                    <MenuItem 
                    title="Tuna Roll" 
                    subTitle="big eye tuna, sushi rice, nori (6 pc)" 
                    price="13" />
                    <MenuItem 
                    title="Salmon Roll" 
                    subTitle="king salmon, sushi rice, nori (6 pc)" 
                    price="16" />
                    <MenuItem 
                    title="Cucumber Roll (Vegetarian)" 
                    subTitle="cucumber, sushi rice, nori (6 pc)" 
                    price="13" />
                </div>
                : null }

                {/* drinks */}
                {menu === "drinks" ? 

                <div className='animate__animated animate__slideInRight'>
                    <div className='text-[100] text-[32px] font-[400] pl-12'>Cut maki rolls</div>
                    <MenuItem 
                    title="Bottled Water" 
                    price="4" />
                    <MenuItem 
                    title="Coke" 
                    price="3" />
                    <MenuItem 
                    title="Diet Coke" 
                    price="3" />
                    <MenuItem 
                    title="Beer" 
                    price="7" />
                </div>
                : null } 
            </div>

            </div>

    </div>
  )
}

export default Menu
