"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { FormControl } from "./ui/form"; // Ensure this component is correctly defined
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const ActivityForm: React.FC = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const [formData, setFormData] = useState({
    activityName: "",
    category: "",
    description: "",
    activityType: "indoor",
    locationType: "provider",
    minMembers: "",
    maxMembers: "",
  });

  const onSubmit = (data: any) => {
    console.log("Form data submitted:", data);
    // Handle form submission logic here (e.g., API call)
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <FormProvider {...methods}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create New Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Wrap all form controls in a single div */}
            <div>
              <FormControl>
                <Label htmlFor="activityName">Activity Name</Label>
                <Input
                  id="activityName"
                  name="activityName"
                  value={formData.activityName}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <Label>Select the best category to describe your activity</Label>
                <RadioGroup
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <div>
                    <RadioGroupItem value="sports" id="category-sports" />
                    <Label htmlFor="category-sports">Sports</Label>
                  </div>
                  <div>
                    <RadioGroupItem value="music" id="category-music" />
                    <Label htmlFor="category-music">Music</Label>
                  </div>
                  <div>
                    <RadioGroupItem value="education" id="category-education" />
                    <Label htmlFor="category-education">Education</Label>
                  </div>
                  {/* Add more categories as needed */}
                </RadioGroup>
              </FormControl>

              <FormControl>
                <Label htmlFor="description">About the Activity</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <Label>Please select the activity type</Label>
                <RadioGroup
                  value={formData.activityType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, activityType: value })
                  }
                >
                  <div>
                    <RadioGroupItem value="indoor" id="activityType-indoor" />
                    <Label htmlFor="activityType-indoor">Indoor</Label>
                  </div>
                  <div>
                    <RadioGroupItem value="outdoor" id="activityType-outdoor" />
                    <Label htmlFor="activityType-outdoor">Outdoor</Label>
                  </div>
                  <div>
                    <RadioGroupItem value="virtual" id="activityType-virtual" />
                    <Label htmlFor="activityType-virtual">Virtual</Label>
                  </div>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <Label>Please select the type of location</Label>
                <RadioGroup
                  value={formData.locationType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, locationType: value })
                  }
                >
                  <div>
                    <RadioGroupItem value="provider" id="locationType-provider" />
                    <Label htmlFor="locationType-provider">Provider</Label>
                  </div>
                  <div>
                    <RadioGroupItem value="user" id="locationType-user" />
                    <Label htmlFor="locationType-user">User</Label>
                  </div>
                </RadioGroup>
              </FormControl>

              <div className="flex gap-4">
                <FormControl>
                  <Label htmlFor="minMembers">Minimum Members</Label>
                  <Input
                    id="minMembers"
                    name="minMembers"
                    type="number"
                    value={formData.minMembers}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <Label htmlFor="maxMembers">Maximum Members</Label>
                  <Input
                    id="maxMembers"
                    name="maxMembers"
                    type="number"
                    value={formData.maxMembers}
                    onChange={handleChange}
                  />
                </FormControl>
              </div>
            </div>

            <Button type="submit">Save and Continue</Button>
          </form>
        </CardContent>
      </Card>
    </FormProvider>
  );
};

export default ActivityForm;
