"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
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
import { Input } from "../../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";

// Define form validation schema using Zod
const formSchema = z.object({
  activityName: z.string().min(1, "Activity name is required."),
  selectedCategory: z.string().min(1, "Please select a category."),
  otherCategory: z.string().optional(),
  activityDescription: z.string().min(1, "Activity description is required."),
  activityType: z.string().min(1, "Please select the activity type."),
  locationType: z.string().min(1, "Please select the location type."),
  minParticipants: z
    .string()
    .min(1, "Minimum number of participants is required.")
    .refine((val) => !isNaN(Number(val)), "Must be a number."),
  maxParticipants: z
    .string()
    .min(1, "Maximum number of participants is required.")
    .refine((val) => !isNaN(Number(val)), "Must be a number."),
});

// Form component
export default function FormComponent() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      activityName: "",
      selectedCategory: "",
      otherCategory: "",
      activityDescription: "",
      activityType: "",
      locationType: "",
      minParticipants: "",
      maxParticipants: "",
    },
  });

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData") || "{}");
    form.reset({ ...form.getValues(), ...savedData });
  }, [form]); // Include 'form' in the dependency array

  // Handle form submission
  interface FormData {
    activityName: string;
    selectedCategory: string;
    otherCategory?: string;
    activityDescription: string;
    activityType: string;
    locationType: string;
    minParticipants: string;
    maxParticipants: string;
  }

  const onSubmit = (data: FormData) => {
    // Save form data to localStorage
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
    router.push('/location');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="m-10 flex flex-col w-[60vw] gap-4"
      >
        <h1 className="text-2xl font-bold">Activity Details</h1>

        {/* Activity Name */}
        <FormField
          name="activityName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                Activity name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g., Cooking class in Palo Alto" {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        {/* Category */}
        <FormField
          name="selectedCategory"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                Select the best category to describe your activity <span className="text-red-500">*</span>
              </FormLabel>
              <RadioGroup
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              >
                {[
                  "Adventure & Games",
                  "Creative Expression",
                  "Food & Drink",
                  "Learning & Development",
                  "Sports and Fitness",
                  "Volunteering",
                  "Other",
                ].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <RadioGroupItem value={category} id={category} />
                    <FormLabel htmlFor={category} className="text-gray-600">
                      {category}
                    </FormLabel>
                  </div>
                ))}
              </RadioGroup>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        {/* Other Category */}
        {form.watch("selectedCategory") === "Other" && (
          <FormField
            name="otherCategory"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Specify the Category</FormLabel>
                <FormControl>
                  <Input placeholder="Specify the Category" {...field} />
                </FormControl>
                <FormMessage className="text-red-500 text-sm" />
              </FormItem>
            )}
          />
        )}

        {/* Activity Description */}
        <FormField
          name="activityDescription"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                About the Activity <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Activity Description" {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        {/* Activity Type */}
        <FormField
          name="activityType"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                Please select the Activity Type <span className="text-red-500">*</span>
              </FormLabel>
              <RadioGroup
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              >
                {["Indoor", "Outdoor", "Virtual"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <FormLabel htmlFor={type} className="text-gray-600">
                      {type}
                    </FormLabel>
                  </div>
                ))}
              </RadioGroup>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        {/* Location Type */}
        <FormField
          name="locationType"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">
                Please select the type of location <span className="text-red-500">*</span>
              </FormLabel>
              <RadioGroup
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
              >
                {["Provider Location", "User Location"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <FormLabel htmlFor={type} className="text-gray-600">
                      {type}
                    </FormLabel>
                  </div>
                ))}
              </RadioGroup>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        {/* Participants */}
        <FormItem className="flex flex-col gap-2">
          <FormLabel className="text-black">
            How many members can take part in the activity <span className="text-red-500">*</span>
          </FormLabel>
          <div className="flex gap-4">
            <FormField
              name="minParticipants"
              control={form.control}
              render={({ field }) => (
                <div className="flex-1"> {/* Wrapping div for flex behavior */}
                  <FormControl>
                    <Input placeholder="Minimum Numbers" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </div>
              )}
            />
            <FormField
              name="maxParticipants"
              control={form.control}
              render={({ field }) => (
                <div className="flex-1"> {/* Wrapping div for flex behavior */}
                  <FormControl>
                    <Input placeholder="Maximum Numbers" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </div>
              )}
            />
          </div>
        </FormItem>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-[200px] h-[45px] rounded-3xl text-white bg-slate-800 hover:bg-slate-600"
        >
          Save and Continue
        </Button>
      </form>
    </Form>
  );
}
