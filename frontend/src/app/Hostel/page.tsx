"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast"




import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { text } from "stream/consumers";
import { Serializer } from "v8";



interface FormData {
    applicant_full_name: String,
    fathers_name:String,
    mothers_name: String,
    dob: String,
    gender:String,
    category: String,
    department: String,
    branch: String,
    semester_year: number,
    rollno: number,
    permanent_address:String,
    applicant_phone_number:String,
    applicant_father_phone_number:String,
    applicant_mother_phone_number:String,
    father_total_annual_income:String,
    father_occupation_name:String,
}

export default function Component() {


  const { toast } = useToast();
  const [BASEURL, setBASEURL] = useState("");

  const Getenv = async()=>{
    const response = await axios.post("/api/Getenv");
    console.log(response.data.env);
    await setBASEURL(response.data.env);
  }


  useEffect(() => {
    Getenv();
  }, []);


  const [formData, setFormData] = useState<FormData>({
    applicant_full_name: "",
    fathers_name:"",
    mothers_name: "",
    dob: "",
    gender:"",
    category: "",
    department: "",
    branch: "",
    semester_year: 0,
    rollno: 0,
    permanent_address:"",
    applicant_phone_number:"",
    applicant_father_phone_number:"",
    applicant_mother_phone_number:"",
    father_total_annual_income:"",
    father_occupation_name:"",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (id: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${BASEURL}api/hostel/`, formData);
  //     console.log(response);
  //     toast({
  //       title: "Successfully Registered",
  //       description: "You have successfully registered for hostel",});

  //   } catch (error)

  //   {
  //     const output = (error as any).response?.data;   
  //     toast({
  //       title: `${output[Object.keys(output)[0]][0]}`, 
  //       description: `${console.log(Object.keys(output)[0])}`,
  //     })
  //   }
  // };



    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/Hostel", formData);
      console.log(response);
      toast({
        title: "Successfully Registered",
        description: "You have successfully registered for hostel",});

    } catch (error)

    {
      const output = (error as any).response?.data;   
      toast({
        title: `${output[Object.keys(output)[0]][0]}`, 
        description: `${console.log(Object.keys(output)[0])}`,
      })
    }
  };





  const words = [{text: "Hostel"},{text:"Registration"},{text:"Portal"}];
  return (
    <div className="flex flex-col min-h-screen">


    <div className="text-center pt-10">
    <TypewriterEffect words={words}/>
    </div>


      <main className="flex-1">
        <section className="bg-white text-primary py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <form className="max-w-4xl mx-auto space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                
                


                <div>
                  <Label htmlFor="applicant_full_name">Full Name of Student</Label>
                  <Input id="applicant_full_name" placeholder="Enter your name" required onChange={handleChange} />
                </div>


                <div>
                  <Label htmlFor="fathers_name">Father's Name</Label>
                  <Input id="fathers_name" placeholder="Father's Name" required onChange={handleChange} />
                </div>


                <div>
                  <Label htmlFor="mothers_name">Mother's Name</Label>
                  <Input id="mothers_name" placeholder="Mother's Name" required onChange={handleChange} />
                </div>
                


                {/* Date of Birth Field */}
                <div>
                  <Label htmlFor="dob">Date of Birth (As Per 10th Certificate)</Label>
                  <Input className="w-full" id="dob" type="date" required onChange={handleChange} />
                </div>


                {/* Gender Selection */}
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select onValueChange={(value) => handleSelectChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Others">Others </SelectItem>
                    </SelectContent>
                  </Select>
                </div>



                {/*Category Selection */}
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GENERAL">General</SelectItem>
                      <SelectItem value="SC">Schedule Caste (SC)</SelectItem>
                      <SelectItem value="ST">Schedule Tribe (ST)</SelectItem>
                      <SelectItem value="OBC">Other Backward Class (OBC) </SelectItem>
                    </SelectContent>
                  </Select>
                </div>





                {/*Department Selection */}
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select onValueChange={(value) => handleSelectChange("department", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BTECH">B.TECH</SelectItem>
                      <SelectItem value="ITI">ITI</SelectItem>
                      <SelectItem value="POLYTECH ">POLYTECHNIC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>



                {/*Branch */}
                <div>
                  <Label htmlFor="branch">Branch</Label>
                  <Select onValueChange={(value) => handleSelectChange("branch", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CSE">CSE</SelectItem>
                      <SelectItem value="ECE">ECE</SelectItem>
                      <SelectItem value="EE">EE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>



                {/*semester_year */}
                <div>
                  <Label htmlFor="semester_year">Semester</Label>
                  <Select onValueChange={(value) => handleSelectChange("semester_year", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                    </SelectContent>
                  </Select>
                </div>





                {/* Roll Number */}
                <div>
                  <Label htmlFor="rollno">Roll Number</Label>
                  <Input id="rollno" type="number" placeholder="Roll Number" required onChange={handleChange} />
                </div>



                {/* Permanent Address Field */}
                <div>
                  <Label htmlFor="permanent_address">Permanent Address</Label>
                  <Textarea id="permanent_address" placeholder="Enter your permanent address" required onChange={handleChange} />
                </div>

                {/* Mobile Numbers Fields */}
                <div>
                  <Label htmlFor="applicant_phone_number">Applicant Mobile Number</Label>
                  <Input id="applicant_phone_number" type="tel" placeholder="Enter Mobile Number" required onChange={handleChange} />
                </div>



                {/* applicant_father_phone_number */}
                <div>
                  <Label htmlFor="applicant_father_phone_number">Father's Mobile Number</Label>
                  <Input id="applicant_father_phone_number" type="tel" placeholder="Enter Here" required onChange={handleChange} />
                </div>


                {/* applicant_mother_phone_number */}
                <div>
                  <Label htmlFor="applicant_mother_phone_number">Mother's Mobile Number</Label>
                  <Input id="applicant_mother_phone_number" type="tel" placeholder="Enter Here" required onChange={handleChange} />
                </div>



                {/* father_total_annual_income */}
                <div>
                  <Label htmlFor="father_total_annual_income">Father Total Annual Income</Label>
                  <Input id="father_total_annual_income" type="tel" placeholder="Enter Here" required onChange={handleChange} />
                </div>



                {/* father_occupation_name */}
                <div>
                  <Label htmlFor="father_occupation_name">Father Occupation</Label>
                  <Input id="father_occupation_name" type="tel" placeholder="Enter Here" required onChange={handleChange} />
                </div>



              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
