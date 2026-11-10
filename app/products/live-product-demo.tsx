"use client";

import { useState, type FormEvent } from "react";

type LiveProductDemoProps = {
  slug: string;
};

const initialMessages = [
  { author: "Maya", text: "The updated timeline looks good to me." },
  { author: "You", text: "Great, I’ll share the next preview shortly." },
];

export default function LiveProductDemo({ slug }: LiveProductDemoProps) {
  const [crmView, setCrmView] = useState("All leads");
  const [completed, setCompleted] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [published, setPublished] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = message.trim();
    if (!text) return;
    setMessages((currentMessages) => [...currentMessages, { author: "You", text }]);
    setMessage("");
  }

  if (slug === "customer-sales-crm") {
    const leads = [
      { name: "Northstar Labs", contact: "Jamie Chen", status: "Qualified" },
      { name: "Brightpath Studio", contact: "Alex Morgan", status: "Proposal" },
      { name: "Fieldnote Co.", contact: "Riley Patel", status: "New lead" },
    ];
    const visibleLeads =
      crmView === "All leads" ? leads : leads.filter((lead) => lead.status === crmView);

    return (
      <div className="live-demo-app">
        <div className="demo-app-header">
          <div className="demo-app-brand"><i /> northstar <span>CRM</span></div>
          <span className="demo-user-avatar">A</span>
        </div>
        <div className="demo-app-body">
          <nav className="demo-app-sidebar" aria-label="CRM demo navigation">
            <span className="is-current">Pipeline</span>
            <span>Contacts</span>
            <span>Tasks</span>
          </nav>
          <div className="demo-app-main">
            <div className="demo-app-title"><div><small>SALES WORKSPACE</small><h3>Good morning, Alex</h3></div><b>+ New lead</b></div>
            <div className="demo-summary-row"><div><small>Open deals</small><strong>24</strong></div><div><small>In pipeline</small><strong>$48,600</strong></div><div><small>Due today</small><strong>6</strong></div></div>
            <div className="demo-interactive-tabs" role="group" aria-label="Filter leads">
              {["All leads", "Qualified", "Proposal"].map((view) => (
                <button className={crmView === view ? "is-active" : ""} type="button" key={view} onClick={() => setCrmView(view)}>
                  {view}
                </button>
              ))}
            </div>
            <div className="demo-table">
              <div className="demo-table-heading"><span>COMPANY</span><span>CONTACT</span><span>STATUS</span></div>
              {visibleLeads.map((lead) => (
                <div className="demo-table-row" key={lead.name}><strong>{lead.name}</strong><span>{lead.contact}</span><em>{lead.status}</em></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "service-operations-hub") {
    return (
      <div className="live-demo-app">
        <div className="demo-app-header"><div className="demo-app-brand"><i /> Fieldwork <span>OPERATIONS</span></div><span className="demo-date">TODAY · 10:24 AM</span></div>
        <div className="demo-operations">
          <div className="demo-app-title"><div><small>TEAM OVERVIEW</small><h3>Today&apos;s service schedule</h3></div><b>3 jobs</b></div>
          {[
            ["09:00", "Site inspection", "Northstar Labs", "Maya R."],
            ["11:30", "Equipment setup", "Brightpath Studio", "Jordan K."],
            ["14:00", "Maintenance visit", "Fieldnote Co.", "Sam T."],
          ].map(([time, title, client, assignee], index) => (
            <div className="demo-job-row" key={time}><time>{time}</time><span className={`demo-job-dot dot-${index + 1}`} /><div><strong>{title}</strong><small>{client}</small></div><span className="demo-job-assignee">{assignee}</span><span className="demo-job-status">{index === 0 ? "In progress" : "Scheduled"}</span></div>
          ))}
          <button className={`demo-action-button${completed ? " is-done" : ""}`} type="button" onClick={() => setCompleted(!completed)}>
            {completed ? "✓ Visit marked complete" : "Mark first visit complete"}
          </button>
        </div>
      </div>
    );
  }

  if (slug === "customer-self-service-portal") {
    return (
      <div className="live-demo-app demo-portal-app">
        <div className="demo-portal-top"><div className="demo-app-brand"><i /> northstar <span>SUPPORT</span></div><span className="demo-user-avatar">J</span></div>
        <div className="demo-portal-content">
          <small>CUSTOMER PORTAL</small>
          <h3>How can we help, Jamie?</h3>
          <p>Keep track of requests and get answers from your team.</p>
          <div className="demo-request-card"><span className="demo-request-icon">↗</span><div><strong>Website refresh</strong><small>Request #1048 · Updated today</small></div><em>In progress</em></div>
          <div className="demo-request-card"><span className="demo-request-icon">✓</span><div><strong>Account setup</strong><small>Request #1032 · Updated yesterday</small></div><em className="status-done">Resolved</em></div>
          {requestSent && <div className="demo-success-message" role="status">Your new request has been created.</div>}
          <button className="demo-action-button" type="button" onClick={() => setRequestSent(!requestSent)}>
            {requestSent ? "Create another request" : "+ Create a request"}
          </button>
        </div>
      </div>
    );
  }

  if (slug === "service-team-companion") {
    return (
      <div className="live-demo-mobile-frame">
        <div className="live-demo-phone">
          <span className="live-demo-phone-speaker" />
          <div className="demo-mobile-greeting"><small>MONDAY, OCTOBER 14</small><h3>Your day, Jamie</h3><span>3 visits scheduled</span></div>
          <div className="demo-mobile-route"><span>09:00</span><div><b>Site inspection</b><small>Northstar Labs · 24 Oak Street</small></div><i>›</i></div>
          <div className="demo-mobile-route"><span>11:30</span><div><b>Equipment setup</b><small>Brightpath Studio · 8 Market Road</small></div><i>›</i></div>
          <div className="demo-mobile-route"><span>14:00</span><div><b>Maintenance visit</b><small>Fieldnote Co. · 12 River Lane</small></div><i>›</i></div>
          <button className={`demo-mobile-complete${completed ? " is-done" : ""}`} type="button" onClick={() => setCompleted(!completed)}>
            {completed ? "Visit completed ✓" : "Complete first visit"}
          </button>
        </div>
      </div>
    );
  }

  if (slug === "connected-collaboration") {
    return (
      <div className="live-demo-app demo-chat-app">
        <div className="demo-chat-header"><div><span className="demo-online-dot" /><strong>Product team</strong><small>4 members · 2 online</small></div><button type="button" aria-label="Start a demo call">Video call</button></div>
        <div className="demo-chat-messages" aria-live="polite">
          {messages.map((item, index) => (
            <div className={`demo-chat-message${item.author === "You" ? " from-you" : ""}`} key={`${item.author}-${index}`}><span>{item.author[0]}</span><div><small>{item.author}</small><p>{item.text}</p></div></div>
          ))}
        </div>
        <form className="demo-chat-form" onSubmit={sendMessage}>
          <label className="sr-only" htmlFor="demo-message">Write a demo message</label>
          <input id="demo-message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write a message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }

  return (
    <div className="live-demo-app demo-publishing-app">
      <div className="demo-publishing-sidebar"><b>Studio Journal</b><span>Overview</span><span className="is-current">Articles</span><span>Review queue</span><span>Schedule</span></div>
      <div className="demo-publishing-main"><div className="demo-app-title"><div><small>CONTENT WORKSPACE</small><h3>Latest stories</h3></div><b>+ New article</b></div><div className="demo-article-row"><span className="demo-article-thumb" /><div><strong>Designing for the details</strong><small>Updated 2 hours ago · Alex Morgan</small></div><em>Draft</em></div><div className="demo-article-row"><span className="demo-article-thumb thumb-two" /><div><strong>A better way to collaborate</strong><small>Updated yesterday · Jamie Chen</small></div><em className="status-review">In review</em></div><button className={`demo-action-button${published ? " is-done" : ""}`} type="button" onClick={() => setPublished(!published)}>{published ? "✓ Article published" : "Publish selected article"}</button></div>
    </div>
  );
}
