"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormValidation = z.object({
  firstName: z.string(),
  phone: z.string(),
  email: z.string(),
  reason: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({ }) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      firstName: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <section className="flex h-full w-full items-center justify-center bg-[#000000]">
      <div className="flex h-full w-full flex-col gap-[2.5rem] px-0 pl-0 md:px-2">
        <div className="flex w-full flex-col lg:flex-row">
          <div
            style={{ backgroundImage: "url(/images/contact/contact.png)" }}
            className="flex h-screen w-full items-center justify-center lg:ml-[-10px] lg:w-1/2"
          >
            <div className="h-7/12 flex w-7/12 flex-col gap-16">
              <div className="flex w-full flex-col gap-10">
                <div className="flex w-full flex-col gap-2">
                  <p className="font-oswald text-7xl font-extralight">
                    Get in touch
                  </p>
                  <p className="text-sm font-light">
                    Use the form on the right to send us a message.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Icons.instagram />
                  <Icons.unknown />
                  <Icons.google />
                  <Icons.facebook />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Woring Hours</p>
                <div className="flex gap-7">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#b3b3aa]">Saturday</p>
                    <p className="text-[#b3b3aa]">Sunday</p>
                    <p className="text-[#b3b3aa]">Monday</p>
                    <p className="text-[#b3b3aa]">Tuesday</p>
                    <p className="text-[#b3b3aa]">Wednesday</p>
                    <p className="text-[#b3b3aa]">Thursday</p>
                    <p className="text-[#b3b3aa]">Friday</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>10AM- 8PM</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>10AM- 8PM</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>Closed</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>10AM- 8PM</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>10AM- 8PM</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>10AM- 8PM</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>10AM- 8PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#000000] pb-24 pt-5 lg:w-1/2 lg:items-center lg:justify-center">
            <div className="flex w-full flex-col gap-6 px-3 lg:w-3/5 lg:px-0">
              <div className="flex gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <MapPin className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    49 Allerton Rd, Liverpool L25
                    <br />
                    7RE Bavette Steak House
                  </p>
                  <p className="flex gap-2 text-sm text-[#b3b3aa]">
                    <span>Get Direction</span>
                    <MoveRight />
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <Phone className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>01512451500</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <Mail className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>bevwtteliverpool@yahoo.com</p>
                </div>
              </div>
            </div>
            <div className="w-full px-3 lg:w-3/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="min-w-[250px] h-12 rounded-lg border-none bg-[#222222] text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0 pl-8"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="min-w-[250px] h-12 rounded-lg border-none bg-[#222222] text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0 pl-8"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Email Address"
                                {...field}
                                className="min-w-[250px] h-12 rounded-lg border-none bg-[#222222] text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0 pl-8"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Reason for contacting (optional)"
                                {...field}
                                className="min-w-[250px] h-12 rounded-lg border-none bg-[#222222] text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0 pl-8"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="min-w-[250px] h-24 rounded-lg border-none bg-[#222222] text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0 pl-8"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col pt-7 lg:flex-row">
                    <Button className="w-full py-6">Contact US</Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// /images/contact/contact.png
