import "./global.css"
import "./contact.css"

const Contact = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(e.currentTarget)
    const data = new FormData(e.currentTarget)

    // console.log(data)
    // console.log(data.get("name"))
    // console.log(data.get("number"))
    // console.log(data.get("message"))

  
    fetch("ayubxon aka qales", {
        method: 'POST',
        body: data
    }).then(response => {
        if (response.ok) {
           console.log('ok')
        } else {
          console.log("not ok");
        }
    })
  }
  
  return (
    <div>
      <h1 className="text-center">Contact</h1>
      <h5 className="text-center">Get in touch</h5>

      <br /><br /><br /><br /><br />

      <div className="form-container">
        <div className="form-image">
          <div className="text-center">Talk to me</div>
          {/* <img src="src/assets/me.jpg" alt="" /> */}
        </div>
        <form id="form" name="form" className="form" onSubmit={handleSubmit}>
          <div className="text-center">Write me your message</div>
          <input type="text" name="name" placeholder="Write your name" required/>
          <input type="number" name="number" placeholder="Write you phone number" required/>
          <textarea name="message" id="form-text" cols={30} rows={10} placeholder="Write your message" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}


export default Contact

