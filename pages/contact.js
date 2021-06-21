import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mleanwnk");
  if (state.succeeded) {
    return <p>Message sent!</p>;
  }
  return (
    //   <form onSubmit={handleSubmit}>
    //   <label htmlFor="email">
    //     <h2>Say hey!</h2>
    //   </label>
    //   <input
    //     id="email"
    //     type="email"
    //     name="email"
    //   />
    //   <ValidationError
    //     prefix="Email"
    //     field="email"
    //     errors={state.errors}
    //   />
    //   <textarea
    //     id="message"
    //     name="message"
    //   />
    //   <ValidationError
    //     prefix="Message"
    //     field="message"
    //     errors={state.errors}
    //   />
    //   <button type="submit" disabled={state.submitting}>
    //     Submit
    //   </button>
    // </form>
    <div class='grid grid-cols-3'>
      <div>
        <form onSubmit={handleSubmit} class='flex w-full max-w-sm space-x-3'>
          <div class='w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800'>
            <div
              htmlFor='email'
              class='mb-6 text-3xl font-light text-center text-gray-800 dark:text-white'
            >
              Contact us !
            </div>
            <div class='grid max-w-xl grid-cols-2 gap-4 m-auto'>
              <div class='col-span-2 lg:col-span-1'>
                <div class=' relative '>
                  <input
                    type='name'
                    id='name'
                    name='name'
                    class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent'
                    placeholder='Name'
                  />
                  <ValidationError
                    prefix='Name'
                    field='name'
                    errors={state.errors}
                  />
                </div>
              </div>
              <div class='col-span-2 lg:col-span-1'>
                <div class=' relative '>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent'
                    placeholder='Email'
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                </div>
              </div>
              <div class='col-span-2'>
                <label class='text-gray-700' for='name'>
                  <textarea
                    class='flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent'
                    id='message'
                    placeholder='Enter your comment'
                    name='message'
                    rows='5'
                    cols='40'
                  ></textarea>
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />
                </label>
              </div>
              <div class='col-span-2 text-right'>
                <button
                  type='submit'
                  disabled={state.submitting}
                  class='py-2 px-4  bg-black hover:bg-gray-500  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded'
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
