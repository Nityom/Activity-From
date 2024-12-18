import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { FormControl } from './ui/form';
import {Label} from '@/components/ui/label';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';


interface ActivityFormProps {
    onSubmit: (data: { [key: string]: string }) => void;
  }
  
  const ActivityForm: React.FC<ActivityFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = React.useState({
      activityName: '',
      category: '',
      description: '',
      activityType: 'indoor',
      locationType: 'provider',
      minMembers: '',
      maxMembers: '',
    });
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(formData);
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create new Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Label htmlFor="activityName">Activity Name</Label>
              <Input id="activityName" name="activityName" value={formData.activityName} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label>Select the best category to describe your activity</Label>
              <RadioGroup value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                {/* Add radio buttons for each category */}
              </RadioGroup>
            </FormControl>
            <FormControl>
              <Label htmlFor="description">About the Activity</Label>
              <Textarea id="description" name="description" value={formData.description} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <Label>Please select the activity type</Label>
              <RadioGroup value={formData.activityType} onValueChange={(value) => setFormData({ ...formData, activityType: value })}>
                <RadioGroupItem value="indoor" />
                <RadioGroupItem value="outdoor" />
                <RadioGroupItem value="virtual" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <Label>Please select the type of location</Label>
              <RadioGroup value={formData.locationType} onValueChange={(value) => setFormData({ ...formData, locationType: value })}>
                <RadioGroupItem value="provider" />
                <RadioGroupItem value="user" />
              </RadioGroup>
            </FormControl>
            <div className="flex gap-4">
              <FormControl>
                <Label htmlFor="minMembers">Minimum Members</Label>
                <Input id="minMembers" name="minMembers" type="number" value={formData.minMembers} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <Label htmlFor="maxMembers">Maximum Members</Label>
                <Input id="maxMembers" name="maxMembers" type="number" value={formData.maxMembers} onChange={handleChange} />
              </FormControl>
            </div>
            <Button type="submit">Save and Continue</Button>
          </form>
        </CardContent>
      </Card>
    );
  };
  
  export default ActivityForm;