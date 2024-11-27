import { data } from '@/app/data';
import React from 'react'

export default function page({params}) {
    console.log(params)
    const service = data.find((service) => service.id === params.id);
  return (
    <div>page</div>
  )
}
