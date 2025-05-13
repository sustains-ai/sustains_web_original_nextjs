'use client';
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { LoadingIndicator } from "../common/components/LoadingIndicator/LoadingIndicator";

import React from 'react';

function JobPosting() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-grey-800">Frontend Developer - Internship</h1>

      <section className="mb-8">
        <p className="text-lg">
          The ideal candidate will be responsible for designing, developing, testing, and debugging responsive web and mobile applications for the company. Using JavaScript, HTML, and CSS, this candidate should be able to translate user and business needs into functional front-end design.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Responsibilities:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Improve the UI of our web apps (Entropy & Sandbox) using HTML, CSS, and JavaScript to ensure a smooth, modern user experience.</li>
          <li>Enhance and maintain our company website (built with Next.js) using responsive designs with React, HTML, and CSS.</li>
          <li>Collaborate with backend developers to integrate front-end templates with Django views and models.</li>
          <li>Revamp existing pages and forms to improve usability and visual appeal.</li>
          <li>Troubleshoot and resolve front-end issues across various devices and browsers.</li>
          <li>Participate in code reviews and contribute to ongoing UI/UX improvements.</li>
          <li>Work closely with the Director of Engineering for feedback and alignment.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Requirements:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Current student or recent graduate in Computer Science, Web Development, or a related field.</li>
          <li>Solid understanding of HTML, CSS, and JavaScript for front-end development.</li>
          <li>Basic experience with React and familiarity with Next.js.</li>
          <li>Familiarity with Git and version control workflows.</li>
          <li>Strong attention to detail and a passion for clean, user-friendly interfaces.</li>
          <li>Self-motivated and able to manage time independently in a remote setting.</li>
          <li>Availability of 20-30 hours per week.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Nice-to-Have:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Experience with Django template integration or a willingness to learn quickly.</li>
          <li>Exposure to CSS frameworks like Bootstrap or similar tools.</li>
          <li>Interest in sustainability, AI, or tech solutions for finance and energy sectors.</li>
        </ul>
      </section>
    </div>
  );
}

export default function Careers() {
    const [state, setState] = useState("")
    const [form, setForm] = useState<any>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedin: "",
        resume: null,
        summary: "",
        privacyAccepted: false
    });

    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: any) => {
        const { name, value, type, checked, files } = e.target;
        setForm((prev: any) => ({
            ...prev,
            [name]: type === "checkbox"
                ? checked
                : type === "file"
                    ? files[0]
                    : value
        }));
    };

    const validateForm = () => {
        const newErrors: any = {};
        if (!form.firstName.trim()) newErrors.firstName = "• First name is required.";
        if (!form.lastName.trim()) newErrors.lastName = "• Last name is required.";
        if (!form.email.trim()) newErrors.email = "• Email is required.";
        if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "• Invalid email format.";
        if (!form.phone.trim()) newErrors.phone = "• Phone is required.";
        if (!form.linkedin.trim()) newErrors.linkedin = "• LinkedIn URL is required.";
        if (!form.resume) newErrors.resume = "• Resume is required.";
        if (!form.privacyAccepted) newErrors.privacyAccepted = "• You must accept the privacy policy.";
        return newErrors;
    };

    const getPresignedUrl = async () => {
        const res = await fetch("https://api.uploadthing.com/v6/uploadFiles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-uploadthing-api-key": "sk_live_86acb8247dcd330bc4c9a4475d6d3bccbc0ff3c6ee33f25d33b011ddabdcdbf2",
                "X-Uploadthing-Version": "6.4.0",
                "X-Uploadthing-FE-Package": "@uploadthing/react",
                "X-Uploadthing-BE-Adapter": "custom-client",
            },
            body: JSON.stringify({
                files: [
                    {
                        name: form?.resume?.name,
                        size: form?.resume?.size,
                        type: form?.resume?.type,
                        customId: null,
                    },
                ],
                acl: "public-read",
                metadata: null,
                contentDisposition: "inline",
            }),
        });

        const { data } = await res.json();
        return data[0];
    };

    const uploadFileToS3 = async (uploadData: any) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(uploadData.fields)) {
            formData.append(key, value as any);
        }
        formData.append("file", form.resume);

        await fetch(uploadData.url, {
            method: "POST",
            body: formData,
        });

        return uploadData.fileUrl; // Final file link (public)
    };

    const handleSubmit = async (e: any) => {
        try {
            setState("loading")
            e.preventDefault();
            const validationErrors = validateForm();
            if (Object.keys(validationErrors).length > 0) {
                alert("Please enter all the fields")
                return;
            }
            setErrors({});
            // TODO: handle successful form submission (e.g., API call)

            const presigned = await getPresignedUrl();
            const fileUrl = await uploadFileToS3(presigned);

            const templateParams = {
                from_name: `${form.firstName} ${form.lastName}`,
                email: e.target.email.value,
                phone_no: form.phone,
                linkedin_url: form.linkedin,
                summary: form.summary,
                resume_url: fileUrl,
            };

            emailjs.init({
                publicKey: 'zUPHeeSaWEDRpf-z4'
            })

            await emailjs.send(
                "sustains_ai_gmail",
                "sustains_ai_careers",
                templateParams
            );
            setState("completed")
        } catch (error: any) {
            alert("Something went wrong...")
            setState("")
        }
    };

    return (
        <div className="container content-space-2 content-space-lg-3">
            <LoadingIndicator loading={state === "loading"} />
            <div className="text-center mb-7">
                <div className="mb-3">
                    <Link className="link link-secondary" href="/">
                        <i className="bi-arrow-left small me-1" /> Go back
                    </Link>
                </div>
                {
                    state === "completed" ?
                        <div style={{ height: "20vh" }}>
                            <h1>Application submitted successfully!!</h1>
                        </div>
                        :
                        <h1>{state === "completed" ? "Application submitted successfully!!" : "Apply"}</h1>

                }
            </div>
            {
                state !== "completed" &&
                <>
                <JobPosting />
                <div className="w-lg-75 mx-lg-auto">
                    <div className="card card-shadow">
                        <div className="card-body p-sm-7 p-md-10">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-5">
                                    <h4 className="card-title">1. Personal details</h4>
                                    <p className="card-text">We&apos;ll need these details to contact you.</p>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 mb-4">
                                        <label className="form-label" htmlFor="firstName">First name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="firstName"
                                            id="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            placeholder="First name"
                                        />
                                        {errors.firstName && <div className="text-sm text-danger">{errors.firstName}</div>}
                                    </div>
                                    <div className="col-sm-6 mb-4">
                                        <label className="form-label" htmlFor="lastName">Last name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="lastName"
                                            id="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            placeholder="Last name"
                                        />
                                        {errors.lastName && <div className="text-sm text-danger">{errors.lastName}</div>}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label" htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        name="email"
                                        id="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="email@site.com"
                                    />
                                    {errors.email && <div className="text-sm text-danger">{errors.email}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="form-label" htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="phone"
                                        id="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                    />
                                    {errors.phone && <div className="text-sm text-danger">{errors.phone}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="form-label" htmlFor="linkedin">LinkedIn URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="linkedin"
                                        id="linkedin"
                                        value={form.linkedin}
                                        onChange={handleChange}
                                        placeholder="www.linkedin.com/in/yourname"
                                    />
                                    {errors.linkedin && <div className="text-sm text-danger">{errors.linkedin}</div>}
                                </div>

                                <hr className="my-md-7" />
                                <div className="mb-5">
                                    <h4 className="card-title">2. Profile</h4>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="resume" className="form-label">Résumé / CV</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="resume"
                                        id="resume"
                                        onChange={handleChange}
                                    />
                                    {errors.resume && <div className="text-sm text-danger">{errors.resume}</div>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="summary" className="form-label">Personal summary</label>
                                    <textarea
                                        className="form-control"
                                        name="summary"
                                        id="summary"
                                        value={form.summary}
                                        onChange={handleChange}
                                        placeholder="Add a cover letter or anything else you want to share."
                                        rows={5}
                                    />
                                </div>

                                <hr className="my-md-7" />
                                <div className="mb-5">
                                    <h4 className="card-title">3. Submit application</h4>
                                    <p>We need your consent to process your personal data.</p>
                                </div>

                                <div className="form-check mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="privacyAccepted"
                                        id="privacyAccepted"
                                        checked={form.privacyAccepted}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="privacyAccepted">
                                        Allow us to process your personal information.
                                    </label>
                                    {errors.privacyAccepted && <div className="text-sm text-danger">{errors.privacyAccepted}</div>}
                                </div>

                                <div className="flex justify-center items-center">
                                    <button type="submit" className="btn btn-primary btn-lg w-[300px]">
                                        Submit application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </>

            }
        </div>
    );
}
