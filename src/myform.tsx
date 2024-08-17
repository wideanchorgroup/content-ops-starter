import React from "react";

export default function MyForm() {
  return (
    <form name="mycontact" method="post">
      <p>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" required></textarea>
      </p>
      <p>
        <input type="submit" value="Submit message" />
      </p>
    </form>
  );
}
