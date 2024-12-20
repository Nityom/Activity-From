"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../../components/ui/dialog"; // Ensure to import DialogTitle
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Check, X } from "lucide-react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useEffect, useState } from 'react';

const VisuallyHidden: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

const formSchema = z.object({
  addressLine1: z.string().min(1, "Address Line 1 is required."),
  addressLine2: z.string().optional(),
  zipCode: z.string().min(1, "Zip Code is required."),
  city: z.string().min(1, "City is required."),
  state: z.string().min(1, "State is required."),
  contactNumber: z.string().min(1, "Contact Number is required."),
  contactName: z.string().optional(),
});

export default function LocationFormComponent() {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      city: "",
      state: "",
      contactNumber: "",
      contactName: "",
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem('locationFormData');
    if (savedData) {
      form.reset(JSON.parse(savedData));
    }
  }, [form]);

  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem('locationFormData', JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const previousData = localStorage.getItem('formData');
    const previousFormData = previousData ? JSON.parse(previousData) : {};
    console.log("Form Data:", previousFormData, data);

    setShowSuccessModal(true);

    // Clear saved data in localStorage
    localStorage.removeItem('locationFormData');
    localStorage.removeItem('formData');

    // Reset the form fields
    form.reset({
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      city: "",
      state: "",
      contactNumber: "",
      contactName: "",
    });
  };

  const goToPreviousPage = () => {
    router.push("/activity");
  };

  return (
    <>
      <div className="m-10 w-[60vw]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <h1 className="font-bold text-2xl mb-1">Location Details</h1>
              <p className="text-sm text-gray-500 mb-4">
                Please specify the address where the activity takes place
              </p>
              <br />
              <FormField
                name="addressLine1"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      Address Line 1 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="House Number and Street Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
              <br />
              <FormField
                name="addressLine2"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Address Line 2</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Building Name, Landmark, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
              <br />
              <FormField
                name="zipCode"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      Zip Code <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 123 467" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
              <br />
              <div className="flex gap-4">
                <FormField
                  name="city"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-black">
                        City <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your City" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />
                <br />
                <FormField
                  name="state"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-black">
                        State <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your State" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <br />
            <hr className="border-gray-300" />
            <div>
              <h1 className="font-bold text-2xl mb-1">Contact Details</h1>
              <p className="text-sm text-gray-500 mb-4">
                Please provide contact information for this activity
              </p>
              <br />
              <div className="flex gap-4">
                <FormField
                  name="contactNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-black">
                        Contact Number <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <PhoneInput
                          country={'in'}
                          placeholder="Your Contact Number"
                          value={field.value}
                          onChange={(phone) => field.onChange(phone)}
                          inputStyle={{
                            width: '100%',
                            wordSpacing: '5px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                          }}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />
                <br />
                <FormField
                  name="contactName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-black">Contact Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Contact Name" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <br />
            <div className="flex gap-4 mt-4">
              <Button
                type="button"
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-2xl text-sm hover:text-white hover:bg-slate-800"
                onClick={goToPreviousPage}
              >
                Previous
              </Button>
              <Button
                type="submit"
                className="bg-slate-800 text-white py-2 px-4 rounded-2xl text-sm"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
        <br />
        <br />
        <hr className="border-gray-300" />
      </div>
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
  <DialogContent className="sm:max-w-md flex flex-col items-center p-8">
    <DialogTitle>
      <VisuallyHidden>Form Submission Success</VisuallyHidden>
    </DialogTitle>
    <button
      onClick={() => setShowSuccessModal(false)}
      className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
    >
      <X className="h-4 w-4" />
      <VisuallyHidden>Close</VisuallyHidden>
    </button>

    {/* Outer purple circle */}
    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-100">
      {/* Inner green circle for the check mark */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-400">
        <Check className="h-12 w-12 text-green-100" /> {/* Increased size and changed color */}
      </div>
    </div>

    <h2 className=" text-lg font-semibold text-gray-900">Form Submitted</h2>
  </DialogContent>
</Dialog>

    </>
  );
}
