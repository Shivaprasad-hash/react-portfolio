import "./Contact.css";

function Contact(){
    return(
        <div class="contact_bg_cont scroll_ani" id="contactSection">
            <div class="cont_heading_cont  pt-3 pb-4">
                <i class="fa-solid fa-headset cont_icon mr-3"></i>
                <h2 class="contact_heading d-inline">Get in touch</h2>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" class="contact_card_cont">
                <input type="hidden" name="access_key" value="f3a7285d-a3be-464d-80ba-d47e57b11694"/>
                
                <input name="name" type="text" placeholder="Name" class="contact_inputs" required/>
                <input name="email" type="email" placeholder="Email" class="contact_inputs"  required/>
                <input name="phone" type="text" placeholder="Phone" class="contact_inputs" required/>
                <textarea name="message" class="contact_inputs messege_sec" placeholder="Message" required></textarea>
                <div class="cont_btn_cont">
                    <button type="submit" class="submit_Btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;