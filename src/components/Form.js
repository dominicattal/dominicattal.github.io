function Form() {
  return (
    <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value={process.env.REACT_APP_WEB3_KEY} />
      <div className="card-body text-center">
        <h4 className="card-title mb-2">Say Hello!</h4>
        <div className="form-group mb-2">
          <input className="form-control" id="fname" type="text" name="name" placeholder="Name" required />
        </div>
        <div className="form-group mb-2">
          <input className="form-control" type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group mb-2">
          <textarea className="form-control" name="message" placeholder="Message" required></textarea>
        </div>
        <input type="checkbox" name="botcheck" class="hidden" style={{ display: "none" }} />
        <button type="submit">Submit Form</button>
      </div>
    </form>
  )
}

export default Form;