"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const project = form.get("project")?.toString().trim();
    const budget = form.get("budget")?.toString();
    const timeline = form.get("timeline")?.toString();

    const subject = encodeURIComponent(`Website project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\nTimeline: ${timeline}\n\nProject:\n${project}`
    );

    window.location.href = `mailto:owainguto@icloud.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email app with the project details.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Project type
        <textarea
          name="project"
          rows="5"
          placeholder="A short note about the site, pages, and goals"
          required
        />
      </label>
      <div className="form-grid">
        <label>
          Budget
          <select name="budget" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Under £1,000</option>
            <option>£1,000 to £2,500</option>
            <option>£2,500 to £5,000</option>
            <option>£5,000+</option>
          </select>
        </label>
        <label>
          Timeline
          <select name="timeline" defaultValue="Flexible">
            <option>Flexible</option>
            <option>This month</option>
            <option>Next 6 weeks</option>
            <option>Next 3 months</option>
          </select>
        </label>
      </div>
      <button type="submit">Send enquiry</button>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
