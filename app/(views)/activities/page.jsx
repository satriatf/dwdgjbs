"use client";
import ActivityForm from "./ActivityForm";
import ActivityList from "./ActivityList";

export default function ActivitiesPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Activities</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ActivityForm />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ActivityList />
        </div>
      </section>
    </main>
  );
}
