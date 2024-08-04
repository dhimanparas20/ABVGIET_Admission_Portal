"use client"
import { Button } from '@/components/ui/button';
import {Input} from '@/components/ui/input';
;import {Label} from '@/components/ui/label';
;import {Textarea} from '@/components/ui/textarea';
import React from 'react'

const Contact = () => {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="max-w-xl mx-auto space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </section>
  )
}

export default Contact