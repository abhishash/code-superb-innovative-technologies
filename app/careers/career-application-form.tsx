"use client";

import { useState, type FormEvent } from "react";

const resumeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const resumeExtensions = /\.(pdf|doc|docx)$/i;
const maxResumeSize = 5 * 1024 * 1024;

export default function CareerApplicationForm() {
  const [resumeName, setResumeName] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setError("Please select your resume before continuing.");
      return;
    }

    if (
      !resumeExtensions.test(resume.name) ||
      (resume.type !== "" && !resumeTypes.has(resume.type))
    ) {
      setError("Please choose a PDF, DOC, or DOCX resume.");
      return;
    }

    if (resume.size > maxResumeSize) {
      setError("Your resume must be 5 MB or smaller.");
      return;
    }

    const fields = [
      ["Name", formData.get("name")],
      ["Email", formData.get("email")],
      ["Phone", formData.get("phone")],
      ["Role of interest", formData.get("role")],
      ["Portfolio or LinkedIn", formData.get("profile")],
      ["Experience", formData.get("experience")],
      ["Introduction", formData.get("message")],
      ["Resume filename", resume.name],
    ];
    const body = fields.map(([label, value]) => `${label}: ${value || "—"}`).join("\n");
    const subject = `Career application — ${formData.get("name")}`;

    setStatus(
      "Your email app should open with your profile details. Attach the selected resume file to the draft before sending.",
    );
    window.location.href = `mailto:hello@codexpro.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function handleResumeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    setError("");
    setStatus("");
    setResumeName(file?.name ?? "");

    if (!file) return;
    if (!resumeExtensions.test(file.name) || (file.type !== "" && !resumeTypes.has(file.type))) {
      setError("Please choose a PDF, DOC, or DOCX resume.");
      event.currentTarget.value = "";
      setResumeName("");
      return;
    }
    if (file.size > maxResumeSize) {
      setError("Your resume must be 5 MB or smaller.");
      event.currentTarget.value = "";
      setResumeName("");
    }
  }

  return (
    <form className="contact-form career-application-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Full name *
          <input autoComplete="name" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email address *
          <input
            autoComplete="email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Phone number
          <input autoComplete="tel" name="phone" placeholder="Your phone number" type="tel" />
        </label>
        <label>
          Role you&apos;re interested in *
          <input name="role" placeholder="e.g. Frontend Developer" required />
        </label>
      </div>

      <div className="form-row">
        <label>
          LinkedIn or portfolio
          <input
            autoComplete="url"
            name="profile"
            placeholder="https://"
            type="url"
          />
        </label>
        <label>
          Years of experience
          <select className="career-form-select" name="experience" defaultValue="">
            <option value="">Select experience</option>
            <option>Student / recent graduate</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>6+ years</option>
          </select>
        </label>
      </div>

      <label>
        A short introduction
        <textarea
          name="message"
          placeholder="Tell us what you do and the kind of work you’re looking for."
          rows={4}
        />
      </label>

      <label className="career-resume-label">
        Resume * <span>PDF, DOC, or DOCX · up to 5 MB</span>
        <input
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="career-resume-input"
          name="resume"
          onChange={handleResumeChange}
          required
          type="file"
        />
        {resumeName && <span className="career-resume-name">{resumeName}</span>}
      </label>

      <p className="career-resume-note">
        Your details will open in an email draft. Attach your selected resume to
        that draft before sending; this page does not upload or store files.
      </p>

      {error && (
        <p className="career-form-message is-error" role="alert">
          {error}
        </p>
      )}
      {status && (
        <p className="career-form-message" role="status">
          {status}
        </p>
      )}

      <button className="button button-dark career-submit" type="submit">
        Prepare application email <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
