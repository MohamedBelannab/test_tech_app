import React, { useEffect } from 'react'
import Layout from '../layouts/Layout'
import SectionOne from '../components/home/SectionOne'
import SectionTwo from '../components/home/SectionTwo'
import SectionThree from '../components/home/SectionThree'
import SectionFoor from '../components/home/SectionFoor'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../slices/ProductsSlice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  } , [])
  return (
    <Layout>
        <section className=' grid grid-cols-1 gap-y-10'>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFoor/>
        </section>
    </Layout>
    
  )
}

export default Home