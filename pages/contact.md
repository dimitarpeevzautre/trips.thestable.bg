---
layout: page
title: "Contact Us"
permalink: /contact/
description: "Get in touch with The Stable team for camper journey bookings and inquiries"
---

## Get In Touch

We'd love to hear from you! Whether you have questions about our camper journeys, want to book an adventure, or just want to chat about exploring Bulgaria, we're here to help.

<div class="grid md:grid-cols-2 gap-12 mt-8">
    <div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
        
        <form class="space-y-6" action="#" method="POST">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input type="text" id="name" name="name" required 
                       class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            </div>
            
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" id="email" name="email" required 
                       class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            </div>
            
            <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" 
                       class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            </div>
            
            <div>
                <label for="trip" class="block text-sm font-medium text-gray-700 mb-2">Interested Journey</label>
                <select id="trip" name="trip" 
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select a journey (optional)</option>
                    {% for trip in site.trips %}
                    <option value="{{ trip.title }}">{{ trip.title }}</option>
                    {% endfor %}
                    <option value="custom">Custom journey request</option>
                </select>
            </div>
            
            <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" name="message" rows="5" required 
                          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Tell us about your travel interests, experience with camper travel, any questions..."></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary w-full">
                Send Message
            </button>
        </form>
    </div>
    
    <div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
        
        <div class="space-y-6">
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-lg">📧</span>
                </div>
                <div>
                    <h4 class="font-semibold text-gray-900">Email</h4>
                    <p class="text-gray-600">journeys@thestable.bg</p>
                    <p class="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
            </div>
            
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-lg">📞</span>
                </div>
                <div>
                    <h4 class="font-semibold text-gray-900">Phone</h4>
                    <p class="text-gray-600">+359 XXX XXX XXX</p>
                    <p class="text-sm text-gray-500">Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
                </div>
            </div>
            
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-lg">📍</span>
                </div>
                <div>
                    <h4 class="font-semibold text-gray-900">Address</h4>
                    <p class="text-gray-600">Sofia, Bulgaria</p>
                    <p class="text-sm text-gray-500">Meeting point details provided upon booking</p>
                </div>
            </div>
            
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-lg">💬</span>
                </div>
                <div>
                    <h4 class="font-semibold text-gray-900">Social Media</h4>
                    <div class="flex gap-3 mt-2">
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">Facebook</a>
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">Instagram</a>
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">YouTube</a>
                    </div>
                    <p class="text-sm text-gray-500">Follow us for trip updates and photos</p>
                </div>
            </div>
        </div>
        
        <div class="mt-8 p-6 bg-gray-50 rounded-xl">
            <h4 class="font-semibold text-gray-900 mb-3">Journey Support</h4>
            <p class="text-sm text-gray-600 mb-2">
                During journeys, our guides carry GPS devices and maintain constant communication with our base.
            </p>
            <p class="text-sm text-gray-600">
                <strong>24/7 Support Line:</strong> +359 XXX XXX XXX
            </p>
        </div>
    </div>
</div>

## Frequently Asked Questions

<div class="mt-12 space-y-6">
    <div class="border-b border-gray-200 pb-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-2">How do I book a journey?</h4>
        <p class="text-gray-600">You can book by contacting us through this form, email, or phone. We'll send you a booking confirmation with payment details and journey preparation information.</p>
    </div>
    
    <div class="border-b border-gray-200 pb-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-2">What's included in the journey price?</h4>
        <p class="text-gray-600">Each journey page lists exactly what's included and excluded. Generally, we include guide services, camper rental, fuel, accommodations, and meals as specified. Personal items and drinks are typically not included.</p>
    </div>
    
    <div class="border-b border-gray-200 pb-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-2">What if I need to cancel?</h4>
        <p class="text-gray-600">Our cancellation policy varies by journey type and timing. Generally, cancellations more than 14 days before the journey receive a full refund minus administrative fees. Contact us for specific details.</p>
    </div>
    
    <div class="border-b border-gray-200 pb-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-2">Do you offer custom journeys?</h4>
        <p class="text-gray-600">Absolutely! We love creating custom camper adventures for groups, families, or individuals with specific destinations in mind. Contact us to discuss your ideas and we'll create something special for you.</p>
    </div>
    
    <div class="pb-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-2">Do I need camper experience?</h4>
        <p class="text-gray-600">Not at all! Our journeys are designed for all experience levels. Our guides handle the driving and route planning, while you enjoy the scenery and experiences. We provide orientation on camper facilities at the start of each journey.</p>
    </div>
</div>

---

**Ready for your next Bulgarian adventure?** We can't wait to explore Bulgaria's diverse regions and hidden gems with you!
