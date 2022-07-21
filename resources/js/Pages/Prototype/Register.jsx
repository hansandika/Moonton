import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { Link, Head } from "@inertiajs/inertia-react";
import { Fragment } from "react";

export default function Register() {
    return (
        <Fragment>
            <Head title="Sign Up" />
            <div className="min-h-screen px-3 mx-auto text-white bg-black max-w-screen md:px-10">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label forInput="fullname">Full Name</Label>
                                    <Input
                                        type="text"
                                        name="fullname"
                                        placeholder="Your fullname..."
                                        defaultValue="Angga React"
                                    />
                                </div>
                                <div>
                                    <Label forInput="email">
                                        Email Address
                                    </Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        value="anggaforreact@fb.com"
                                    />
                                </div>
                                <div>
                                    <Label forInput="password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        value="eeeeeeeeeeeeeee"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Link href={route("prototype.login")}>
                                    <Button variant="light-outline">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                                {/* <!-- <button type="submit" class="rounded-2xl bg-alerange py-[13px] text-center">
                          <span class="text-base font-semibold">
                              Sign Up
                          </span>
                      </button> --> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
