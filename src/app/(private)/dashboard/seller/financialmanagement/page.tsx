// import React from 'react'
// import RecentReserves from '@/components/ComponentsDashboards/ManagementSidbar/seller/Sellermanagereserves/Sellercomponent/cardsSellerDashboard/RecentReserves'
// import MiniCard from '@/components/ComponentsDashboards/ManagementSidbar/seller/Sellermanagereserves/Sellercomponent/cardsSellerDashboard/MiniCard'

// const dataMiniCard = [
//   { number: 115000000, title: " در آمد ماه جاری " },
//   { number:115000000 , title: "  در آمد ماه قبل" },
//   { number: 115000000, title: " در آمد کل " },
//   { number: 115000000, title: " موجودی قابل برداشت " },

// ]

// const financialmanagment = () => {
//   return (
//     <div className='bg-bgDash rounded-xl py-4 flex flex-col gap-8'>
//       <div className='w-full max-lg:flex-col flex flex-row gap-4 justify-between '>
//         {dataMiniCard.map((data, idx) => (
//             <MiniCard key={idx} {...data} idx={idx} />
//         ))}
//       </div>
//       <RecentReserves/>
//     </div>
//   )
// }


//       export default financialmanagment

import ComponentPayments from '@/components/ComponentsDashboards/ManagementSidbar/payments/ComponentPayments'
import MiniCardPayment from '@/components/ComponentsDashboards/ManagementSidbar/seller/Sellermanagereserves/Sellercomponent/cardsSellerDashboard/MiniCardPayment'
import React from 'react'


const dataMiniCard = [
  { number: 115000000, title: " در آمد ماه جاری " },
  { number:115000000 , title: "  در آمد ماه قبل" },
  { number: 115000000, title: " در آمد کل " },
  { number: 115000000, title: " موجودی قابل برداشت " },
]
const page = () => {
  return (
    <div className='bg-bgDash rounded-xl py-4 flex flex-col gap-8'>
      <div className='w-full max-lg:flex-col flex flex-row gap-4 justify-between '>
         {dataMiniCard.map((data, idx) => (
            <MiniCardPayment key={idx} {...data} idx={idx} />
        ))}
      </div>
      <ComponentPayments />
    </div>

  )
}

export default page
