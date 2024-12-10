import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Leave a Reply</h2>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>

      <form action="" method="post" className="flex flex-col gap-4">
        <textarea
          className="p-2 px-4"
          placeholder="Comment *"
          rows="8"
          cols="50"
          name="comment"
        />
        <div className="flex flex-col gap-4 w-1/2">
          <input className="p-2 px-4" type="text" placeholder="Name *" />
          <input className="p-2 px-4" type="email" placeholder="Email *" />
          <input className="p-2 px-4" type="text" placeholder="Website" />
        </div>
        <label htmlFor="save" className="flex gap-2">
          <input type="checkbox" name="save" value="save" id="save" />
          <span>
            Save my name, email, and website in this browser for the next time I
            comment.
          </span>
        </label>
        <button type="submit" className="red__btn w-1/3 rounded-none">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
