import React from 'react'

export default function Testimonial() {
  return (

<section class="bg-white text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold mb-8 text-black text-center">What our mentees are saying</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white shadow rounded-lg p-8">
                <p class="text-gray-700 mb-4">"This app has been a game changer for me! I highly recommend it to anyone
                    looking for experienced people to guide them in their workflow."</p>
                <p class="text-gray-700 font-medium">- John Doe, CEO</p>
            </div>
            <div class="bg-white shadow rounded-lg p-8">
                <p class="text-gray-700 mb-4">"I've tried a lot of different apps, but this one really stands out. It's
                    so easy to use, and the features are exactly what I need."</p>
                <p class="text-gray-700 font-medium">- Jane Smith, Designer</p>
            </div>
            <div class="bg-white shadow rounded-lg p-8">
                <p class="text-gray-700 mb-4">"I love how customizable this app is. I can really make it work for me, no
                    matter who I am looking for."</p>
                <p class="text-gray-700 font-medium">- Bob Johnson, Developer</p>
            </div>
        </div>
    </div>
</section>
  )
}
