"use client";

import { useState } from "react";

export default function ContactForm({ copy }) {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const project = form.get("project")?.toString().trim();
    const budget = form.get("budget")?.toString();
    const timeline = form.get("timeline")?.toString();

    const subject = encodeURIComponent(`${copy.emailSubject} ${name}`);
    const body = encodeURIComponent(
      `${copy.emailBodyLabels.name}: ${name}\n${copy.emailBodyLabels.email}: ${email}\n${copy.emailBodyLabels.budget}: ${budget}\n${copy.emailBodyLabels.timeline}: ${timeline}\n\n${copy.emailBodyLabels.project}:\n${project}`
    );

    window.location.href = `mailto:owainguto@icloud.com?subject=${subject}&body=${body}`;
    setStatus(copy.status);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        {copy.name}
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        {copy.email}
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        {copy.project}
        <textarea
          name="project"
          rows="5"
          placeholder={copy.projectPlaceholder}
          required
        />
      </label>
      <div className="form-grid">
        <label>
          {copy.budget}
          <select name="budget" defaultValue={copy.budgetOptions[0]}>
            {copy.budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          {copy.timeline}
          <select name="timeline" defaultValue={copy.timelineOptions[0]}>
            {copy.timelineOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit">{copy.submit}</button>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
