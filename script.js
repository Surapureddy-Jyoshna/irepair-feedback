function sendFeedback(){

    const name=document.getElementById("name").value;
    const phone=document.getElementById("phone").value;
    const service=document.getElementById("service").value;
    const feedback=document.getElementById("feedback").value;
    
    /* Store WhatsApp Number */
    const shopNumber="919381710508";
    
    /* Message */
    
    const message=
    `iRepair Technical Services Feedback
    
    Name: ${name}
    Phone: ${phone}
    Service: ${service}
    Feedback: ${feedback}`;
    
    /* WhatsApp Link */
    
    const url=`https://wa.me/${shopNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url,"_blank");
    
    }