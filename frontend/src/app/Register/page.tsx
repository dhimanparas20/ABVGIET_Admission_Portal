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

interface FormData {
    first_name: String,
    last_name:String,
    email: String,
    branch: String,
    fathers_name: String,
    mothers_name: String,
    dob: String,
    gender: String,
    admission_based_on: String,
    marks_scored: number,
    percentage_scored:String,
    category: String,
    subcategory:String,
    matric_marks_percentage: String,
    twelfth_marks: String,
    aadhaar_no: number,
    bank_account_no: number,
    bank_account_holder_name:String,
    bank_branch: String,
    bank_ifsc: String,
    permanent_address: String,
    father_phone_number: String,
    mother_phone_number: String,
    candidate_phone_number: String,
    round: number,
    want_hostel:boolean,
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
    first_name: "",
    last_name:"",
    email: "",
    branch: "",
    fathers_name: "",
    mothers_name: "",
    dob: "",
    gender: "",
    admission_based_on: "",
    marks_scored: 0,
    percentage_scored:"",
    category: "",
    subcategory:"",
    matric_marks_percentage: "",
    twelfth_marks: "",
    aadhaar_no: 0,
    bank_account_no: 0,
    bank_account_holder_name:"",
    bank_branch: "",
    bank_ifsc: "",
    permanent_address: "",
    father_phone_number: "",
    mother_phone_number: "",
    candidate_phone_number: "",
    round: 0,
    want_hostel:false,
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



  //Old method

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${BASEURL}api/user/`, formData);
  //     console.log(response);
  //     toast({
  //       title: "Successfully Registered",
  //       description: "You have Successfully Registered for College",});

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
      const response = await axios.post("/api/Register", formData);
      console.log(response);
      toast({
        title: "Successfully Registered",
        description: "You have successfully registered for College",});

    } catch (error)

    {
      const output = (error as any).response?.data;   
      toast({
        title: `${output[Object.keys(output)[0]][0]}`, 
        description: `${console.log(Object.keys(output)[0])}`,
      })
    }
  };



  const words = [{text: "Student"},{text:"Registration"},{text:"Portal"}];
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
                  <Label htmlFor="first_name">First Name of Candidate (As Per 10th Certificate)</Label>
                  <Input id="first_name" placeholder="Enter your name" required onChange={handleChange} />
                </div>


                <div>
                  <Label htmlFor="last_name">Last Name of Candidate (As Per 10th Certificate)</Label>
                  <Input id="last_name" placeholder="Enter your name" required onChange={handleChange} />
                </div>

                
                
                {/* Email Field */}
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required onChange={handleChange} />
                </div>
                
                {/* Branch Selection */}
                <div>
                  <Label htmlFor="branch">Branch</Label>
                  <Select onValueChange={(value) => handleSelectChange("branch", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CSE">Computer Science and Engineering</SelectItem>
                      <SelectItem value="ECE">Electronics and Communication Engineering</SelectItem>
                      <SelectItem value="EE">Electrical Engineering</SelectItem>
 
                    </SelectContent>
                  </Select>
                </div>

                {/* Name Field */}
                

                {/* Father's Name Field */}
                <div>
                  <Label htmlFor="fathers_name">Father Name</Label>
                  <Input id="fathers_name" placeholder="Enter your father's name" required onChange={handleChange} />
                </div>

                {/* Mother's Name Field */}
                <div>
                  <Label htmlFor="mothers_name">Mother Name</Label>
                  <Input id="mothers_name" placeholder="Enter your mother's name" required onChange={handleChange} />
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

                {/* Admission Based On Selection */}
                <div>
                  <Label htmlFor="admission_based_on">Admission Based On</Label>
                  <Select onValueChange={(value) => handleSelectChange("admission_based_on", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select admission basis" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="JEE">JEE Main</SelectItem>
                      <SelectItem value="HPCET">HP-CET</SelectItem>
                      <SelectItem value="SeniorSecondary">12th</SelectItem>
                      <SelectItem value="LEET">LEET</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Marks Scored Field */}
                <div>
                  <Label htmlFor="marks_scored">Enter Marks Scored in Above Category</Label>
                  <Input id="marks_scored" type="number" placeholder="Enter marks" required onChange={handleChange} />
                </div>


                {/* Percentage Scored */}
                <div>
                  <Label htmlFor="percentage_scored">Enter Percentage Scored in Above Category</Label>
                  <Input id="percentage_scored" type="number" placeholder="Enter Percentage" required onChange={handleChange} />
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





                {/*Sub Category Selection */}
                <div>
                  <Label htmlFor="subcategory">Sub Category</Label>
                  <Select onValueChange={(value) => handleSelectChange("subcategory", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Main_AIQ">Main AIQ</SelectItem>
                      <SelectItem value="TFW">TFW</SelectItem>
                      <SelectItem value="BHA">BHA</SelectItem>
                      <SelectItem value="DEF">Defence (DEF)</SelectItem>
                      <SelectItem value="BPL">BPL</SelectItem>
                      <SelectItem value="IRDP">IRDP</SelectItem>
                      <SelectItem value="BA">BACKWARD AREA (BA)</SelectItem>
                      <SelectItem value="PC/PH">PHYSICALLY HANDICAPPED (PC/PH)</SelectItem>
                      <SelectItem value="FF">FREEDOM FIGHTER</SelectItem>
                      <SelectItem value="SPT">SPORTS (SPT)</SelectItem>
                      <SelectItem value="KM">Kashmiri Migrant (KM)</SelectItem>
                      <SelectItem value="EWS">EWS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 10th Marks Field */}
                <div>
                  <Label htmlFor="matric_marks_percentage">10th Marks (in Percentage)</Label>
                  <Input id="matric_marks_percentage" type="number" placeholder="Enter 10th marks" required onChange={handleChange} />
                </div>

                {/* 12th Marks Field */}
                <div>
                  <Label htmlFor="twelfth_marks">12th Marks (in Percentage)</Label>
                  <Input id="twelfth_marks" type="number" placeholder="Enter 12th marks" required onChange={handleChange} />
                </div>

                {/* Aadhaar Number Field */}
                <div>
                  <Label htmlFor="aadhaar_no">Aadhaar Number</Label>
                  <Input id="aadhaar_no" placeholder="Enter your Aadhaar number" required onChange={handleChange} />
                </div>

                {/* Bank Details Fields */}
                <div>
                  <Label htmlFor="bank_account_no">Bank Account No. Detail</Label>
                    <div className="space-y-2">
                        <Input id="bank_account_no" placeholder="Account Number" required onChange={handleChange} />
                    </div>
                </div>


                {/* bank_account_holder_name */}
                <div>
                  <Label htmlFor="bank_account_holder_name">Bank Account Name</Label>
                    <div className="space-y-2">
                        <Input id="bank_account_holder_name" placeholder="Account Holder Name" required onChange={handleChange} />
                    </div>
                </div>



                {/* bank_branch */}
                <div>
                  <Label htmlFor="bank_branch">Bank Branch</Label>
                    <div className="space-y-2">
                        <Input id="bank_branch" placeholder="Account Branch" required onChange={handleChange} />
                    </div>
                </div>



                {/* bank_ifsc */}
                <div>
                  <Label htmlFor="bank_ifsc">Bank IFSC</Label>
                    <div className="space-y-2">
                        <Input id="bank_ifsc" placeholder="IFSC Code" required onChange={handleChange} />
                    </div>
                </div>


                {/* Permanent Address Field */}
                <div>
                  <Label htmlFor="permanent_address">Permanent Address</Label>
                  <Textarea id="permanent_address" placeholder="Enter your permanent address" required onChange={handleChange} />
                </div>

                {/* Mobile Numbers Fields */}
                <div>
                  <Label htmlFor="father_phone_number">Father's Mobile Number</Label>
                  <Input id="father_phone_number" type="tel" placeholder="Enter father's mobile number" required onChange={handleChange} />
                </div>

                <div>
                  <Label htmlFor="mother_phone_number">Mother's Mobile Number</Label>
                  <Input id="mother_phone_number" type="tel" placeholder="Enter mother's mobile number" required onChange={handleChange} />
                </div>

                <div>
                  <Label htmlFor="candidate_phone_number">Candidate's Mobile Number</Label>
                  <Input id="candidate_phone_number" type="tel" placeholder="Enter candidate's mobile number" required onChange={handleChange} />
                </div>

                {/* Round Selection */}
                <div>
                  <Label htmlFor="round">Round</Label>
                  <Select onValueChange={(value) => handleSelectChange("round", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select round" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st</SelectItem>
                      <SelectItem value="2">2nd</SelectItem>
                      <SelectItem value="3">3rd</SelectItem>
                      <SelectItem value="4">4th (Spot Error)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Hostel Selection */}
                <div>
                    <Label htmlFor="want_hostel">Want Hostel (Girls Only) </Label>
                    <Select onValueChange={(value) => handleSelectChange("want_hostel", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Choice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Yes</SelectItem>
                      <SelectItem value="false">No</SelectItem>
                    </SelectContent>
                  </Select>
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
