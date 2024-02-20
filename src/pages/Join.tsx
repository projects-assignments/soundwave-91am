import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export const Join = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="flex justify-center items-center space-x-36 mt-24 relative">
      <div className="h-[550px] w-[550px] z-1 left-[-100px] bottom-[-200px] absolute rounded-full bg-[#bc3a7f25]"></div>
      <div className="h-[450px] w-[450px] z-[-40] left-[150px] bottom-[+270px] absolute rounded-full bg-[#303047]"></div>
      <h1 className="text-5xl">
        JOIN THE <span className="text-pink-700">FUN</span>
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 bg-[#1E1D20] w-[450px] h-[350px] rounded-3xl"
        >
          <div className="flex flex-col items-center space-y-8 py-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-96 bg-secondary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default Join;