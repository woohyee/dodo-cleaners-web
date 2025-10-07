'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Image from 'next/image'
import { supabase } from '../../lib/supabase'
import { CustomerRegistration } from '../../types/stamp'
import CustomerForm from '../components/stamp/CustomerForm'
import Fireworks from '../components/stamp/Fireworks'
import CountUp from '../components/stamp/CountUp'

export default function EventPage() {
  const [completed, setCompleted] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleRegistration = async (customerData: CustomerRegistration) => {
    setLoading(true)
    setError(null)

    try {
      // 중복 체크
      const { data: existingCustomer } = await supabase
        .from('customers')
        .select('id, name')
        .eq('phone', customerData.phone)
        .single()

      if (existingCustomer) {
        setError(`${existingCustomer.name}님은 이미 등록되어 있습니다.`)
        setLoading(false)
        return
      }

      // 새 고객 등록
      const { data: newCustomer, error: customerError } = await supabase
        .from('customers')
        .insert([{
          name: customerData.name,
          phone: customerData.phone,
          email: customerData.email,
          stamps: 1, // 이벤트 참여 스탬프 1개
          vip_status: false
        }])
        .select()
        .single()

      if (customerError) throw customerError

      // 스탬프 기록 추가
      const { error: stampError } = await supabase
        .from('stamps')
        .insert([{
          customer_id: newCustomer.id,
          amount: 0 // 이벤트 스탬프는 금액 0
        }])

      if (stampError) throw stampError

      setCustomerName(customerData.name)
      setCompleted(true)
    } catch (error) {
      console.error('Registration error:', error)
      setError('등록 중 오류가 발생했습니다. 다시 시도해주세요.')
    }

    setLoading(false)
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-red-600 text-xl mb-4">Error Occurred</div>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => {
                setError(null)
                setCompleted(false)
                setCustomerName('')
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-1 py-0">
        <div className="w-full max-w-sm mx-auto h-screen flex flex-col">
          <div className="bg-white rounded-2xl shadow-xl px-6 py-0 text-center border border-blue-100 flex-1 flex flex-col relative">
            <div className="absolute top-6 left-6 z-50">
              <p className="text-base text-blue-800 font-bold bg-white/90 px-2 py-1 rounded">
                dodo cleaners
              </p>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto relative mb-4">
                  <Image
                    src="/dodologo.jpg"
                    alt="Dodo Cleaners Logo"
                    width={128}
                    height={128}
                    className="rounded-full shadow-lg object-cover"
                  />
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <Fireworks show={true} duration={4000} />
                <div className="text-center mb-4 mt-8">
                  <h1 className="text-2xl font-bold mb-2 text-blue-600 animate-bounce">
                    🎊 Welcome to Event! 🎊
                  </h1>
                  <h2 className="text-xl font-bold mb-1 text-indigo-600">
                    Registration Complete!
                  </h2>
                  <p className="text-gray-700 mb-2 text-base font-medium">
                    Welcome {customerName}! ✨
                  </p>
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-300 rounded-lg p-4 mb-3">
                    <p className="text-blue-700 font-bold text-lg mb-2">
                      🏆 Event Stamp Earned! 🏆
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-blue-600">
                        <CountUp from={0} to={1} duration={2000} />
                      </span>
                    </div>
                    <p className="text-base text-indigo-600 mt-2 font-medium">
                      Thank you for joining! 🌟
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      정식 오픈: 10월 1일 🚀
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => window.close()}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 font-medium shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-1 py-0">
      <div className="w-full max-w-sm mx-auto h-screen flex flex-col">
        <div className="bg-white rounded-2xl shadow-xl px-6 py-0 border border-blue-100 flex-1 flex flex-col relative">
          <div className="absolute top-6 left-6 z-50">
            <p className="text-base text-blue-800 font-bold bg-white/90 px-2 py-1 rounded">
              dodo cleaners
            </p>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-4">
              <div className="w-32 h-32 mx-auto relative mb-4">
                <Image
                  src="/dodologo.jpg"
                  alt="Dodo Cleaners Logo"
                  width={128}
                  height={128}
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
            </div>
            
            <div className="text-center px-4">
              <div className="mb-6">
                <h1 className="text-xl font-bold text-center mb-2 text-blue-800">
                  🎉 사전 등록 이벤트 🎉
                </h1>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-lg p-3 mb-4">
                  <p className="text-blue-700 font-bold text-sm mb-1">
                    10월 1일 정식 오픈 기념!
                  </p>
                  <p className="text-blue-600 text-xs">
                    지금 등록하면 스탬프 1개 무료 증정! 🎁
                  </p>
                </div>
                <p className="text-center text-gray-600 mb-4 text-sm">
                  Enter your information to join our event
                </p>
              </div>
              
              <CustomerForm onSubmit={handleRegistration} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}