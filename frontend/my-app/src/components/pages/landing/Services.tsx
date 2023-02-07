import React from 'react'

const Services = () => {
  return (
    <div className='services'>
        <div className='food_order'>
            <div className='order-img'></div>
            <div className='order-details'>Feed your employees</div>
            <div className='order-link'><a href='none'>Create a business account</a></div>
        </div>
        <div className='food_sell'>
          <div className='order-img'></div>
          <div className='order-details'>Your restaurant, Delivered</div>
          <div className='order-link'><a href='Register'>Add your restaurant</a></div>
        </div>
        <div className='food_deliver'>
          <div className='order-img'></div>
          <div className='order-details'>Deliver with vymo eats</div>
          <div className='order-link'><a href='none'>Sign up to deliver</a></div>
        </div>
    </div>
  )
}

export default Services