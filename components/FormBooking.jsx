const FormBooking = ({ type,post ,setPost,submitting, handleSubmit, }) => {
    return (
      <section className='w-full max-w-full flex-center flex-col'>
        <h1 className="head_text text-left"> 
          <span className="blue_gradient">{type} Post</span> 
        </h1>
        <p className="desc text-left max-w-md">{type} and share post with the world, that generate from poweredof AI</p>
  
        <form
          onSubmit={handleSubmit}
          className='flex flex-col mt-10 w-full max-w-2xl gap-7 glassmorphism '
        >
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Your AI Prompt
            </span>
            <textarea
              value={post.prompt}
              placeholder='Write your prompt here...'
              className='form_textarea'
              required
              onChange={(e) => setPost({...post, prompt: e.target.value})}
            />
            
          </label>
  
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Tag {' '} <span className="font-normal">(#product #idae #marketing)</span>
            </span>
            <input
              value={post.tag}
              placeholder='#tag'
              className='form_input'
              required
              onChange={(e) => setPost({...post, tag: e.target.value})}
            />
            
          </label>
  
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">cancel</Link>
            <button 
            type="submit"
            disabled={submitting}
            className='px-5 py-1.5 text-sm rounded-full bg-primary-orange text-white '
          >
            {submitting ? `${type}` : type }
          </button>
  
          </div>
         
        </form>
      </section>
    )
}

export default FormBooking;