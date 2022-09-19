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
    <div>
      <div className='h-screen'>
        <form onSubmit={handleSubmit} class='font-body'>
          <div className='w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg dark:bg-gray-800'>
            <div
              htmlFor='email'
              className='mb-6 text-3xl font-logo font-light text-center text-gray-800 dark:text-white '
            >
              Get In Touch...
            </div>
            <div className='grid max-w-xl grid-cols-2 gap-4 m-auto'>
              <div className='col-span-2 lg:col-span-1'>
                <div className=' relative '>
                  <input
                    type='name'
                    id='name'
                    name='name'
                    className='font-thin rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent'
                    placeholder='Name'
                  />
                  <ValidationError
                    prefix='Name'
                    field='name'
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className='col-span-2 lg:col-span-1'>
                <div className=' relative '>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='font-thin rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent'
                    placeholder='Email'
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className='col-span-2'>
                <label className='text-gray-700' for='name'>
                  <textarea
                    className='font-thin flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded text-base focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent'
                    id='message'
                    placeholder='Message'
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
              <div className='col-span-2 text-right'>
                <button
                  type='submit'
                  disabled={state.submitting}
                  className='py-2 px-4  bg-black hover:bg-gray-500  text-white w-full transition ease-in duration-100 text-center text-base font-normal shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded'
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
